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
                'Correct',
                'The posts was added successfully',
                'success'
            );
        } catch (error) {
            console.log(error);

            dispatch(addPostsError(true));

            Swal.fire({
                icon: 'error',
                title: 'There was a mistake',
                text: 'There was a mistake, try again'
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

// Update
export const getPostsUpdate = posts => {
    return (disptach) => {
        disptach(getPostsUpdateAction(posts));
    }
}

const getPostsUpdateAction = posts => ({
    type: types.postsGetUpdate,
    payload: posts
});

export const updatePostsAction = posts => {
    return async (disptach) => {
        disptach(updatePosts());

        try {
            await clientAxios.put(`/posts/${ posts.id }`, posts);

            disptach(updatePostsSuccess(posts));

            Swal.fire(
                'Correct',
                'The posts was updated successfully',
                'success'
            );
        } catch (error) {
            console.log(error);

            disptach(updatePostsError());

            Swal.fire({
                icon: 'error',
                title: 'There was a mistake',
                text: 'There was a mistake, try again'
            });
        }
    }
}

const updatePosts = () => ({
    type: types.postsStartUpdate
});

const updatePostsSuccess = posts => ({
    type: types.postsSuccessUpdate,
    payload: posts
});

const updatePostsError = () => ({
    type: types.postsErrorUpdate,
    payload: true
});

// Delete
export const deletePostsAction = id => {
    return async (disptach) => {
        disptach(getPostsDelete(id));

        try {
            await clientAxios.delete(`/posts/${ id }`);

            disptach(deletePostsSuccess());

            Swal.fire(
                'Remove',
                'The posts was successfully removed',
                'success'
            );
        } catch (error) {
            console.log(error);

            disptach(deletePostsError());

            Swal.fire({
                icon: 'error',
                title: 'There was a mistake',
                text: 'There was a mistake, try again'
            });
        }
    }
}

const getPostsDelete = id => ({
    type: types.postsGetDelete,
    payload: id
});

const deletePostsSuccess = () => ({
    type: types.postsSuccessDelete
});

const deletePostsError = () => ({
    type: types.postsErrorDelete,
    payload: true
});

// Detail
export const getPostsDetail = posts => {
    return (disptach) => {
        disptach(getPostsDetailAction(posts));
    }
}

const getPostsDetailAction = posts => ({
    type: types.postsGetDetail,
    payload: posts
});

export const detailPostsAction = posts => {
    return async (disptach) => {
        try {
            await clientAxios.get(`/posts/${ posts.id }`, posts);
        } catch (error) {
            console.log(error);

            disptach(detailPostsError());
        }
    }
}

const detailPostsError = () => ({
    type: types.postsErrorDetail,
    payload: true
});