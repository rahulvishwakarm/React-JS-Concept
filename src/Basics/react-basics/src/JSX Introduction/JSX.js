import React from 'react';

function formatJSX(user) {
    return user.firstName+" "+user.lastName;
}

const user = {
    firstName:"UserName",
    lastName:"Password"
}



function JSXInExpression(test) {
    if(test!="") {
        return <p>{test.test1}</p>;
    }
    else {
        return <p>{test.test2}</p>;
    }
}

const test ={
    test1:"test1",
    test2:"test2"
}



function JSX() {
    const name = formatJSX(user);
    const testing = JSXInExpression(test);
    const element = <p>Hello , {name}</p>;
    return (

        <div>
            <p>{element}</p>
            <p>{testing}</p>
        </div>

    )
}

export default JSX;