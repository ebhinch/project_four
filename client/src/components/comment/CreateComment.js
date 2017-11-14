import React, { Component } from 'react';

class CreateComment extends Component {
    state = {
        newComment: {
            title: "",
            text: ""
        }
    }
    render() {
        return (
            <div>
                <form>
                    <div>
                        <input type="text" name="title" value={this.state.newComment.title} placeholder="Comment Title" />
                    </div>

                    <div>
                        <textarea type="text" name="text" value={this.state.newComment.text} placeholder="Comment Body" />
                    </div>
                </form>
                <h1>THIS IS THE CREATE COMMENT COMPONENT</h1>
            </div>
        );
    }
}

export default CreateComment;