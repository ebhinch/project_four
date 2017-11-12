import React from 'react';


const EventList = (props) => {
    return (
        <div>
            <h1>THIS IS THE EVENT LIST COMPONENT</h1>
            {props.events.map((event) => {
                return (
                    <div>{event.name}</div>
                )
            })}

        </div>
    );
};

export default EventList;













