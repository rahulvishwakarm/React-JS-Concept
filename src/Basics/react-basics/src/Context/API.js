{/**

import React, { Component } from 'react'

const MyContext = React.createContext('Default API');

class API extends Component {
    render() {
        return (
            <MyContext.Consumer value="Testing API">
                {value => <MyClass/>}
            </MyContext.Consumer>
        )
    }
}

class MyClass extends Component {
    componentDidMount() {

    }
    
    componentDidUpdate() {

    }

    componentWillUnmount() {

    }

    render() {
        this.value = this.context;
    }
}

export default  API;

 */}