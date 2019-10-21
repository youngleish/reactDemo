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
                    <Button type="primary" inline style={{marginRight: '4px'}} onClick={() => this.goJsxPage('/JSXPage')}>JSXPage</Button>
                    <Button type="primary" inline onClick={() => this.goJsxPage('/classComponentPage')}>ClassComponentPage</Button>
                </WingBlank>
            </div>
        )
    }
}
