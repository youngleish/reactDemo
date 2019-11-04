import React, { Component } from 'react'
import Layout from '../components/Layout'
import BlockPage from '../components/BlockPage'

export default class RefPage extends Component {
    render() {
        return (
            <Layout pageTitle='RefPage' {...this.props}>
                <div className='page'>
                    <BlockPage pageSubTitle='为DOM元素添加Ref'>
                        <CustomTextInput/>
                    </BlockPage> 
                    <BlockPage pageSubTitle='为Class组件添加Ref'>
                        <AutoFocusTextInput/>
                    </BlockPage>
                    <BlockPage pageSubTitle='Class组件包裹的Fun组件'>
                        <p>不可以在函数组件上使用ref，但是可以在函数组件内部使用ref</p>
                        <MyFunTextInput/>
                    </BlockPage>
                </div>
            </Layout>
        )
    }
}

class CustomTextInput extends Component {
    constructor(props) {
        super(props)
        // 创建ref存储textInput
        this.textInput = React.createRef()
        console.log('constructor-this.textInput', this.textInput)
    }
    focusTextInput = () => {
        this.textInput.current.focus()
    }
    componentDidMount() {
        console.log('componentDidMount-this.textInput', this.textInput)
    }
    render() {
        const {placeholder=''} = this.props
        return (
            <div>
                <input type="text" ref={this.textInput} placeholder={placeholder}/>
                <button type='button' className='btn' onClick={this.focusTextInput}>通过ref指向DOM元素获取焦点</button>
            </div>
        )
    }
}

class AutoFocusTextInput extends Component {
    constructor(props) {
        super(props)
        this.textInput = React.createRef()
    }
    componentDidMount() {
        this.textInput.current.focusTextInput()
    }
    render() {
        return <CustomTextInput placeholder='自动获取焦点' ref={this.textInput}/>
    }
}

function MyFunTextInput() {
    // 函数内部使用ref
    let textInput = React.createRef()
    const handleClick = () => {
        textInput.current.focus()
    }
    return (
        <div>
            <input type="text" placeholder='我是函数组件中的input' ref={textInput}/>
            <button type='button' className='btn' onClick={handleClick}>通过ref指向DOM元素获取焦点</button>
        </div> 
    )
}

