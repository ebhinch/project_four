import React, { Component } from 'react';
import axios from "axios"
import CommentList from "../comment/CommentList"

class IndividualEvent extends Component {
    state = {
        event: {
            comments: []
        }
    }

    async componentWillMount() {
        this.getComments();
    }

    getComments = async () => {
        try {
            const { townId, eventId } = this.props.match.params
            
            console.log(eventId)
            const response = await axios.get(`/api/towns/${townId}/events/${eventId}`)
            this.setState({ event: response.data})
            // const commentResponse = await axios.get(`/api`)
        } catch(error) {
            console.log(error)
        }
    }

    
    render() {
        return (
            <div>
                <h1>THIS IS THE INDIVIDUAL EVENT COMPONENT</h1>
                <h2>{this.state.event.name}</h2>
                <h4>{this.state.event.date}</h4>
                <CommentList event={this.state.event} comments={this.state.event.comments}/>
            </div>
        );
    }
}

export default IndividualEvent;