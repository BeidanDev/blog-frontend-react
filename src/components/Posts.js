import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import { deletePostsAction, getPostsDetail, getPostsUpdate } from '../actions/postsActions';

export const Posts = ({ posts }) => {
    const { title, id } = posts;

    const dispatch = useDispatch();
    const history = useHistory();

    const confirmDeletePosts = id => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger mr-3'
            },
            buttonsStyling: false
        });

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "An posts that is deleted cannot be recovered",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Accept',
            cancelButtonText: 'Cancel',
            reverseButtons: true
        }).then((result) => {
            if (result.value) {
                dispatch(deletePostsAction(id));
            }
        });
    }

    const redirectUpdate = posts => {
        dispatch(getPostsUpdate(posts));

        history.push(`/update-posts/${ posts.id }`);
    }

    const redirectDetail = posts => {
        dispatch(getPostsDetail(posts));

        history.push(`/posts/${ posts.id }`);
    }

    return (
        <tr>
            <td>{ title }</td>
            <td>
                <button
                    type="button"
                    className="btn btn-info mr-2 mb-2"
                    onClick={ () => redirectDetail(posts) }
                >
                    Detail
                </button>
                <button 
                    type="button"
                    className="btn btn-primary mr-2 mb-2"
                    onClick={ () => redirectUpdate(posts) }
                >
                    Update
                </button>
                <button 
                    type="button"
                    className="btn btn-danger mr-2 mb-2"
                    onClick={ () => confirmDeletePosts(id) }
                >
                    Delete
                </button>
            </td>
        </tr>
    )
}
