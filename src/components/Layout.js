// 组合组件
import React, { Component } from 'react'
import TabBar from '../components/TabBar'
import NavBar from '../components/NavBar'

export default class LayoutCmp extends Component {
    componentDidMount() {
        console.log('layout', this.props);
        const { title = '练习' } = this.props
        document.title = title
    }
    render() {
        console.log('layout', this.props)
        const { children, showTabBar = true, showNavBar = true } = this.props
        return (
            <div>
                {showNavBar && <NavBar {...this.props}/>}
                <div className='page homePage'>
                    {children}
                </div>
                {showTabBar && <TabBar />}
            </div>
        )
    }
}