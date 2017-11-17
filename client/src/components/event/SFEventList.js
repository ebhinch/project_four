import React, { Component } from 'react';
import { Link } from "react-router-dom";
import FilteredEvent from "./FilteredEvent";
import styled from "styled-components"

const EventContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 10px;
    @media only screen and (max-width: 599px) {
        flex-direction: column;
        width: 100%;
    }
`

const EventCard = styled.div`

    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    font-family: 'Alegreya Sans SC', sans-serif;
    padding: 10px;
    height: 30vh;
    margin: 2px;
    img {
        width: 100%;
        height: 80%;
        opacity: .8;
    }
  
`


class SFEventList extends Component {
    render() {
        const array = this.props.events.filter(event =>
            event.season.toLowerCase() === "sf"
        )

        return (
            <EventContainer>
            {array.map((event) => {
                return (
                    <EventCard>
                    <FilteredEvent key={event.id} townId={this.props.townId} deleteEvent={this.props.deleteEvent} event={event} />
                    </EventCard>

                )
            })}


        </EventContainer>
        );
    }
}



export default SFEventList;


