import React, { Component } from 'react';
import Event from "./Event"



class EventList extends Component {
    state = {
        showWS: false,
        showSF: false,
        filteredEvents: []
    }

    componentWillMount() {
        this.getSFEvents()
    }

    getSFEvents = () => {
        const array = this.props.events.filter((event) => {
            return event.season === "sf"
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
                            <h2>{event.name}</h2>
                            <p>{event.date}</p>
                        </div>
                    )
                })}
          

            </div>
        );
    }
}

export default EventList;




