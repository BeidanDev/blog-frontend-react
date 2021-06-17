import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { hideAlertAction, showAlertAction } from '../actions/alertActions';

import { updatePostsAction } from '../actions/postsActions';

export const PostsUpdate = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const [posts, savePosts] = useState({
        title: '',
        body: ''
    });

    const postsupdate = useSelector(state => state.posts.postsupdate);
    const alert = useSelector(state => state.alert.alert);

    useEffect(() => {
        savePosts(postsupdate);
    }, [postsupdate]);

    const onChangeForm = e => {
        savePosts({
            ...posts,
            [e.target.name] : e.target.value
        });
    }

    const { title, body } = posts;

    const submitUpdatePosts = e => {
        e.preventDefault();

        if(title.trim() === '' || body.trim() === '') {
            const alert = {
                msg: 'Both are required',
                classes: 'alert alert-danger text-center'
            }

            dispatch(showAlertAction(alert));

            return;
        }

        dispatch(hideAlertAction());

        dispatch(updatePostsAction(posts));

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
                                    Update Posts
                                </h2>

                                { alert ? <div className={ alert.classes } role="alert">{ alert.msg }</div> : null }

                                <form
                                    onSubmit={ submitUpdatePosts }
                                >
                                    <div className="form-group">
                                        <label>Title</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Title"
                                            name="title"
                                            value={ title }
                                            onChange={ onChangeForm }
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Concepts</label>
                                        <textarea
                                            type="text"
                                            className="form-control"
                                            rows="5"
                                            placeholder="Concepts"
                                            name="body"
                                            value={ body }
                                            onChange={ onChangeForm }
                                        >
                                        </textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-primary font-weight-bold text-uppercase d-block w-100 mt-5"
                                    >Save changes</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
