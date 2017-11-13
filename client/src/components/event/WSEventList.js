import React, { Component } from 'react';
import Event from "./Event"
import { Link } from "react-router-dom"



class EventList extends Component {
    state = {
        showWS: false,
        showSF: false,
        filteredEvents: []
    }

    componentWillMount() {
        this.getWSEvents()
    }

    getWSEvents = () => {
        const array = this.props.events.filter((event) => {
            return event.season === "ws"
        })
        this.setState({filteredEvents: array})
    }


    render() {
        return (
            <div>
                <h1>THIS IS THE EVENT LIST COMPONENT</h1>
                {this.state.filteredEvents.map((event) => {
                    return (
                        <div>


                            <Link to={`/towns/${this.props.townId}/events/${event.id}`}>{event.name}</Link>

                            <p>{event.date}</p>
                        </div>
                    )
                })}


            </div>
        );
    }
}

export default EventList;




