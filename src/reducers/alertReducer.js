import { types } from "../types/types";

const initialState = {
    alert: null
}

export const alertReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.postsShowAlert:
            return {
                ...state,
                alert: action.payload
            }

        case types.postsHideAlert:
            return {
                ...state,
                alert: null
            }
    
        default:
            return state;
    }
}