import React from 'react';
import styled from 'styled-components'

const AlertSpan = styled.div`
    font-size: 16px;
    font-weight: bold;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    color: #800D57;
    margin-top: 3px;
    padding: 5px;
    max-width: 250px;
`


const CommentSignInAlert = () => {
    return (
        <AlertSpan>
            <span>You must be logged in to leave a comment</span>
        </AlertSpan>
    );
};

export default CommentSignInAlert;