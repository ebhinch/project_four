// ./client/src/components/SignUpLogIn.js

import React, { Component } from 'react'
import { Redirect } from "react-router-dom"
import styled from 'styled-components'

const FormContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 5vh;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    width: 70%;
    margin-left: 15%;
    margin-right: 15%;
    padding-top: 7%;
    padding-left: 10%;
    height: 30vh;
 
 
`

const FormText = styled.div`
 
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 20px;
   
    button {
        border-radius: 3px;
        padding: 0.25em 1em;
        background: transparent;
        font-family: 'Alegreya Sans SC', sans-serif;
         
        align-items: center;
        text-align: center;        
    };
    div {
        margin-top: 3px;
        margin-bottom: 3px;
    }
   

`

class SignUpLogIn extends Component {

    state = {
        email: '',
        password: '',
        password_confirmation: '',
        toggleRedirect: false
    }

    handleRedirect = () => {
        this.setState({ toggleRedirect: !this.state.toggleRedirect })
    }

    signUp = (event) => {
        event.preventDefault()
        this.props.signUp(
            this.state.email,
            this.state.password,
            this.state.password_confirmation
        )
        this.handleRedirect()
    }

    signIn = (event) => {
        event.preventDefault()
        this.props.signIn(
            this.state.email,
            this.state.password
        )
        this.handleRedirect()
    }

    handleChange = (event) => {
        const newState = { ...this.state }
        newState[event.target.name] = event.target.value
        this.setState(newState)
    }

    render() {
        if (this.state.toggleRedirect) {
            return (
                <Redirect to="/" />
            )
        }

        return (
            <div>
                <FormContainer>


                    <FormText>

                        <form>
                            <div>
                                <label htmlFor="email">E-mail: </label>
                                <input onChange={this.handleChange} type="text" name="email" value={this.state.email} />
                            </div>
                            <div>
                                <label htmlFor="password">Password: </label>
                                <input onChange={this.handleChange} type="password" name="password" value={this.state.password} />
                            </div>
                            <div>
                                <label htmlFor="password_confirmation">Confirm Password: </label>
                                <input onChange={this.handleChange} type="password" name="password_confirmation"
                                    value={this.state.password_confirmation} />
                            </div>
                            <button onClick={this.signIn}>Log In</button>
                            <button onClick={this.signUp}>Sign Up</button>

                        </form>

                    </FormText>
                </FormContainer>
            </div>
        )
    }
}

export default SignUpLogIn