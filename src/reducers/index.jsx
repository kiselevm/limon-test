import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router';

import errorReducer from "./shared/modal/error.reducer.jsx";

import userInfoReducer from "./pages/app/user.info.reducer.jsx";

const reducers = {
    error: errorReducer,

    userInfo: userInfoReducer
};

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    ...reducers
});

export default createRootReducer;