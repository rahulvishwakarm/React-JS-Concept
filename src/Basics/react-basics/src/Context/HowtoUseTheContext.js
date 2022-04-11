import React, { Component } from 'react'

// Context let us pass a value deep into the component tree
// without explicitly threading it through every component
// Craete the context for the current theme with 'light' as the default

const ThemeContext = React.createContext('light');

class HowtoUseTheContext extends Component {
    render() {
        return (
            <ThemeContext.Provider value="dark">
                <Toolbar />
            </ThemeContext.Provider>
        );
    }
}

//A context in the middle doesn't have pass the theme explicitly anymore

function Toolbar() {
    return (
        <div>
            <ThemeButton/>
        </div>
    )
}

class ThemeButton extends Component {
    // Assign the contextType to read the current theme context
    // React will find the closest theme Provider above and use its value
    // In this example, the current theme is 'dark'
    static contextType = ThemeContext;
    render() {
        return <button theme={this.context}>How Theme Button</button>
    }
}


export default HowtoUseTheContext;

// Note
// Please Inspect the element and see the theme