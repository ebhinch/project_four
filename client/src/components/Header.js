import React from 'react';
import { Link } from 'react-router-dom'
import SignUpLogIn from "./SignUpLogIn"
import styled from 'styled-components'

const StyledHeader = styled.div`
    display: flex;
    flex-direction: row;
    flex-grow: 1;
`

const HeaderItem = styled.div`
width: 100vw;
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
}
a:visited {
    color: rgb(17, 17, 114);
}
a:hover {
    font-size: 14px;
}
`

const Header = () => {
    return (
        <StyledHeader>
            <HeaderItem>
                <ul>
                    <li><Link to={"/"}>HOME</Link></li>
                    <li><Link to={"/towns"}>TOWN ROSTER</Link></li>
                </ul>
                
            </HeaderItem>
        </StyledHeader>
    );
};

export default Header;