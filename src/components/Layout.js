import React, { Component } from 'react'
import TabBar from '../components/TabBar'
import NavBar from '../components/NavBar'

export default class Layout extends Component {
    componentDidMount() {
        const { title = '练习' } = this.props
        document.title = title
    }
    render() {
        console.log('layout', this.props)
        const { children, showTabBar = true, showNavBar = true, pageTitle } = this.props
        return (
            <div>
                {showNavBar && <NavBar pageTitle={pageTitle} {...this.props}/>}
                {children}
                {showTabBar && <TabBar />}
            </div>
        )
    }
}
