export const toggleError = (bool) => {
    return {
        type: 'ERROR_SHOW',
        payload: bool,
        title: null,
        errors: []
    };
};

export const customError = (title, errors) => {
    return (dispatch) => {
        dispatch({ type: 'ERROR_CUSTOM', title: title, errors: errors });
    };
};