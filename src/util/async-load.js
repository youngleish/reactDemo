import React, { Component } from 'react'
import { ActivityIndicator } from 'antd-mobile'
export default (loadComponent, placeholder = <ActivityIndicator toast text='正在加载' />) => {
    return class AsyncComponent extends Component {
        unMount = false

        constructor() {
            super()

            this.state = {
                Child: null
            }
        }

        async componentDidMount() {
            // const { Child } = await loadComponent()
            const { default: Child } = await loadComponent()

            if (this.unMount) return
            this.setState({
                Child
            })
        }

        componentWillUnmount() {
            this.unMount = true
        }

        render() {
            const { Child } = this.state

            return (
                Child ? <Child {...this.props} /> : placeholder
            )
        }
    }
}