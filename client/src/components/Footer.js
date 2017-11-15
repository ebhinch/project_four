import React from 'react';
import { Link } from 'react-router-dom'
import SignUpLogIn from "./SignUpLogIn"
import styled from 'styled-components'

const StyledFooter = styled.div`
    display: flex;
    flex-direction: row;
    flex-grow: 1;
`

const FooterItem = styled.div`
width: 100vw;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
    font-size: 14px;
}
a:visited {
    color: rgb(17, 17, 114);
}
a:hover {
    font-size: 18px;
}
`

const Footer = () => {
    return (
        <StyledFooter>
            <FooterItem>
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/towns"}>Town Roster </Link></li>
                </ul>
            </FooterItem>
        </StyledFooter>
    );
};

export default Footer;