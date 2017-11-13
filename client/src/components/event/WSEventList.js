import React, { Component } from 'react';
import { Link } from "react-router-dom"
import FilteredEvent from "./FilteredEvent"



class WSEventList extends Component {
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
        this.setState({ filteredEvents: array })
    }


    render() {
        return (
            <div>
                <h1>THIS IS THE EVENT LIST COMPONENT</h1>
                {this.state.filteredEvents.map((event) => {
                    return (

                        <FilteredEvent townId={this.props.townId} deleteEvent={this.props.deleteEvent} event={event} />


                    )
                })}


            </div>
        );
    }
}

export default WSEventList;




