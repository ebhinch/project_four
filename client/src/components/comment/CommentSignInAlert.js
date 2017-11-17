import React from 'react';
import styled from 'styled-components'

const AlertDiv = styled.div`
    font-size: 10px;
    color: yellow;
`

const CommentSignInAlert = () => {
    return (
        <AlertDiv>
            <h2>You must be logged in to leave a comment</h2>
        </AlertDiv>
    );
};

export default CommentSignInAlert;