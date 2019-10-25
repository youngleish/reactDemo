import React from 'react'
export const themes = {
    light: {
        background: '#eee',
        foreground: '#000'
    },
    dark: {
        background: '#108ee9',
        foreground: "#fff"
    },
    yellow: {
        background: '#ff0',
        foreground: "#fff" 
    },
    red: {
        background: '#d50ed1',
        foreground: "#fff"  
    }
}
export const ThemeContext = React.createContext(themes.dark) // 默认值
export const ThemeContext2 = React.createContext({
    theme2: themes.yellow,
    toggleTheme: () => {}
})
