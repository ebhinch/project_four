import React from 'react';
import { Link } from 'react-router-dom'
import SignUpLogIn from "./SignUpLogIn"
import styled from 'styled-components'

const StyledHeader = styled.div`
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    height: 10%;
`

const HeaderItem = styled.div`
    width: 100%;
    font-family: 'Alegreya Sans SC', sans-serif;
    margin: 0px;
    padding-bottom: 10px;
    padding-top: 10px;
    ul {
        display: flex;
        justify-content: space-around;
        list-style-type: none;
        padding-top: 2px;
        padding-bottom: 2px;
        margin-top: 0px;
        margin-bottom: 0px;
        font-size: 12px;
    };
    a {
        color: #800D57;
        text-decoration: none;
    };
    a:hover {
        font-size: 14px;
    };
    a:visited {
        color: navy
    };
    span {
        font-weight: bold;
        font-size: 16px;
    }
`

const Header = () => {
    return (
        <StyledHeader>
            <HeaderItem>
           
                <ul>
                <span>ROCK YOUR LIFE</span>
                    <li><Link to={"/"}>HOME</Link></li>
                    <li><Link to={"/towns"}>TOWN ROSTER</Link></li>
                </ul>
                
            </HeaderItem>
        </StyledHeader>
    );
};

export default Header;