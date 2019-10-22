import React, { Component } from 'react'
import { WingBlank, Button } from 'antd-mobile'

export default class Home extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    goJsxPage = (path) => {
        this.props.history.push(path)
    }
    render() {
        return (
            <div>
                <h1>Home</h1>
                <WingBlank>
                    <Button className="home-btn" type="primary" inline onClick={() => this.goJsxPage('/JSXPage')}>JSXPage</Button>
                    <Button className="home-btn" type="primary" inline onClick={() => this.goJsxPage('/classComponentPage')}>ClassComponentPage</Button>
                    <Button className="home-btn" type="primary" inline onClick={() => this.goJsxPage('/lifeCyclePage')}>LifeCyclePage</Button>
                </WingBlank>
            </div>
        )
    }
}
