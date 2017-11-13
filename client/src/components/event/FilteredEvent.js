import React from 'react';
import { Link } from "react-router-dom"

const FilteredEvent = (props) => {
    return (
        <div>

            <Link to={`/towns/${props.townId}/events/${props.event.id}`}>{props.event.name}</Link>

            <p>{props.event.date}</p>
            <button>Delete Event</button>

        </div>
    );
};

export default FilteredEvent;