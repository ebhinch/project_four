import React, { Component } from 'react';
import { Link } from "react-router-dom"
import FilteredEvent from "./FilteredEvent"


class SFEventList extends Component {
    render() {
        const array = this.props.events.filter((event) => {
            return event.season === "sf"
        })

        return (
            <div>
            <h1>THIS IS THE SF EVENT LIST COMPONENT</h1>
            {array.map((event) => {
                return (

                    <FilteredEvent key={event.id} townId={this.props.townId} deleteEvent={this.props.deleteEvent} event={event} />


                )
            })}


        </div>
        );
    }
}



export default SFEventList;


