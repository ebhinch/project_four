import React, { Component } from 'react';
import axios from "axios"
import CommentList from "../comment/CommentList"
import { Link } from 'react-router-dom'
import EditEvent from "./EditEvent"
import CreateComment from "../comment/CreateComment"



class IndividualEvent extends Component {
    state = {
        event: {
            comments: []
        },
        editEventDetails: false
    }

    async componentWillMount() {
        this.getComments();
    }

    getComments = async () => {
        try {
            const { townId, eventId } = this.props.match.params

            console.log(eventId)
            const response = await axios.get(`/api/towns/${townId}/events/${eventId}`)
            this.setState({ event: response.data })
            // const commentResponse = await axios.get(`/api`)
        } catch (error) {
            console.log(error)
        }
    }

    toggleEditEvent = () => {
        this.setState({ editEventDetails: !this.state.editEventDetails })
    }


    render() {
        return (
            <div>
                <h1>THIS IS THE INDIVIDUAL EVENT COMPONENT</h1>
                <h2>{this.state.event.name}</h2>

                <h4>{this.state.event.date}</h4>

                <button onClick={this.toggleEditEvent}>Edit Event</button>

                {this.state.editEventDetails ? <EditEvent event={this.state.event} eventId={this.props.match.params.eventId} townId = {this.props.match.params.townId} updateEvent={this.updateEvent} /> : null }

                <CommentList event={this.state.event} comments={this.state.event.comments} />

                <CreateComment event={this.state.event}/>
            </div>
        );
    }
}

export default IndividualEvent;

