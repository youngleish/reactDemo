import React, { Component } from 'react'
import {ThemeContext} from '../util/themeContext.js'

class ThemedButton extends Component {
    render() {
        console.log('themedButtonClass', this.context);
        
        return (
            <div>
                <button {...this.props} style={{backgroundColor: this.context.background}}></button> 
            </div>
        )
    }
}
ThemedButton.contextType = ThemeContext;

export default ThemedButton