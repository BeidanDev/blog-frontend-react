import React from 'react';

export const Posts = ({ posts }) => {
    const { title } = posts;

    return (
        <tr>
            <td>{ title }</td>
            <td>
                <button
                    type="button"
                    className="btn btn-info mr-2 mb-2"
                >
                    Detail
                </button>
                <button 
                    type="button"
                    className="btn btn-primary mr-2 mb-2"
                >
                    Update
                </button>
                <button 
                    type="button"
                    className="btn btn-danger mr-2 mb-2"
                >
                    Delete
                </button>
            </td>
        </tr>
    )
}
