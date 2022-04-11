import React, { Component } from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

class MainElementVariable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggin:false
        };
    }

    handelLoginClick() {
        this.setState({
            isLoggin:true
        })
    }

    handelLogoutCLick() {
        this.setState( {
            isLoggin:false
        })
    }

    render() {
        const isLoggin = this.state.isLoggin;
        let btn;
        if(!isLoggin) {
            btn = <LoginButton onClick={this.handelLoginClick.bind(this)}/>
        }
        else{
            btn = <LogoutButton onClick={this.handelLogoutCLick.bind(this)}/>
        }
        return (
            <div>
                {btn}
            </div>
        )
    }
}
export default MainElementVariable;