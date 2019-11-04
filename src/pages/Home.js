import React, { Component } from 'react'
import { WingBlank, Button } from 'antd-mobile'
import Layout from '../components/Layout';
import Routes from '../router'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            routes: Routes.slice(2, Routes.length),
            showHomeIcon: false
        }
    }
    
    goJsxPage = (path) => {
        this.props.history.push(path)
    }
    render() {
        console.log('Home.prop', this.props);
        return (
            <Layout title='练习首页' showHomeIcon={this.state.showHomeIcon} {...this.props}>
                <WingBlank>
                    {
                        this.state.routes.map((item, index) => {
                            return  <Button key={'child' + index} className="home-btn" type="primary" inline onClick={() => this.goJsxPage(item.path)}>{item.name}</Button> 
                        }) 
                    }
                </WingBlank>
            </Layout>
        )
    }
}
