import React, { Component } from 'react';
import axios from "axios"
import WSEventList from "../event/WSEventList"
import SFEventList from "../event/SFEventList"
import CreateEvent from "../event/CreateEvent"
import EventTextIntro from "./EventTextIntro"
import SubmitNewEventText from "../event/SubmitNewEventText"
import styled from 'styled-components'
import NumberWithCommas from "../NumberWithCommas"

const TownContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-item: space-around;
`

const ShadowDiv = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-color: #e3f2fd;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 10px;
    h2 {
        font-size: 2em;
        font-family: 'Alegreya Sans SC', sans-serif;
        
    };
    
    h4 {
        font-size: 14px;
        font-family: 'Roboto', sans-serif;
    };
    

`

const TownBody = styled.div`
 

    button {
        border-radius: 3px;
        padding: 0.25em 1em;
        background: transparent;
        font-family: 'Alegreya Sans SC', sans-serif;
        font-size: 14px;
        align-items: center;
        justify-content: center;
        text-align: center;
    };

    button:hover {
        font-weight: bold;
        box-shadow: 0 5px 15px rgba(145, 92, 182, .4);
    };
    img {
        width: 100%;
        margin: 0 auto;
        height: 300px;
    }

  `





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
            console.log(response.data)
            this.setState({ town: clonedTown })
        } catch (error) {
            console.log(error)
        }
    }

    pushEvents = (newEvent) => {
        const newTown = { ...this.state.town }
        newTown.events.unshift(newEvent)

        this.setState({ town: newTown })

    }





    render() {
        return (
            <TownContainer>
            <TownBody>

                <img src={this.state.town.image} />
                <ShadowDiv>
                <h2>{this.state.town.name} </h2>

                <h4>{this.state.town.description}</h4>

                <h4>Population: </h4>
                <NumberWithCommas number={this.state.town.population} />

                <h4>Elevation: </h4>
                <NumberWithCommas number={this.state.elevation} />
                </ShadowDiv>
                <ShadowDiv>
                <EventTextIntro town={this.state.town} />
                </ShadowDiv>
                <button onClick={this.toggleShowWS}>Winter | Spring</button>

                {this.state.showWS ? <WSEventList town={this.state.town} events={this.state.town.events} townId={this.state.town.id} deleteEvent={this.deleteEvent} /> : null}

                <button onClick={this.toggleShowSF}>Summer | Fall </button>

                {this.state.showSF ? <SFEventList town={this.state.town} events={this.state.town.events} townId={this.state.town.id} deleteEvent={this.deleteEvent} /> : null}

                <SubmitNewEventText town={this.state.town} />

                <button onClick={this.toggleShowCreate}>Add to {this.state.town.name}'s happenings</button>

                <div>
                    {this.state.showCreate ? <CreateEvent townId={this.state.town.id} toggleShowCreate={this.toggleShowCreate} pushEvents={this.pushEvents} /> : null}
                </div>




            </TownBody>
            </TownContainer>
        );
    }
}

export default Town;


