import React from 'react';
import styled from 'styled-components'

const AlertDiv = styled.span`
    font-size: 12px;

    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-color: #FF5D55;
    margin-top: 2px;
    padding: 3px;
    max-width: 250px;
`


const CommentSignInAlert = () => {
    return (
        <AlertDiv>
            <span>You must be logged in to leave a comment</span>
        </AlertDiv>
    );
};

export default CommentSignInAlert;