import React from 'react';

const ConfirmationAlert = (props) => {
    return (
        <div>
            <h4>Are you sure you want to delete this event? </h4>
            <button>Yes, Confirm Delete </button>
            <button onClick={() => props.toggleShowConfirmationAlert()}>Cancel, Keep Event</button>
        </div>
    );
};

export default ConfirmationAlert;