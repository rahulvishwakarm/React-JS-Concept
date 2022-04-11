import React, { Component } from 'react'
import FRINPUT from './FRINPUT'

class FRPARENTINPUT extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }
    
    handleClick = () => {
        this.inputRef.current.focus()
    }
    
    render() {
        return (
            <div>
                <FRINPUT ref={this.inputRef} />  
                <button onClick={this.handleClick}>Focus Input</button>
            </div>
        )
    }
}

export default FRPARENTINPUT;
