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
        elevation: 0,
        showWS: false,
        showSF: false,
        showCreate: false
    }

    async componentWillMount() {
        await this.getEvents();
        await this.getElevation();
    }

    getEvents = async () => {
        try {
            const { id } = this.props.match.params
            const response = await axios.get(`/api/towns/${id}`)
            this.setState({ town: response.data })
        } catch (error) {
            console.log(error)
        }
    }

    // localhost:3001/api/towns/18/elevationapi/?lat=38.7391536&lng=-114.9847034

    getElevation = async () => {
        try {
            const { id } = this.props.match.params
            console.log(id)
            const lat = this.state.town.lat
            console.log(lat)
            const lng = this.state.town.lng
            console.log(lng)
            const response = await axios.get(`/api/towns/${id}/elevationapi/?lat=${lat}&lng=${lng}`)
            console.log(response.data)
            this.setState({ elevation: response.data.results[0].elevation.toFixed(2) })



        } catch(error) {
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
            console.log(response.data)
            this.setState({ town: clonedTown })
        } catch (error) {
            console.log(error)
        }
    }

        Events = (newEvent) => {
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

                <h4>{this.state.elevation}</h4>

                <img src={this.state.town.image} />

                <button onClick={this.toggleShowWS}>Winter / Spring</button>

                {this.state.showWS ? <WSEventList town={this.state.town} events={this.state.town.events} townId={this.state.town.id} deleteEvent={this.deleteEvent} /> : null}

                <button onClick={this.toggleShowSF}>Summer / Fall </button>

                <button onClick={this.toggleShowCreate}>Submit a New Event</button>

                {this.state.showSF ? <SFEventList town={this.state.town} events={this.state.town.events} townId={this.state.town.id} deleteEvent={this.deleteEvent} /> : null}

                {this.state.showCreate ? <CreateEvent townId={this.state.town.id} toggleShowCreate={this.toggleShowCreate} pushEvents={this.pushEvents} /> : null }




            </div>
        );
    }
}

export default Town;


