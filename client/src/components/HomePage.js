import React from 'react';
import styled from 'styled-components'
import home from '../telluride_background.jpg'


const PageName = styled.h1`
    text-align: right;
    margin-right: 5%;
    margin-bottom: 0;
    font-family: 'Alegreya Sans SC', sans-serif;
    font-size: 3em;
`

const HomeBody = styled.div`
    display: flex;
    flex-direction: column;

    img {
        width: 100%;
        max-height: 500px;

    }

`





const HomePage = (props) => {
    return (
        <HomeBody>
            <PageName>ROCK YOUR LIFE</PageName>
      
            <img src={home}/>

        </HomeBody>
    );
};

export default HomePage;