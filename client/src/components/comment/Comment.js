import React from 'react';
import moment from 'moment';
import 'moment-timezone';
import styled from 'styled-components'

const ShadowDiv = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-color: #F3FAFF;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 5px;
    margin-right: 5px;
    padding: 10px;
    min-height: 250px;
    min-width: 38%;
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