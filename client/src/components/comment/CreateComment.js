import React, { Component } from 'react';
import axios from "axios"

class CreateComment extends Component {
    state = {
        newComment: {
            title: "",
            text: ""
        }
    }

    handleChange = (event) => {
        const attribute = event.target.name
        const clonedComment = { ...this.state.newComment }
        clonedComment[attribute] = event.target.value
        this.setState({ newComment: clonedComment })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const { eventId } = this.props
        const { townId } = this.props

        console.log(eventId)
        console.log(townId)

        const response = await axios.post(`/api/towns/${townId}/events/${eventId}/comments`, {
            comment: this.state.newComment
        })

        console.log(response)
        this.props.pushComment(response.data)
        this.props.toggleShowCommentForm()
    }

    render() {
        return (
            <div>
                <h1>THIS IS THE CREATE COMMENT COMPONENT</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input onChange={this.handleChange} type="text" name="title" value={this.state.newComment.title} placeholder="Comment Title" />
                    </div>

                    <div>
                        <textarea onChange={this.handleChange} type="text" name="text" value={this.state.newComment.text} placeholder="Comment Body" />
                    </div>

                    <input type="submit" value="Save Comment" />

                </form>
            </div>
        );
    }
}

export default CreateComment;