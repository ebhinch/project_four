import React, { Component } from 'react';
import axios from "axios";
import CommentSignInAlert from "../comment/CommentSignInAlert"
import styled from "styled-components"

const CreateEventStyling = styled.div`
    font-family: 'Roboto', sans-serif;  
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-color: #F3FAFF;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 12px;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 10px;
    padding-right: 10px;
    label {
        font-weight: bold;
    }
`

const FormDiv = styled.div`
    margin: 5px;
`



class CreateEvent extends Component {
    state = {
        newEvent: {
            name: "",
            date: "",
            season: "",
            image: ""
        }
    }

    componentDidMount(){
        const addForm = document.getElementById("createForm")
        addForm.scrollIntoView(true)
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
        console.log(townId)
        const response = await axios.post(`/api/towns/${townId}/events`, {
            event: this.state.newEvent
        })
        console.log(response.data)
        this.props.pushEvents(response.data)
        this.props.toggleShowCreate()
    }


  

    render() {
        return (
       
            <CreateEventStyling id="createForm">

                <form onSubmit={this.handleSubmit}>

                    <FormDiv>
                        <label htmlFor="name">Name: </label>
                        <input onChange={this.handleChange}
                            name="name"
                            type="text"
                            value={this.state.newEvent.name}
                         required />
                    </FormDiv>

                    <FormDiv>
                        <label htmlFor="date">Date: </label>
                        <input onChange={this.handleChange}
                            name="date"
                            type="text"
                            value={this.state.newEvent.date}
                            required
                        />
                    </FormDiv>

                    <FormDiv>
                        <label htmlFor="season">Season (please enter either "ws" for winter/spring or "sf" for summer/fall): </label>
                        <input onChange={this.handleChange}
                            name="season"
                            type="text"
                            value={this.state.newEvent.season}
                            required
                        />
                    </FormDiv>

                    <FormDiv>
                        <label htmlFor="image">Image (please enter a valid URL) </label>
                        <input onChange={this.handleChange}
                            name="image"
                            type="text"
                            value={this.state.newEvent.image}
                            required
                        />
                    </FormDiv>

                    <input type="submit" value="Save New Event" />


                </form>



            </CreateEventStyling>
        );
    }
}

export default CreateEvent;


