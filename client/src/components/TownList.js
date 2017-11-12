import React, { Component } from 'react';
import { Link } from "react-router-dom"
import axios from "axios"

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
                        <h3>{town.name}</h3>
                        <p>{town.description}</p>
                    </div>
                    )

                })}
            </div>
        );
    }
}

export default TownList;