import React, { Component } from 'react';
import axios from "axios"


class CreateEvent extends Component {
    state = {
        newEvent: {
            name: "",
            date: "",
            season: "",
            image: "",
            town_id: null
        }
    }
    
    handleChange = (event) => {
        const attribute = event.target.name
        const newEvent = { ...this.state.newEvent }
        newEvent[attribute] = event.target.value
        this.setState({ newEvent: newEvent})

    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const { townId } = this.props
        const response = await axios.post(`/api/towns/${townId}/events`, {
            event: this.state.newEvent
        })
        this.props.pushEvents(response.data)
    }




    render() {
        return (
            <div>
                <h1>THIS IS THE CREATE EVENT COMPONENT</h1>
                {/* <input onBlur={this.handleSubmit} onChangeCapture={this.handleChange} name="name" value={this.state.newEvent.name} /> */}



                <form onSubmit={this.handleSubmit}>

                    <div>
                        <label htmlFor="name">Name: </label>
                        <input onChange={this.handleChange}
                            name="name"
                            type="text"
                            value={this.state.newEvent.name}
                        />
                    </div>

                    <div>
                        <label htmlFor="date">Date: </label>
                        <input onChange={this.handleChange}
                            name="date"
                            type="text"
                            value={this.state.newEvent.date}
                        />
                    </div>

                    <div>
                        <label htmlFor="season">Season (please enter either "ws" for winter/spring or "sf" for summer/fall): </label>
                        <input onChange={this.handleChange}
                            name="season"
                            type="text"
                            value={this.state.newEvent.season}
                        />
                    </div>

                    <div>
                        <label htmlFor="image">Image (please enter a valid URL) </label>
                        <input onChange={this.handleChange}
                            name="image"
                            type="text"
                            value={this.state.newEvent.image}
                        />
                    </div>

                    <input type="submit" value="Save New Event" />


                </form>



            </div>
        );
    }
}

export default CreateEvent;


