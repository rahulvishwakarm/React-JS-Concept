import React from 'react';

const element = (
    <p className="elementClass">
        Testing Flow Of Execution
    </p>
)

const element = React.createElement(
    'h1',
    {className:"elementClass"},
    "Testing Flow Of Execution"
)

const elemeent = {
    type:"h1",
    props: {
        className:'elementClass',
        children:"Testing flow Of Exceution"
    }
}

function JSXFlowOfObjects() {
    return (
        <div>
            <p>JSX Object Flow</p>
        </div>
    )
}
export default JSXFlowOfObjects;
