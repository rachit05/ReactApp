import React from 'react';

function Lists(props){
    const numbers = props.passedValue;
    const list = numbers.map(
        (number) => <li key={number.toString()}>{number[0] + ' plays ' + number[1]}</li>
    )

    return <ul>{list}</ul>
}

export default Lists