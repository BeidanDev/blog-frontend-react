import { types } from '../types/types';

const initialState = {
    posts: [],
    error: null,
    postseliminar: null,
    postseditar: null
};

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.postsStartList:
        case types.postsStartNew:
            return {
                ...state
            }

        case types.postsSuccessNew:
            return {
                ...state,
                posts: [...state.posts, action.payload]
            }
        
        case types.postsErrorList:
        case types.postsErrorNew:
            return {
                ...state,
                error: action.payload
            }

        case types.postsSuccessList:
            return {
                ...state,
                error: null,
                posts: action.payload
            }

        default:
            return state;
    }
}