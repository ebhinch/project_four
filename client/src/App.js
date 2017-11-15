import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'


import axios from "axios"
import TownList from "./components/town/TownList"
import HomePage from "./components/HomePage"
import Town from "./components/town/Town"
import SignUpLogIn from "./components/SignUpLogIn"
import CreateComment from "./components/comment/CreateComment"
import { clearAuthTokens, saveAuthTokens, setAxiosDefaults, userIsLoggedIn } from "./util/SessionHeaderUtil"
import IndividualEvent from "./components/event/IndividualEvent"
import Footer from "./components/Footer"
import styled from 'styled-components'
import { injectGlobal } from 'styled-components'
import background from './telluride_background.jpg'

injectGlobal`
  body {
    background-image: url(${background});
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
}`

const AppBody = styled.div`
display: flex;
flex-direction: column;
min-height: 100vh;
min-width: 100vw;
`

const HeaderButton = styled.button`
width: 10%;
align-self: flex-end;
`


const SwitchBody = styled.div`
  flex: 1 0 auto;
`

class App extends Component {
  state = {
    signedIn: false,
    redirectToSignIn: false
  }

  async componentWillMount() {
    try {
      const signedIn = userIsLoggedIn()

      if (signedIn) {
        setAxiosDefaults()
      }

      this.setState({
        signedIn
      })
    } catch (error) {
      console.log(error)
    }
  }


  signUp = async (email, password, password_confirmation) => {
    try {
      const payload = {
        email: email,
        password: password,
        password_confirmation: password_confirmation
      }
      const response = await axios.post('/auth', payload)
      saveAuthTokens(response.headers)

      this.setState({
        signedIn: true,
        redirectToSignIn: false
      })

    } catch (error) {
      console.log(error)
    }
  }

  signIn = async (email, password) => {
    try {
      const payload = {
        email,
        password
      }
      const response = await axios.post('/auth/sign_in', payload)
      saveAuthTokens(response.headers)


      // const posts = await this.getPosts()
      console.log(response)
      this.setState({
        signedIn: true,
        redirectToSignIn: false
      })

    } catch (error) {
      console.log(error)
    }
  }

  signOut = async (event) => {
    try {
      event.preventDefault()

      await axios.delete('/auth/sign_out')

      clearAuthTokens();

      this.setState({ signedIn: false })
    } catch (error) {
      console.log(error)
    }
  }

  takeToLogin = () => {
    this.setState({ redirectToSignIn: true })
  }


  render() {

    const SignUpLogInComponent = () => (
      <SignUpLogIn
        signUp={this.signUp}
        signIn={this.signIn}
        signedIn={this.signedIn}
      />)


    return (
      <Router>
        <AppBody>
          {this.state.signedIn ?
            <HeaderButton onClick={this.signOut}>Sign Out</HeaderButton>
            : <HeaderButton onClick={this.takeToLogin}>Sign In</HeaderButton>
          }
          <SwitchBody>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/towns" component={TownList} />
              <Route exact path="/towns/:id" component={Town} />
              <Route exact path="/login" render={SignUpLogInComponent} />
              <Route exact path="/towns/:townId/events/:eventId" component={IndividualEvent} />
            </Switch>
          </SwitchBody>
          {this.state.redirectToSignIn ? (<Redirect to="/login" />) : null}

          <div>


            <Footer />

          </div>
        </AppBody>
      </Router>
    );
  }
}

export default App;
