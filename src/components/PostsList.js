import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPostsAction } from '../actions/postsActions';
import { Posts } from './Posts';

export const PostsList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const loadPosts = () => dispatch(getPostsAction());
        loadPosts();
    }, [dispatch]);

    const posts = useSelector(state => state.posts.posts);
    const error = useSelector(state => state.posts.error);

    return (
        <>
            <div className="container">
                <h2 className="text-center mb-4">List of Posts</h2>

                { error ? <p className="font-weight-bold alert alert-danger text-center mt-4">Hubo un error</p> : null }

                <table className="table table-striped mt-2 mb-2">
                    <thead className="thead-dark">
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Actions</th>
                            </tr>
                    </thead>
                    <tbody>
                        {
                            posts.map(posts => (
                                <Posts
                                    key={ posts.id }
                                    posts={ posts }
                                />
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}
