import React from 'react';
import Comment from "./Comment"
import styled from "styled-components"

const CommentContainer = styled.div`
display: flex;
flex-direction: row;
height: auto;
margin-top: 10px;

    @media only screen and (max-width: 599px) {
        flex-direction: column;
        width: 100%;
    }
`

const CommentList = (props) => {
    return (
        <CommentContainer>
            {props.comments.map((comment) => {
                return (
                    <div>
                        <Comment {...comment} key={comment.id} />

                    </div>
                )
            })}


        </CommentContainer>
    );
};

export default CommentList;