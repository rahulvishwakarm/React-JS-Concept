import React, { Component } from 'react'

class HandlingMultipleInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing:true,
            numberOfGuests:2
        };
        this.handleInputChnage = this.handleInputChnage.bind(this);
    }

    handleInputChnage(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked:target.value;
        const name = target.name;
        this.setState({
            [name]:value
        });
    }

    render() {
        return (
            <form >
                <label>
                    Is going:
                    <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChnage}
                    />
                </label>
                <br/>
                <label>
                    Number Of Posts:
                    <input
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputChnage}
                    />
                </label>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}
export default  HandlingMultipleInput;