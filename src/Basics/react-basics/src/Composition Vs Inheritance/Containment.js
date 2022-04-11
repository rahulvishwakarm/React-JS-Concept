import React from 'react';

function FancyColor(props) {
    return(
        <div className={'FancyBorder FancyBorder-'+props.color} style={{'color':props.color}}>
            {props.children}
        </div>
    )
}

function Containment() {
    return (
        <FancyColor color="orange">
            <h1 className="Dialog-title">
                Welcome
            </h1>
            <p className="Dialog-message">
                Thankyou for visiting our spacecraft!
            </p>
        </FancyColor>
    )
}
export default Containment;