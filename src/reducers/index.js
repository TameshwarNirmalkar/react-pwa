import { combineReducers } from 'redux';

import home from '../pages/home/home.reducer';
import aboutus from '../pages/aboutus/about-us.reducer';


const rootReducer =  combineReducers({
    home,
    aboutus
})

export default rootReducer;