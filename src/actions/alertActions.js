import { types } from '../types/types';

// Show
export const showAlertAction = alert => {
    return (dispatch) => {
        dispatch(createAlert(alert));
    }
}

const createAlert = alert => ({
    type: types.postsShowAlert,
    payload: alert
});

// Hide
export const hideAlertAction = () => {
    return (disptach) => {
        disptach(hideAlert());
    }
}

const hideAlert = () => ({
    type: types.postsHideAlert
});