import React from 'react';

const NumberWithCommas = (props) => {

    const numberWithCommas = (x = '') => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <div>
           {numberWithCommas(props.number)}
        </div>
    );
};

export default NumberWithCommas;



