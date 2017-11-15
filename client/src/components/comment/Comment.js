import React from 'react';




const Comment = (props) => {
    return (
        <div>
            <h1>THIS IS THE COMMENT COMPONENT - SHOWING COMMENTS FOR INDIVIDUAL EVENTS</h1>
            <h4>{props.title}</h4>
            <h5>{props.text}</h5>
      
        </div>
    );
};

export default Comment;