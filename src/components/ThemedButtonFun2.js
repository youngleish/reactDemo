import React from 'react'
import { ThemeContext2 } from '../util/themeContext'
// import {Consumer} from '../util/appContext'

export default function ThemedButtonFun2(props) {
    return (
        <ThemeContext2.Consumer>
            {
                ({theme2, toggleTheme}) => (
                    <button
                        // {...props}
                        style={{backgroundColor: theme2.background}} 
                        onClick={toggleTheme}
                    >修改主题</button>
                )
            }
        </ThemeContext2.Consumer>
    )
}
