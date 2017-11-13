import React, { Component } from 'react';
import { Link } from "react-router-dom"
import axios from "axios"
import Town from "./Town"
class TownList extends Component {
    state = {
        towns: []
    }

    componentWillMount() {
        this.getTownList()
    }

    getTownList = async () => {
        const response = await axios.get("/api/towns")
        this.setState({towns: response.data})
        console.log(response.data)
    }



    render() {
        return (
            <div>
                <h1>THIS IS THE TOWN LIST PAGE</h1>
                {this.state.towns.map((town) => {
                    return (<div>
                        <Link to={`${town.id}`}>{town.name}</Link>
          
                    </div>
                    )

                })}
            </div>
        );
    }
}

export default TownList;