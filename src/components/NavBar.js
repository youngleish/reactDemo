import React, { Component } from 'react'
import { Provider } from '../util/appContext'
import UserName from '../components/UserName';
import { ActivityIndicator } from 'antd-mobile'


export default class NavBar extends Component {
    constructor(props) {
        super(props);
        console.log('navBar', props);
        this.state = {
            store: {
                isLogin: false,
                user: {
                    name: ""
                }
            },
            loadingFlag: false
        }
    }
    handleLogin = () => {
        let flag = this.state.store.isLogin
        this.setState({
            loadingFlag: true
        })
        setTimeout(() => {
            this.setState({
                store: {
                    isLogin: !flag,
                    user: {
                        name: 'Tom'
                    }
                },
                loadingFlag: false
            })
        }, 1000);

    }
    goJsxPage = () => {
        console.log('navBar.props', this.props);
        
        this.props.history.push('/home')
    }
    render() {
        const { pageTitle = 'HomePage' , showHomeIcon = 'true'} = this.props
        const { store, loadingFlag } = this.state
        return (
            <div className='navBar'>
                <div className='left'>
                    { showHomeIcon && <span className='homeIcon' onClick={this.goJsxPage}></span> }
                    <span className='desc'>{pageTitle}</span>
                </div>
                <ActivityIndicator toast text="Loading..." animating={loadingFlag} />
                <Provider value={store}>
                    <UserName {...this.props} handleLogin={this.handleLogin} />
                </Provider>
            </div>
        )
    }
}
