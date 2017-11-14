// ./client/src/components/SignUpLogIn.js

import React, { Component } from 'react'
import { Redirect } from "react-router-dom"

class SignUpLogIn extends Component {

    state = {
        email: '',
        password: '',
        password_confirmation: '',
        toggleRedirect: false
    }

    handleRedirect = () => {
        this.setState({toggleRedirect: !this.state.toggleRedirect})
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

                    <button onClick={this.signUp}>Sign Up</button>
                    <button onClick={this.signIn}>Log In</button>
                </form>
            </div>
        )
    }
}

export default SignUpLogIn