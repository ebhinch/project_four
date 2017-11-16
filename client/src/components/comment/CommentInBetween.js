import React from 'react';
import CommentSignInAlert from "./CommentSignInAlert"
import CreateComment from "./CreateComment"

const CommentInBetween = (props) => {
    return (
        <div>
            {!props.signedIn ? <CommentSignInAlert /> : <CreateComment />}
        </div>
    );
};

export default CommentInBetween;