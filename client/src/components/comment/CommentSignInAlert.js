import React from 'react';
import styled from 'styled-components'

const AlertDiv = styled.div`
    font-size: 10px;
    color: red;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-color: #F3FAFF;
    margin: 5px;
    padding: 3px;

    h2 {
        margin: 0
    }
`


const CommentSignInAlert = () => {
    return (
        <AlertDiv>
            <h2>You must be logged in to leave a comment</h2>
        </AlertDiv>
    );
};

export default CommentSignInAlert;