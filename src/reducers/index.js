import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

import home from '../pages/home/home.reducer';
import aboutus from '../pages/aboutus/about-us.reducer';
import bookingSytem from '../common/bookingsystem/bookingSytem.reducer';


const rootReducer =  combineReducers({
    home,
    aboutus,
    bookingSytem,
    form: reduxFormReducer
})

export default rootReducer;