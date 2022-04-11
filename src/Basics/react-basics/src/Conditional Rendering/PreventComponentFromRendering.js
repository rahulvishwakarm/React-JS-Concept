import React, { Component } from 'react'

function WarningProps(props) {
    if(!props.warn) {
        return null
    }
    return (
        <div className="warning">
            Warning's
        </div>
    )
}

class PreventComponentFromRendering extends Component {
    constructor(props){
    super(props);
    this.state = {
        showWarning:true
    }
    this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState(state=>({
            showWarning:!state.showWarning
        }))
    }

    render() {
        return (
            <div>
                <WarningProps warn={this.state.showWarning}/>
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide':'Show'}
                </button>
            </div>
        );
    }
}
export default PreventComponentFromRendering;