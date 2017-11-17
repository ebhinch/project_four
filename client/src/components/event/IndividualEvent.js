import React, { Component } from 'react';
import axios from "axios"
import CommentList from "../comment/CommentList"
import EditEvent from "./EditEvent"
import CreateComment from "../comment/CreateComment"
import CommentSignInAlert from "../comment/CommentSignInAlert"
import styled from 'styled-components'


const IndividualEventDiv = styled.div`
    font-family: 'Roboto', sans-serif;  
    button {
        border-radius: 2px;
        background: transparent;
        font-family: 'Alegreya Sans SC', sans-serif;
        font-size: 14px;
        margin-top: 3px;
        margin-bottom: 3px;
    };
    h1 {
        font-size: 28px;
        font-family: 'Alegreya Sans SC', sans-serif;
        
    }
    h2 {
       
        font-family: 'Alegreya Sans SC', sans-serif;
        font-size: 24px;
        margin-bottom: 0;
        
    };
    h3 {
        font-family: 'Alegreya Sans SC', sans-serif;
        margin-bottom: 10px;
    }
    h4 {
        font-size: 20px;
        font-family: 'Alegreya Sans SC', sans-serif;
        margin-top: 0;
        margin-bottom: 2px;
        font-weight: bold;
    };
    img {
        height: 300px;
        width: 100%;
    }
`


class IndividualEvent extends Component {
    state = {
        event: {
            town: {},
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
            <IndividualEventDiv>
                <h1>{this.state.event.town.name}</h1>
                <h2>{this.state.event.name}</h2>
                <h4>{this.state.event.date}</h4>
                <img src={this.state.event.image} />
                <button onClick={this.toggleEditEvent}>Edit Event</button>

                <h3>Comments: </h3>
               
                {this.props.signedIn ? <button onClick={this.toggleShowCommentForm}>Add a Comment</button> : <CommentSignInAlert /> }

                {this.state.editEventDetails ? <EditEvent event={this.state.event} eventId={this.props.match.params.eventId} townId = {this.props.match.params.townId} pushEventEdits={this.pushEventEdits} toggleEditEvent={this.toggleEditEvent} /> : null }

                <CommentList event={this.state.event} comments={this.state.event.comments} />

    

                {this.state.addComment ? <CreateComment event={this.state.event} toggleShowCommentForm={this.toggleShowCommentForm} pushComment={this.pushComment} eventId={this.props.match.params.eventId} townId={this.props.match.params.townId} /> : null}

            </IndividualEventDiv>
        );
    }
}

export default IndividualEvent;

