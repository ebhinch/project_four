import React from 'react';
import { Link } from 'react-router-dom'
import SignUpLogIn from "./SignUpLogIn"
import styled from 'styled-components'

const StyledFooter = styled.div`
    display: flex;
    justify-content: space-around;

`

const FooterItem = styled.div`
    font-family: 'Alegreya Sans SC', sans-serif;
    margin: 0px;
    padding-bottom: 10px;
    padding-top: 10px;
    padding-right: 5px;
    padding-left: 5px;
    font-size: 18px;
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

const Footer = () => {
    return (
        <StyledFooter>
      
           
            <FooterItem><Link to={"/"}>HOME</Link></FooterItem>
            <FooterItem><Link to={"/towns"}>TOWN ROSTER</Link></FooterItem>
               
    
        </StyledFooter>
    );
};

export default Footer;