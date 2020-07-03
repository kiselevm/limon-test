import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import createRootReducer from '../reducers/index.jsx';

export const history = createBrowserHistory();

const middleware = [
    thunk,
    routerMiddleware(history)
];

const logMiddleware = ({ getState }) => (next) => (action) => {
    console.log(action.type, action);
    return next(action);
};

const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        });
    }

    return next(action);
};

export const store = createStore(
    createRootReducer(history),
    compose(applyMiddleware(...middleware, stringMiddleware, logMiddleware))
);