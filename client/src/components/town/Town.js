

import React, { Component } from 'react';
import EventList from "../event/EventList"
import axios from "axios"

class Town extends Component {
    state = {
        town: {
            events: []
        }
    }

    async componentWillMount() {
        this.getEvents();
    }

    getEvents = async () => {
        try {
            const { id } = this.props.match.params
            const response = await axios.get(`/api/towns/${id}`)
            this.setState({ town: response.data})
            // const eventResponse = await axios.get(`/api`)
        } catch(error) {
            console.log(error)
        }
    }



    render() {
        return (
            <div>
                <h1>THIS IS THE INDIVIDUAL TOWN PAGE</h1>
                <h2>{this.state.town.name} </h2>
                <h4>{this.state.town.description}</h4>
                <h4>{this.state.town.population}</h4>
                <img src={this.state.town.image} />
                <EventList town={this.state.town} events={this.state.town.events} />
            </div>
        );
    }
}

export default Town;


