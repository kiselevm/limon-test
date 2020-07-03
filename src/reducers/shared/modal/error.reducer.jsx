const initialState = {
    show: false, title: null, errors: []
};

const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ERROR_SHOW':
            return { ...state, show: action.payload, title: action.title, errors: action.errors };
        case 'ERROR_CUSTOM':
            return { ...state, show: true, title: action.title, errors: action.errors };

        default:
            return state;
    }
};

export default errorReducer;