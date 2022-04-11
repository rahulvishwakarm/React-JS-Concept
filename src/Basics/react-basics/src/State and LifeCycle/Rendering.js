import React from 'react';

class Rendering extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            time:new Date()
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => this.tick(),1000)
    }

    tick() {
        this.setState({
            date:new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <h2>Current time {new Date().toLocaleTimeString()}</h2>
            </div>
        )
    }
}
export default Rendering;