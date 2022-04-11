import React, { Component } from 'react'

class TextArea extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            value:''
        })
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            value:event.target.value
        })
    }

    handleSubmit() {
        alert("Your essay "+this.state.value+" is submitted")
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Essay:
                    <textarea value={this.state.value} onChange={this.handleChange}></textarea>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}
export default  TextArea;