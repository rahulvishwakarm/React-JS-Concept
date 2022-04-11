import React, { Component } from 'react'

{/**Context is the designed to share data that can be considered global for the tree of the react Component
    Such as current authenticated user, theme or prefered language
**/}


class WhyToUseTheContext extends Component {
    render() {
        return <Toolbar theme="light" />
    }
}

function Toolbar(props) {
    return (
        <div>
            <ThemeButton theme={props.theme}/>
        </div>
    )
}

class ThemeButton extends Component {
    render() {
        return <button theme={this.props.theme}>Theme Button</button>
    }
}

export default WhyToUseTheContext;

// These can be awful if every single button needs to know the theme because it would have to pass through component
// Using Content we can avoid props through intermediate element


// Note
// Inspect the button and see the theme