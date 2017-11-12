import React from 'react';
import Event from "./Event"

const EventList = (props) => {
    return (
        <div>
            <h1>THIS IS THE EVENT LIST COMPONENT</h1>
            {props.events.map((event) => {
                return (
                    <div>
                        <Event {...event} key={event.id}/>
                    </div>
                )
            })}

        </div>
    );
};

export default EventList;













