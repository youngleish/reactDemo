import React, { Component } from 'react'
import { Button } from 'antd-mobile'
import LiftingStateUp from '../components/LiftingStateUp'
import Layout from '../components/Layout'

export default class ClassComponentPage extends Component {
    constructor(props) {
        super(props)
        // 组件状态管理: 使用state维护组件内部状态，在构造函数中初始化状态
        this.state = {
            date: new Date(),
            counter: 0,
            testCombineState: 80,
            counter1: 0,
            counter2: 0,
            counter3: 0,
            num: 0,
            num2: 30
        }
    }
    componentDidMount() {
        // 组件挂载时启动定时器，每秒更新state
        this.timer = setInterval(() => {
            this.setState({
                date: new Date()
            })
        }, 1000)

        document.getElementById('btn3').addEventListener("click", () => {
            this.setState({
                counter3: this.state.counter3 + 1
            })
            this.setState({
                counter3: this.state.counter3 + 2
            })
            console.log('同步方法3counter3', this.state.counter3)

        })
        // setState批量执行
        this.setState({
            counter: this.state.counter + 1,
        })
        this.setState({
            counter: this.state.counter + 2,
        })
        this.setState({
            counter: this.state.counter + 3,
        })
        this.setState({
            testCombineState: this.state.testCombineState + 3,
        })
    }
    componentWillUnmount() {
        // 组件卸载时停止计时器
        clearInterval(this.timer)
    }
    // 异步
    setCounter = () => {
        this.setState({
            counter: this.state.counter + 1,
        })
        this.setState({
            counter: this.state.counter + 2,
        })
        console.log('异步counter', this.state.counter);
    }
    // 同步方法1
    setCounter1 = () => {
        this.setState((nextState, props) => ({
            counter1: nextState.counter1 + 1
        }))
        this.setState((nextState, props) => ({
            counter1: nextState.counter1 + 2
        }))
        console.log('同步方法1counter1', this.state.counter1);
    }

    // 同步方法2
    setCounter2 = () => {
        setTimeout(() => {
            this.setState({
                counter2: this.state.counter2 + 1
            })
            this.setState({
                counter2: this.state.counter2 + 2
            })
        }, 100)
        console.log('同步方法2定时器counter2', this.state.counter2);
    }

    // 状态提升方法
    // 处理num1数据
    setNum = (event) => {
        this.setState({
            num: parseInt(event.target.value)
        })
    }
    addNum = () => {
        this.setState({
            num: this.state.num + 1
        })
    }
    // 处理num2数据
    setNum2 = (e) => {
        this.setState({
            num2: parseInt(e.target.value)
        })
    }
    addNum2 = () => {
        this.setState({
            num2: this.state.num2 + 4
        })
    }
    render() {
        const arr = [0, 1, 2, 3].map((item, index) => <li key={'item' + index}>{item}</li>)
        const { date, testCombineState, counter, counter1, counter2, counter3, num, num2 } = this.state
        return (
            <Layout pageTitle='ClassComponentPage' {...this.props}>
                <div className='page'>
                    <section className="block">
                        <h3>数组表达式应用</h3>
                        <ul>{arr}</ul>
                    </section>
                    <section className="block">
                        <h3>组件state状态管理</h3>
                        <div>{date.toLocaleTimeString()}</div>
                    </section>
                    <section className="block">
                        <h3>setState批量执行</h3>
                        <div>在dom挂载的生命周期中执行了3次setState更新counter的方法得到了1次setState值,并且对相同属性的设置只保留最后一次更新: ---counter:{counter}, testCombineState: {testCombineState}</div>
                    </section>
                    <section className="block">
                        <h3>setState同步和异步更新</h3>
                        <div className='s-block'>
                            <div>异步: {counter}</div>
                            <Button className="btn" inline size="small" onClick={this.setCounter}>异步改变counter值</Button>
                        </div>
                        <div className="s-block">
                            <div>同步方法1-setState方法接受函数: {counter1}</div>
                            <Button className="btn" inline size="small" onClick={this.setCounter1}>同步改变counter值方法1</Button>
                        </div>
                        <div className="s-block">
                            <div>同步方法2-定时器: {counter2}</div>
                            <Button className="btn" inline size="small" onClick={this.setCounter2}>同步改变counter值方法2</Button>
                        </div>
                        <div className="s-block">
                            <div>同步方法3-原生方法绑定事件: {counter3}</div>
                            <Button className="btn" id="btn3" inline size="small" onClick={this.setCounter3}>同步改变counter值方法3</Button>
                        </div>
                    </section>
                    <section className="block">
                        <h3>组件状态提升</h3>
                        <div>
                            <div>num之和{num + num2}</div>
                            <LiftingStateUp num={num} addNum={this.addNum} setNum={(event) => { this.setNum(event) }} />
                            <LiftingStateUp num={num2} addNum={this.addNum2} setNum={(event) => { this.setNum2(event) }} />
                        </div>
                    </section>
                </div>
            </Layout>
        )
    }
}
