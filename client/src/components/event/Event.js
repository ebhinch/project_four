import React from 'react';
import CommentList from "../comment/CommentList"
const Event = (props) => {
    return (
        <div>
            <h4>{props.name}</h4>
            <h5>{props.date}</h5>
      
        </div>
    );
};

export default Event;