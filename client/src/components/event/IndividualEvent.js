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
            const { id } = this.props.match.params
            const response = await axios.get(`/api/events/${id}`)
            this.setState({ event: response.data})
            const commentResponse = await axios.get(`/api`)
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