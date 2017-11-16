import React from 'react';

const Number = (props) => {

    const numberWithCommas = (x = '') => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <div>
           {numberWithCommas(props.number)}
        </div>
    );
};

export default Number;



