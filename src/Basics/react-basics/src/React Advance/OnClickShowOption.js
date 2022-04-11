import React, { Component } from 'react'

class OnClickShowOption extends Component {
    constructor(props) {
        super(props);
        this.state = {isOpen:false};
        this.toggleContainer = React.createRef();
        this.onClickHandler = this.onClickHandler.bind(this);
        this.onClickOutSideHandler = this.onClickOutSideHandler.bind(this);
    }

    componentDidMount() {
        window.addEventListener('click',this.onClickOutSideHandler)
    }

    componentWillMount() {
        window.removeEventListener('click',this.onClickOutSideHandler)
    }
    
    onClickHandler() {
        this.setState(currentState => ({
            isOpen:!currentState.isOpen
        }))
    }

    onClickOutSideHandler(event) {
        if(this.state.isOpen && !this.toggleContainer.current.contains(event.target)) {
            this.setState({
                isOpen:false
            })
        }
    }

    render() {
        return (
            <div ref={this.toggleContainer}>
                <button onClick={this.onClickHandler}>Click on me to see option</button>
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
export default OnClickShowOption;