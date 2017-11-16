import React, { Component } from 'react';
import { Link } from "react-router-dom"
import axios from "axios"
import Town from "./Town";
import styled from "styled-components"

const TownContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

const TownCard = styled.div`
    width: 30%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    padding: 10px;
    height: 30vh;
    margin: 2px;
`


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
            <TownContainer>
            
                {this.state.towns.map((town) => {
                    return (<TownCard>
                        <Link to={`/towns/${town.id}`}>{town.name}</Link>
          
                    </TownCard>
                    )

                })}
                
            </TownContainer>
        );
    }
}

export default TownList;