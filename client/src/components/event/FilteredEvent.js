import React from 'react';
import { Link } from "react-router-dom"

const FilteredEvent = (props) => {
    return (
        <div>

            <Link to={`/towns/${props.townId}/events/${props.event.id}`}>{props.event.name}</Link>

            <p>{props.event.date}</p>

            <button onClick={() => props.deleteEvent(props.event.id)}>Delete Event</button>

        </div>
    );
};

export default FilteredEvent;