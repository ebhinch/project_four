import React from 'react';
import { Link } from "react-router-dom"
import styled from 'styled-components'

const EventListDiv = styled.div`
    a {
        font-family: 'Alegreya Sans SC', sans-serif;
        
        font-size: 18px;

    };
    font-family: 'Alegreya Sans SC', sans-serif;
    
    width: 300px;
    @media only screen and (max-width: 599px) {
        width: 100%;
        flex-direction: column
        }
`



const FilteredEvent = (props) => {
    return (
        <EventListDiv>

            <Link to={`/towns/${props.townId}/events/${props.event.id}`}>{props.event.name}</Link>

            <p>{props.event.date}</p>

            

            <button onClick={() => props.deleteEvent(props.event.id)}>Delete Event</button>

        </EventListDiv>
    );
};

export default FilteredEvent;