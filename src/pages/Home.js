import React, { Component } from 'react'
import { WingBlank, Button } from 'antd-mobile'
import Layout from '../components/Layout';

export default class Home extends Component {
    
    goJsxPage = (path) => {
        this.props.history.push(path)
    }
    render() {
        console.log('Home.prop', this.props);
        // const {store, loadingFlag} = this.state
        return (
            <Layout title='练习首页' {...this.props}>
                <div className='page homePage'>
                    {/* <ActivityIndicator toast text="Loading..." animating={loadingFlag}/> */}
                    {/* <Provider value={store}>
                        <UserName {...this.props} handleLogin={this.handleLogin}/>
                    </Provider> */}
                    <WingBlank>
                        <Button className="home-btn" type="primary" inline onClick={() => this.goJsxPage('/JSXPage')}>JSXPage</Button>
                        <Button className="home-btn" type="primary" inline onClick={() => this.goJsxPage('/classComponentPage')}>ClassComponentPage</Button>
                        <Button className="home-btn" type="primary" inline onClick={() => this.goJsxPage('/lifeCyclePage')}>LifeCyclePage</Button>
                        <Button className="home-btn" type="primary" inline onClick={() => this.goJsxPage('/contextPage')}>ContextPage</Button>
                        <Button className="home-btn" type="primary" inline onClick={() => this.goJsxPage('/compositionPage')}>CompositionPage</Button>
                    </WingBlank>
                </div>
            </Layout>
        )
    }
}
