import React, { Component } from 'react';
import { Link } from "react-router-dom"
import FilteredEvent from "./FilteredEvent"



class WSEventList extends Component {
    render() {
        const array = this.props.events.filter(event =>
            event.season.toLowerCase() === "ws"
       )

        return (
            <div>
                <h1>THIS IS THE WS EVENT LIST COMPONENT</h1>
                {array.map((event) => {
                    return (

                        <FilteredEvent key={event.id} townId={this.props.townId} deleteEvent={this.props.deleteEvent} event={event} />


                    )
                })}


            </div>
        );
    }
}

export default WSEventList;

