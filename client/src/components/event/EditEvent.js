import React, { Component } from 'react';
import axios from "axios";
import { Redirect } from 'react-router-dom'
import styled from "styled-components"

const Input = styled.input`
    width: 70%;
`


class EditEvent extends Component {
    state = {
        updatedEvent: {
            name: "",
            date: ""
        }
    }

    componentWillMount() {
        console.log(this.props.event)
        this.setState({ updatedEvent: this.props.event })
    }

    handleChange = (event) => {
        const attribute = event.target.name
        const clonedEvent = { ...this.state.updatedEvent }
        clonedEvent[attribute] = event.target.value
        console.log(clonedEvent)
        this.setState({ updatedEvent: clonedEvent })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const { eventId } = this.props
        const { townId } = this.props
        const clonedEvent = { ...this.state.updatedEvent }
        const response = await axios.patch(`/api/towns/${townId}/events/${eventId}`, {
            event: clonedEvent
        })
        console.log(response)
        this.props.pushEventEdits(response.data)
        this.props.toggleEditEvent()

    }

    render() {


        return (
            <div>
                <form onSubmit={this.handleSubmit}>

                    <div>
                        <label htmlFor="name">Name: </label>
                        <Input onChange={this.handleChange}
                            name="name"
                            type="text"
                            value={this.state.updatedEvent.name}
                        />
                    </div>

                    <div>
                        <label htmlFor="date">Date: </label>
                        <input onChange={this.handleChange}
                            name="date"
                            type="text"
                            value={this.state.updatedEvent.date}
                        />
                    </div>

                    <input type="submit" value="Save Event Updates" />


                </form>
            </div>
        );
    }
}

export default EditEvent;