import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'


import axios from "axios"
import TownList from "./components/TownList"
import HomePage from "./components/HomePage"



class App extends Component {
  state = {
    towns: []
  }

  async componentWillMount() {
    try {
      const response = await axios.get("/api/towns")
      this.setState({towns: response.data})
    } catch(error) {
      console.log(error)
    }
  }


  render() {
    return (
     <Router>
       <Switch>
         <Route exact path="/" component={HomePage} />
         <Route exact path="/towns" component={TownList}/>
       </Switch>
     </Router>
    );
  }
}

export default App;
