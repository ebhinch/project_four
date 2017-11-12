

import React, { Component } from 'react';
import EventList from "../event/EventList"
// import eventlist

class Town extends Component {
    state = {
        town: {
            events: []
        }
    }
    render() {
        return (
            <div>
                <h1>THIS IS THE INDIVIDUAL TOWN PAGE</h1>
            </div>
        );
    }
}

export default Town;


