

import React, { Component } from 'react';
import EventList from "../event/EventList"
import axios from "axios"
import WSEventList from "../event/WSEventList"
import SFEventList from "../event/SFEventList"

class Town extends Component {
    state = {
        town: {
            events: []
        },
        showWS: false,
        showSF: false
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

    toggleShowWS = () => {
        this.setState({ showWS: !this.state.showWS })
    }

    toggleShowSF = () => {
        this.setState({ showSF: !this.state.showSF})
    }



    render() {
        return (
            <div>
                <h1>THIS IS THE INDIVIDUAL TOWN PAGE</h1>
                <h2>{this.state.town.name} </h2>
                <h4>{this.state.town.description}</h4>
                <h4>{this.state.town.population}</h4>
                <img src={this.state.town.image} />
                <button onClick={this.toggleShowWS}>Winter / Spring</button>
                {this.state.showWS ? <WSEventList town={this.state.town} events={this.state.town.events} /> : null}
                <button onClick={this.toggleShowSF}>Summer / Fall </button>
                {this.state.showSF ? <SFEventList town={this.state.town} events={this.state.town.events} /> : null}

         


            
            </div>
        );
    }
}

export default Town;


