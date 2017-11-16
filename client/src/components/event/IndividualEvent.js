import React, { Component } from 'react';
import axios from "axios"
import CommentList from "../comment/CommentList"
import { Link } from 'react-router-dom'
import EditEvent from "./EditEvent"
import CreateComment from "../comment/CreateComment"
import CommentSignInAlert from "../comment/CommentSignInAlert"


class IndividualEvent extends Component {
    state = {
        event: {
            comments: []
        },
        editEventDetails: false,
        addComment: false
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

    toggleShowCommentForm = () => {
        this.setState({ addComment: !this.state.addComment})
    }


    pushComment = (newComment) => {
        const newEvent = {...this.state.event}
        newEvent.comments.unshift(newComment)
    
        this.setState({comment: newComment })

    }


    pushEventEdits = (updatedEvent) => {
        console.log(updatedEvent)
        console.log(this.state.event)
        const event = Object.assign({}, this.state.event, updatedEvent)
        this.setState({event})
    }


    render() {
        return (
            <div>
                <h1>THIS IS THE INDIVIDUAL EVENT COMPONENT</h1>
                <h2>{this.state.event.name}</h2>

                <h4>{this.state.event.date}</h4>

                <button onClick={this.toggleEditEvent}>Edit Event</button>


                {this.props.signedIn ? <button onClick={this.toggleShowCommentForm}>Add a Comment</button> : <CommentSignInAlert /> }

                {/* <button onClick={this.toggleShowCommentForm}>Add a Comment</button> */}

                {this.state.editEventDetails ? <EditEvent event={this.state.event} eventId={this.props.match.params.eventId} townId = {this.props.match.params.townId} pushEventEdits={this.pushEventEdits} toggleEditEvent={this.toggleEditEvent} /> : null }

                <CommentList event={this.state.event} comments={this.state.event.comments} />

    

                {this.state.addComment ? <CreateComment event={this.state.event} toggleShowCommentForm={this.toggleShowCommentForm} pushComment={this.pushComment} eventId={this.props.match.params.eventId} townId={this.props.match.params.townId} /> : null}

            </div>
        );
    }
}

export default IndividualEvent;

