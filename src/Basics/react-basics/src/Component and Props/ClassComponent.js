import React, { Component } from 'react'

class ClassComponent extends Component {
    render() {
        return (
            <div>
                {this.props.name}
            </div>
        )
    }
}
export default ClassComponent;