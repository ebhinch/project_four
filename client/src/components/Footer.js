import React from 'react';
import { Link } from 'react-router-dom'
import SignUpLogIn from "./SignUpLogIn"
import styled from 'styled-components'

const StyledFooter = styled.div`
    display: flex;
    flex-direction: row;
`

const Footer = () => {
    return (
        <StyledFooter>
          
            <Link to={"/towns"}>Town Roster </Link>
            <Link to={"/login"}>Log In / Create Account</Link>
        </StyledFooter>
    );
};

export default Footer;