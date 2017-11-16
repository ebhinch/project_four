import React from 'react';
import moment from 'moment';
import 'moment-timezone';



const Comment = (props) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <h5>{props.text}</h5>
       
            Posted: {moment(props.created_at).fromNow()}

        </div>
    );
};

export default Comment;