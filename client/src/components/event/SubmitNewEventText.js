import React from 'react';
import styled from 'styled-components'

const AddEventText = styled.div`
h2 {
    font-size: 2em;
    font-family: 'Alegreya Sans SC', sans-serif;
    
};
h4 {
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    
}

`

const SubmitNewEventText = (props) => {
    return (
        <AddEventText>
            <h4>Know about a local happening, must-ski run, or other local occurence you don't see here? Add it to {props.town.name}'s roster below.</h4>
        </AddEventText>
    );
};

export default SubmitNewEventText;
