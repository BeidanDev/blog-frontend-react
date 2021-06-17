import clientAxios from '../config/axios';
import { types } from '../types/types';

export const getPostsAction = () => {
    return async (dispatch) => {
        dispatch(listPosts());

        try {
            const response = await clientAxios.get('/posts');

            dispatch(listPostsSuccess(response.data));
        } catch (error) {
            console.log(error);
            dispatch(listPostsError());
        }
    }
}

const listPosts = () => ({
    type: types.postsStartList,
    payload: true
});

const listPostsSuccess = posts => ({
    type: types.postsSuccessList,
    payload: posts
});

const listPostsError = () => ({
    type: types.postsErrorList,
    payload: true
});