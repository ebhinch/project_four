import React from 'react';
import styled from 'styled-components'

const StyledNumberWithCommas = styled.h4`
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    
`

const NumberWithCommas = (props) => {

    const numberWithCommas = (x = '') => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <StyledNumberWithCommas>
           {numberWithCommas(props.number)}
        </StyledNumberWithCommas>
    );
};

export default NumberWithCommas;



