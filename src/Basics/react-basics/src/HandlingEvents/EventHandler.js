import React from 'react';

function EventHandler() {
    function hnadleClick() {
        console.log("The link is clicked");
    }
    return (
        <div>
            <a onClick={hnadleClick}>
                Click Me!
            </a>
        </div>
    )
}
export default  EventHandler;