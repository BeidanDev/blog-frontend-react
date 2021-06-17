import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { createNewPostsAction } from '../actions/postsActions';

export const PostsNew = ({ history }) => {
    const [title, setTitle] = useState();
    const [body, setBody] = useState();

    const dispatch = useDispatch();

    const addPosts = posts => dispatch(createNewPostsAction(posts));

    const submitNewPosts = e => {
        e.preventDefault();

        addPosts({
            title,
            body
        });

        history.push('/');
    }
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card mb-4">
                            <div className="card-body">
                                <h2 className="text-center mb-4 font-weight-bold">
                                    New Posts
                                </h2>

                                <form
                                    onSubmit={ submitNewPosts }
                                >
                                    <div className="form-group">
                                        <label>Title</label>
                                        <input
                                            type="text"
                                            className='form-control'
                                            placeholder="Title"
                                            name="title"
                                            value={ title }
                                            onChange={ e => setTitle(e.target.value) }
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Contents</label>
                                        <textarea
                                            type="text"
                                            className='form-control'
                                            rows="5"
                                            placeholder="Contents"
                                            name="body"
                                            value={ body }
                                            onChange={ e => setBody(e.target.value) }
                                        >
                                        </textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-primary font-weight-bold text-uppercase d-block w-100 mt-5"
                                    >Add posts</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
