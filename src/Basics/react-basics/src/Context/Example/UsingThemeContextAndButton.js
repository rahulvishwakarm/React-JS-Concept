import React from 'react'
import {ThemeContext,themes} from './ThemeContext';
import ThemeButton from './ThemeButton';

//An Intermediat Button that use theme comoponent
function Toolbar(props) {
    return (
        <ThemeButton onClick={props.changeTheme}>
            Change Theme
        </ThemeButton>
    )
}

class UsingThemeContextAndButton extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            theme : themes.light
        }
        this.toggleTheme = () => {
                this.setState(state => ({
                    theme:
                        state.theme===themes.dark  //If theme==light it will set it to dark
                            ? themes.light
                            : themes.dark
                }));
            }
};

    render() {
        return (
            <div>
                <ThemeContext.Provider value={this.state.theme}>
                    <Toolbar changeTheme={this.toggleTheme}/>
                </ThemeContext.Provider>
                <section>
                    <ThemeButton/>
                </section>
            </div>
        )
    }
}


export default  UsingThemeContextAndButton;