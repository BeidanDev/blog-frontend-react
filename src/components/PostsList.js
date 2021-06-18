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
                { error ? <div className="alert alert-danger text-center mt-4" role="alert"><strong>There was a mistake</strong></div> : null }
                <h2 className="text-center mb-4">List of Posts</h2>

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
