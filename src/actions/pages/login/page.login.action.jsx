import * as userInfoActions from '../app/user.info.action.jsx';

export const login = (data) => {
    return (dispatch) => {
        dispatch(userInfoActions.setUserInfo(data));
    };
};