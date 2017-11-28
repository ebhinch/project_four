import React from 'react';
import { Link } from 'react-router-dom'
import SignUpLogIn from "./SignUpLogIn"
import styled from 'styled-components'

const StyledHeader = styled.div`
    display: flex;
    justify-content: space-around;
`

const HeaderItem = styled.div`
    font-family: 'Alegreya Sans SC', sans-serif;
    margin: 0px;
    padding-bottom: 10px;
    padding-top: 10px;
    padding-right: 5px;
    padding-left: 5px;
    font-size: 20px;
    a {
        color: #800D57;
        text-decoration: none;
    };
    a:hover {
        font-weight: bold;
        };
    a:visited {
        color: navy
    };
`

const Logo = styled.div`
    margin: 0px;
    padding-bottom: 10px;
    padding-top: 10px;
    padding-right: 5px;
    padding-left: 5px;
    font-weight: bold;
    font-size: 20px;
    font-family: 'Alegreya Sans SC', sans-serif;
`

const Header = () => {
    return (
        <StyledHeader>

           
           
                <Logo>ROCK YOUR LIFE</Logo>
                    <HeaderItem><Link to={"/"}>HOME</Link></HeaderItem>
                    <HeaderItem><Link to={"/towns"}>TOWN ROSTER</Link></HeaderItem>
         
  
        </StyledHeader>
    );
};

export default Header;