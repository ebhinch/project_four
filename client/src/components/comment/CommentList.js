import React from 'react';
import Comment from "./Comment"

const CommentList = (props) => {
    return (
        <div>
            <h1>THIS IS THE COMMENT LIST COMPONENT</h1>
            {props.comments.map((comment) => {
                return (
                    <div>
                        <Comment {...comment} key={comment.id} />
                    </div>
                )
            })}
        </div>
    );
};

export default CommentList;