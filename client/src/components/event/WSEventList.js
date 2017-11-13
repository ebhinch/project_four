import React, { Component } from 'react';
import Event from "./Event"



class EventList extends Component {
    state = {
        showWS: false,
        showSF: false
    }

    getWSEvents = async (props) => {
        {props.events.filter((event) => {
            return (
            event.season === "ws"
            )
        })}
    }


    render() {
        return (
            <div>
                <h1>THIS IS THE EVENT LIST COMPONENT</h1>
                {this.getWSEvents}

            </div>
        );
    }
}

export default EventList;




