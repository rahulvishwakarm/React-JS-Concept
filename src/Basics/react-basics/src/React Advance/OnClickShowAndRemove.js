import React, { Component } from 'react'

class OnClickShowAndRemove extends Component {
    constructor(props) {
        super(props);
        this.state = {isOpen:false};
        this.timeOutId=null;
        this.onClickHandler = this.onClickHandler.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleFocus=this.handleFocus.bind(this);
    }

    onClickHandler() {
        this.setState(currentState => ({
            isOpen:!currentState.isOpen
        }))
    }

    handleBlur() {
        this.timeOutId = setTimeout(()=>{
            this.setState({
                isOpen:false
            })
        })
    }

    handleFocus() {
        clearTimeout(this.timeOutId);
    }

    render() {
        return (
            <div onBlur={this.handleBlur} onFocus={this.handleFocus}>
                <button onClick={this.onClickHandler} >Click On Me to see option and click anwhere to hide option</button>
                {this.state.isOpen && (
                        <ul>
                            <li>Option 1</li>
                            <li>Option 2</li>
                            <li>Option 3</li>
                        </ul>
                )}
            </div>
        )
    }
}
export default OnClickShowAndRemove;