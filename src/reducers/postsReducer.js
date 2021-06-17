import { types } from '../types/types';

const initialState = {
    posts: [],
    error: null,
    postsdelete: null,
    postsupdate: null,
    postsdetail: null
};

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.postsStartList:
        case types.postsStartNew:
        case types.postsStartUpdate:
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
        case types.postsErrorUpdate:
        case types.postsErrorDelete:
        case types.postsErrorDetail:
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

        case types.postsGetUpdate:
            return {
                ...state,
                postsupdate: action.payload
            }

        case types.postsSuccessUpdate:
            return {
                ...state,
                postsupdate: null,
                posts: state.posts.map(
                    e => (e.id === action.payload.id) ? action.payload : e
                )
            }

        case types.postsGetDelete:
            return {
                ...state,
                postsdelete: action.payload
            }

        case types.postsSuccessDelete:
            return {
                ...state,
                posts: state.posts.filter(
                    e => (e.id !== state.postsdelete)
                ),
                postsdelete: null
            }

        case types.postsGetDetail:
            return {
                ...state,
                error: null,
                postsdetail: action.payload
            }

        default:
            return state;
    }
}