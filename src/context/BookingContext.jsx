import { createContext, useContext, useReducer } from 'react';
import { format, differenceInDays, addDays } from 'date-fns';

const BookingContext = createContext();

const initialState = {
    step: 1,
    checkIn: format(addDays(new Date(), 7), 'yyyy-MM-dd'),
    checkOut: format(addDays(new Date(), 10), 'yyyy-MM-dd'),
    adults: 2,
    children: 0,
    selectedRoom: null,
    selectedPackages: [],
    guestInfo: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        country: '',
        specialRequests: ''
    },
    paymentInfo: null,
    bookingConfirmed: false,
    promoCode: '',
    promoDiscount: 0
};

function bookingReducer(state, action) {
    switch (action.type) {
        case 'SET_DATES':
            return { ...state, checkIn: action.checkIn, checkOut: action.checkOut };
        case 'SET_GUESTS':
            return { ...state, adults: action.adults, children: action.children };
        case 'SELECT_ROOM':
            return { ...state, selectedRoom: action.room, step: 2 };
        case 'ADD_PACKAGE':
            return { ...state, selectedPackages: [...state.selectedPackages, action.package] };
        case 'REMOVE_PACKAGE':
            return { ...state, selectedPackages: state.selectedPackages.filter(p => p.id !== action.packageId) };
        case 'SET_GUEST_INFO':
            return { ...state, guestInfo: { ...state.guestInfo, ...action.info } };
        case 'SET_PAYMENT_INFO':
            return { ...state, paymentInfo: action.info };
        case 'SET_STEP':
            return { ...state, step: action.step };
        case 'APPLY_PROMO':
            return { ...state, promoCode: action.code, promoDiscount: action.discount };
        case 'CONFIRM_BOOKING':
            return { ...state, bookingConfirmed: true };
        case 'RESET_BOOKING':
            return initialState;
        default:
            return state;
    }
}

export function BookingProvider({ children }) {
    const [state, dispatch] = useReducer(bookingReducer, initialState);

    const getNights = () => {
        if (!state.checkIn || !state.checkOut) return 0;
        return differenceInDays(new Date(state.checkOut), new Date(state.checkIn));
    };

    const getRoomTotal = () => {
        if (!state.selectedRoom) return 0;
        return state.selectedRoom.basePrice * getNights();
    };

    const getPackagesTotal = () => {
        return state.selectedPackages.reduce((sum, pkg) => sum + pkg.price, 0);
    };

    const getSubtotal = () => {
        return getRoomTotal() + getPackagesTotal();
    };

    const getDiscount = () => {
        return getSubtotal() * (state.promoDiscount / 100);
    };

    const getTaxes = () => {
        return (getSubtotal() - getDiscount()) * 0.12; // 12% tax
    };

    const getTotal = () => {
        return getSubtotal() - getDiscount() + getTaxes();
    };

    const value = {
        ...state,
        dispatch,
        getNights,
        getRoomTotal,
        getPackagesTotal,
        getSubtotal,
        getDiscount,
        getTaxes,
        getTotal
    };

    return (
        <BookingContext.Provider value={value}>
            {children}
        </BookingContext.Provider>
    );
}

export function useBooking() {
    const context = useContext(BookingContext);
    if (!context) {
        throw new Error('useBooking must be used within a BookingProvider');
    }
    return context;
}
