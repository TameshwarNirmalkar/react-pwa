import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

import { connectRouter } from 'connected-react-router'
 
// const createRootReducer = (history) => combineReducers({
//   router: connectRouter(history),
//   ... // rest of your reducers
// })
// export default createRootReducer

import home from '../pages/home/home.reducer';
import aboutus from '../pages/aboutus/about-us.reducer';
import bookingSytem from '../common/bookingsystem/bookingSytem.reducer';


const createRootReducer = (history) =>  combineReducers({
    history,
    router: connectRouter(history),
    home,
    aboutus,
    bookingSytem,
    form: reduxFormReducer
})

export default createRootReducer;