import React, { Component } from 'react';
import axios from "axios"
import styled from "styled-components"

const CommentDiv = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
    textarea, input {
        width: 40%;
    }
`

const CommentContainer = styled.div`

    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-color: transparent;
    padding: 10px;
`


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
            <CommentContainer>
                <h4>Please enter a new comment below: </h4>
                <form onSubmit={this.handleSubmit}>
                    <CommentDiv>
                        <input onChange={this.handleChange} 
                        type="text" 
                        name="title" 
                        value={this.state.newComment.title} 
                        placeholder="Comment Title"
                        required 
                        />
                    </CommentDiv>

                    <CommentDiv>
                        <textarea onChange={this.handleChange} 
                        type="text" 
                        name="text" 
                        value={this.state.newComment.text} 
                        placeholder="Comment Body"
                        required 
                        />
                    </CommentDiv>

                    <input type="submit" value="Save Comment" />

                </form>
            </CommentContainer>
        );
    }
}

export default CreateComment;