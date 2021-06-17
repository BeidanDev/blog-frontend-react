import Swal from 'sweetalert2';
import clientAxios from '../config/axios';
import { types } from '../types/types';

// List
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

// Create
export const createNewPostsAction = posts => {
    return async (dispatch) => {
        dispatch(addPosts());

        try {
            await clientAxios.post('/posts', posts);

            dispatch(addPostsSuccess(posts));

            Swal.fire(
                'Correcto',
                'El posts se agregó correctamente',
                'success'
            );
        } catch (error) {
            console.log(error);

            dispatch(addPostsError(true));

            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Hubo un error, intenta de nuevo'
            });
        }
    }
}

const addPosts = () => ({
    type: types.postsStartNew,
    payload: true
});

const addPostsSuccess = posts => ({
    type: types.postsSuccessNew,
    payload: posts
});

const addPostsError = state => ({
    type: types.postsErrorNew,
    payload: state
});