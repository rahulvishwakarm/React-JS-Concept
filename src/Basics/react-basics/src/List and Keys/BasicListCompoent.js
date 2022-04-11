import React from 'react'

function BasicListCompoent(props) {
    const number = props.numbers;
    const lsitItem = number.map((num) =>
        <li key={number.toString()}>{num}</li>
    )
    return (
        <ul>{lsitItem}</ul>
    );
}
export default BasicListCompoent;