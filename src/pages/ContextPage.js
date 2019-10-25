/* eslint-disable no-labels */
import React, { Component } from 'react'
import { ThemeContext, themes, ThemeContext2 } from '../util/themeContext'
import { Provider } from '../util/appContext'
import ThemedButtonClass from '../components/ThemedButtonClass'
import ThemedButtonClass2 from '../components/ThemedButtonClass2'
import ThemedButtonFun from '../components/ThemedButtonFun'
import ThemedButtonFun2 from '../components/ThemedButtonFun2'


// 使用ThemedButton的中间组件
function Toolbar(props) {
    return (
        <ThemedButtonClass onClick={props.changeTheme}>修改主题</ThemedButtonClass>
    )
}

export default class ContextPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            theme: themes.light,
            other: {
                theme2: themes.red,
                toggleTheme: this.toggleTheme2
            }
        }
    }

    toggleTheme = () => {
        this.setState((state) => ({
            theme: state.theme === themes.dark ? themes.light : themes.dark
        }))
    }
    toggleTheme2 = () => {
        this.setState((state) => ({
            other: {
                theme2: state.other.theme2 === themes.red ? themes.dark : themes.red,
                toggleTheme: this.toggleTheme2 
            }
        }))
    }
    render() {
        const { staticContext, ...rest } = this.props // staticContext 解决React does not recognize the `staticContext` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `staticcontext` instead. 
        return (
            <div>
                <h1>ContextPage</h1>
                <section className="block">
                    <h3>context使用</h3>
                    <ThemeContext.Provider value={this.state.theme}>
                        <Toolbar {...rest} changeTheme={this.toggleTheme} />
                    </ThemeContext.Provider>
                    <Provider value={this.state.theme}>
                        <ThemedButtonFun {...rest} onClick={this.toggleTheme}>修改主题</ThemedButtonFun>
                    </Provider>
                    <Provider value={this.state.theme}>
                        <ThemedButtonClass2 {...rest} onClick={this.toggleTheme}>修改主题</ThemedButtonClass2>
                    </Provider>
                    <p>以上这些例子是不同姿势使用context</p>
                </section>
                <section className="block">
                    <h3>在嵌套组件中更新context</h3>
                    <ThemeContext2.Provider value={this.state.other}>
                        <ThemedButtonFun2></ThemedButtonFun2>
                    </ThemeContext2.Provider>
                </section>
            </div>
        )
    }
}
