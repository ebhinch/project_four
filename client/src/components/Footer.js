import React from 'react';
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <div>
            <h1>THIS IS THE FOOTER</h1>
            <Link to={"/towns"}>Town Roster </Link>
            <Link to={"#"}>Log In / Create Account</Link>
        </div>
    );
};

export default Footer;