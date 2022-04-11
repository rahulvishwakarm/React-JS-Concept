import React, { Component } from 'react'

class SelectOption extends Component {
    constructor(props){
        super(props);
        this.state = {
            value:''
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            value:event.target.value
        })
    }

    handleSubmit(){
        alert("Your Favourite Language is "+this.state.value);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pick your favourite languaage:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="JavaScript">JavaScript</option>
                        <option value="Java">Java</option>
                        <option value="Python">Pyhton</option>
                        <option value="React">React</option>    
                    </select> 
                </label>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}
export default SelectOption;