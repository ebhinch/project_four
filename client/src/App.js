import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'


import axios from "axios"
import TownList from "./components/town/TownList"
import HomePage from "./components/HomePage"
import Town from "./components/town/Town"
import SignUpLogIn from "./components/SignUpLogIn"
import CreateComment from "./components/comment/CreateComment"
import { clearAuthTokens, saveAuthTokens, setAxiosDefaults, userIsLoggedIn } from "./util/SessionHeaderUtil"
import IndividualEvent from "./components/event/IndividualEvent"
import Header from "./components/Header"
import Footer from "./components/Footer"


class App extends Component {
  state = {
    signedIn: false
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


      const posts = await this.getPosts()

      this.setState({
        signedIn: true,
        posts
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



  render() {
    const SignUpLogInComponent = () => (
      <SignUpLogIn
        signUp={this.signUp}
        signIn={this.signIn}
      />)


    return (
      <Router>
        <div>
          <Header />
        <button onClick={this.signOut}>sign out</button>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/towns" component={TownList} />
          <Route exact path="/towns/:id" component={Town} />
          <Route exact path="/login" render={SignUpLogInComponent} />
          <Route exact path="/towns/:townId/events/:eventId" component={IndividualEvent} />
        </Switch>
        <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
