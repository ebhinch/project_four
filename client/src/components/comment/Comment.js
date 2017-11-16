import React from 'react';
import moment from 'moment';
import 'moment-timezone';
import styled from 'styled-components'

const ShadowDiv = styled.div`
    width: 300px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-color: #e3f2fd;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 10px;
    height: 30vh;
    display: row;
    @media only screen and (max-width: 599px) {
        width: 100%;
        flex-direction: column;
        background-color: orange;
    }

 

`



const Comment = (props) => {
    return (
        <ShadowDiv>
            <h3>{props.title}</h3>
            <h5>{props.text}</h5>
       
            Posted: {moment(props.created_at).fromNow()}

        </ShadowDiv>
    );
};

export default Comment;