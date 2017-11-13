import React, { Component } from 'react';

class EventList extends Component {
    state = {
        showWS: false,
        showSF: false
    }

    getEvents = async (props) => {
        {props.events.map((event) => {
            return (
                <div>
         
                </div>
            )
        })}

    }

    render() {
        return (
            <div>
                <h1>THIS IS THE EVENT LIST COMPONENT</h1>
                {this.getEvents(this.props)}

            </div>
        );
    }
}

export default EventList;







