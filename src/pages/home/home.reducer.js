import { FETCH_DATA, SET_TITLE } from './action-types';

const initialStates = {
    title: null,
    loginUser: null,
    userData: null
};

const homeReducer = (state = initialStates, action) => {
    switch (action.type) {
        case FETCH_DATA: 
            return { ...state, ...action.payload }

        case SET_TITLE:
            return { ...state, ...action.payload }
    
        default:
            return state;
    }
};

export default homeReducer;