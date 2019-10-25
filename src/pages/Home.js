import React, { Component } from 'react'
import { WingBlank, Button, ActivityIndicator } from 'antd-mobile'
import { Provider } from '../util/appContext'
import UserName from '../components/UserName';
 

export default class Home extends Component {
    constructor(props) {
        super(props);
        console.log('home', props);
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

    goJsxPage = (path) => {
        this.props.history.push(path)
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
    render() {
        const {store, loadingFlag} = this.state
        return (
            <div>
                <h1>Home</h1>
                <ActivityIndicator toast text="Loading..." animating={loadingFlag}/>
                <Provider value={store}>
                    <UserName {...this.props} handleLogin={this.handleLogin}/>
                </Provider>
                <WingBlank>
                        <Button className="home-btn" type="primary" inline onClick={() => this.goJsxPage('/JSXPage')}>JSXPage</Button>
                        <Button className="home-btn" type="primary" inline onClick={() => this.goJsxPage('/classComponentPage')}>ClassComponentPage</Button>
                        <Button className="home-btn" type="primary" inline onClick={() => this.goJsxPage('/lifeCyclePage')}>LifeCyclePage</Button>
                        <Button className="home-btn" type="primary" inline onClick={() => this.goJsxPage('/contextPage')}>ContextPage</Button>
                    </WingBlank>
            </div>
        )
    }
}
