import React, { Component } from 'react'

class ArgumentPassingInEvenetHandlers extends Component {
    constructor(props) {
        super(props);
        this.state ={
            id:'615',
            deleteStatus:false
        }
    }

    deleteRow() {
        this.setState({
            deleteStatus:true,
            id:'617'
        })
    }

    render() {
        const {id,deleteStatus} = this.state;
        return (
            <div>
                <button onClick={this.deleteRow.bind(this)}>
                    {deleteStatus===false ? "Delete Id":"Deleted"}
                </button>
            </div>
        )
    }
}
export default  ArgumentPassingInEvenetHandlers;