import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
import { Provider, ReactReduxContext } from 'react-redux';

import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

import configureStore, { history } from './store/index';

const store = configureStore(/* provide initial state if any */);

ReactDOM.render(
    <Provider store={store} context={ReactReduxContext}>
        <App history={history} context={ReactReduxContext} />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
