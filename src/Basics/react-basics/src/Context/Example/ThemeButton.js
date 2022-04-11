import React, { Component } from 'react';
import {ThemeContext} from './ThemeContext';

class ThemeButton extends Component {
    render() {
        let props = this.props;
        let theme = this.context;
        console.log(theme);
        return (
            <button
                {...props}
                style={{backgroundColor:theme.background,color:theme.foreground}}
            />
        );
    }
}
ThemeButton.contextType = ThemeContext;

export default ThemeButton;