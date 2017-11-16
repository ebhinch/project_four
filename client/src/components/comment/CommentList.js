import React from 'react';
import Comment from "./Comment"
import styled from "styled-components"

const CommentContainer = styled.div`
    display: flex;
    flex-direction: row;
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