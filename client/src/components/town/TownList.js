import React, { Component } from 'react';
import { Link } from "react-router-dom"
import axios from "axios"
import Town from "./Town";
import styled from "styled-components"

const TownContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 10px;
`

const TownCard = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    font-family: 'Alegreya Sans SC', sans-serif;
    padding: 10px;
    height: 30vh;
    margin: 2px;
    img {
        width: 100%;
        height: 80%;
        opacity: .8;
    padding: 20px;
    height: 30vh;
    margin: 2px;
    background-color: white;
    min-width: 150px;
`

const TownContainer = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    height: auto;
    padding-left: 5px;
    padding-right: 5px;
    @media only screen and (max-width: 599px) {
        flex-direction: column;
        width: 100%;
    }
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
                        <img src={town.image} />
                        <Link to={`/towns/${town.id}`}>{town.name}</Link>
          
                    </TownCard>
                    )

                })}
                
            </TownContainer>
        );
    }
}

export default TownList;