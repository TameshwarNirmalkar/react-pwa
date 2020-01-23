import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router'


import createRootReducer from '../reducers';
export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
    const store = createStore(
        createRootReducer(history),
        preloadedState,
        compose(
            applyMiddleware(logger, thunk, routerMiddleware(history))
        )
    );

    return store;
}