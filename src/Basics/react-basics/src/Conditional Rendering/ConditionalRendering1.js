import React from 'react'

function UserGreeting() {
    return <p>Welcome back!</p>
}

function GuestGreeting() {
    return <p>Welcome Guest!</p>
}

function ConditionalRendering1(props) {
    const isLogged = props.isLogged;
    if(isLogged) {
        return <GuestGreeting/>
    }
    else{
        return <UserGreeting/>
    }
}
export default  ConditionalRendering1;