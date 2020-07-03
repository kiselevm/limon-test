const initialState = {
    login: null
};

const userInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USER_INFO':
            return { ...state, login: action.login };
        default:
            return state;
    }
};

export default userInfoReducer;