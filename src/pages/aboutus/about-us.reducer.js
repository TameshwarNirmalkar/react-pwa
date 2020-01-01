import { FETCH_EMP_DATA, SET_ABT_TITLE } from './action-types';

const initialStates = {
    title: null,
    employeeData: null,
};

const aboutUsReducer = (state = initialStates, action) => {
    switch (action.type) {
        case FETCH_EMP_DATA:
            return { ...state, ...action.payload }
        
        case SET_ABT_TITLE:
            return { ...state, ...action.payload }

        default:
            return state;
    }
};

export default aboutUsReducer;