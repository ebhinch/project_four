import React from 'react';
import styled from 'styled-components'

const PageName = styled.h1`
    text-align: right;
    margin-right: 5%;
`

const HomePage = (props) => {
    return (
        <div>
            <PageName>ROCK YOUR LIFE</PageName>
        </div>
    );
};

export default HomePage;