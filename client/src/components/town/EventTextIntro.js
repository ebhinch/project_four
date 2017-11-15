import React from 'react';
import styled from 'styled-components'


const TownBody = styled.div`
    h2 {
        font-size: 2em;
        font-family: 'Alegreya Sans SC', sans-serif;
        
    };
    h4 {
        font-size: 14px;
        font-family: 'Roboto', sans-serif;
        
    }

    `
const EventTextIntro = (props) => {
    return (
        <div>

    <h4>Check out what's going on in {props.town.name}. From suggested ski runs to hikes and the festivals in between, all the best local-and visitor-friendly information is below. Just pick the season you're curious about: </h4>
        </div>
    );
};

export default EventTextIntro;