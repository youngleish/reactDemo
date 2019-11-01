import React, { Component } from 'react'
import {Button} from 'antd-mobile'
import Layout from '../components/Layout';

export default class LifeCyclePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
        console.log('constructor', this.state.counter);
    }
    // UNSAFE_componentWillMount() {
    //     console.log('UNSAFE_componentWillMount', this.state.counter);
    // }
    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps:state', state)
        return null
    }
    
    componentDidMount() {
        console.log('componentDidMount', this.state.counter);
    }
    componentWillUnmount() {
        console.log('componentWillUnmount', this.state.counter)
    }
    // UNSAFE_componentWillUpdate() {
    //     console.log('UNSAFE_componentWillUpdate', this.state.counter)
    // }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate:prevState', prevState);
        return {
            prevProps, prevState
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) { // 第三个参数是getSnapshotBeforeUpate返回的值
        console.log('componentDidUpdate', prevProps, prevState, snapshot, this.state.counter)
    }
    shouldComponentUpdate(nextProps, nextState) {
        const { counter } = this.state
        console.log('shouldComponentUpdate', counter, nextState.counter)
        return counter !== 4
    }

    addCounter = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    render() {
        const { counter } = this.state
        console.log('render', counter);
        
        return (
            <Layout pageTitle='LifeCyclePage' {...this.props}>
                <div className='page'>
                    <section className="block">
                        <h3>改变counter值测试各个生命周期阶段</h3>
                        <div>counter: {counter}(查看console)</div>
                        <Button className="btn" inline size="small" onClick={this.addCounter}>增加counter值</Button>
                        {!!(counter %2) && <Foo/>}
                    </section>
                </div>
            </Layout>
        )
    }
}

class Foo extends Component{
    componentWillUnmount() {
        console.log('Foo component execute componentWillUnmount')
    }
    
    render() {
        return <div>我是子组件Foo</div>
    }
}
