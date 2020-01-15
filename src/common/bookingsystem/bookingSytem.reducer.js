import { FETCH_CITIES } from './action.types';

const initialStates = {
    bookingPayload: {
        origin: null,
        destination: null,
        leaving: new Date(),
        returning: new Date(),
        adults: 0,
        children: 0,
    },
    cities: []
    
};

const bookingSystemReducer = (state = initialStates, action) => {
    switch (action.type) {
        case FETCH_CITIES:
            return { ...state, ...action.payload }

        default:
            return state;
    }
};

export default bookingSystemReducer;