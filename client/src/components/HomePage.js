import React from 'react';
import styled from 'styled-components'

const PageName = styled.h1`
    text-align: right;
    margin-right: 5%;
    font-family: 'Alegreya Sans SC', sans-serif;
    font-size: 3em;
    
`

const HomePage = (props) => {
    return (
        <div>
            <PageName>ROCK YOUR LIFE</PageName>
        </div>
    );
};

export default HomePage;