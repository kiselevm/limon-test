import Config from 'Config';
import { LoginStorage } from "../../../static/custom.local.storage.jsx";
import { customError } from "../../shared/modal/error.action.jsx";

export const setUserInfo = (data) => {
    return (dispatch) => {
        const { users } = Config;

        if (users.some(x => x.login === data.login && x.password === data.password)) {
            LoginStorage.setItem(data.login);
            dispatch({ type: 'USER_INFO', login: data.login });
        } else {
            dispatch(customError("Ошибка", [{ description: "Имя пользователя или пароль введены не верно" }]));
        }
    };
};

export const getUserInfo = () => {
    return (dispatch) => {
        const login = LoginStorage.getItem();

        if (login !== null) {
            dispatch({ type: 'USER_INFO', login: login });
        }
    };
};

export const logout = () => {
    return (dispatch) => {
        LoginStorage.setItem(null);
        dispatch({ type: 'USER_INFO', login: null });
    };
};