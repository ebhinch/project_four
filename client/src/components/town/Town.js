

import React, { Component } from 'react';
import axios from "axios"
import WSEventList from "../event/WSEventList"
import SFEventList from "../event/SFEventList"
import CreateEvent from "../event/CreateEvent"

class Town extends Component {
    state = {
        town: {
            events: []
        },
        showWS: false,
        showSF: false,
        showCreate: false
    }

    async componentWillMount() {
        this.getEvents();
    }

    getEvents = async () => {
        try {
            const { id } = this.props.match.params
            const response = await axios.get(`/api/towns/${id}`)
            this.setState({ town: response.data })
            // const eventResponse = await axios.get(`/api`)
        } catch (error) {
            console.log(error)
        }
    }

    toggleShowWS = () => {
        this.setState({ showWS: !this.state.showWS })
    }

    toggleShowSF = () => {
        this.setState({ showSF: !this.state.showSF })
    }

    toggleShowCreate = () => {
        this.setState({ showCreate: !this.state.showCreate })
    }


    deleteEvent = async (eventId) => {
        try {
            const { id } = this.props.match.params
            const response = await axios.delete(`/api/towns/${id}/events/${eventId}`)
            console.log(response)
            const clonedTown = { ...this.state.town }
            clonedTown.events = response.data
            this.setState({ town: clonedTown })
        } catch (error) {
            console.log(error)
        }
    }

    pushEvents = (newEvent) => {
        const newTown = {...this.state.town}
        newTown.events.unshift(newEvent)
    
        this.setState({town: newTown })

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

                {this.state.showWS ? <WSEventList town={this.state.town} events={this.state.town.events} townId={this.state.town.id} deleteEvent={this.deleteEvent} /> : null}

                <button onClick={this.toggleShowSF}>Summer / Fall </button>

                <button onClick={this.toggleShowCreate}>Submit a New Event</button>

                {this.state.showSF ? <SFEventList town={this.state.town} events={this.state.town.events} townId={this.state.town.id} deleteEvent={this.deleteEvent} /> : null}

                {this.state.showCreate ? <CreateEvent townId={this.state.town.id} pushEvents={this.pushEvents} /> : null }




            </div>
        );
    }
}

export default Town;


