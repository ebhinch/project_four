import React from 'react';
import Comment from "./Comment"
import CreateComment from "./CreateComment"

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
            <button>Add Comment</button>
            <CreateComment />

        </div>
    );
};

export default CommentList;