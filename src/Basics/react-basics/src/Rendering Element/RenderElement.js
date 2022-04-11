import React from 'react';

class RenderElement extends React.Component{
        constructor(props) {
            super(props);
            this.state = {
                date:new Date()
            };
        }
        componentDidMount() {
            this.timeId = setInterval(()=>this.tick(),1000)
        }

        tick() {
            this.setState({
                date:new Date()
            });
        }

        render() {
            return (
                <div>
                    <h1>Hello, world!</h1>
                    <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                    <h3>Date is {this.state.date.toLocaleDateString()}</h3>
                </div>
            )
        }  
}

export default RenderElement;