import React, { useState, useRef, useEffect } from 'react'
import Layout from '../components/Layout'
import BlockPage from '../components/BlockPage'
import { AddFruit, FruitList } from '../components/Fruit'
import { Toast } from 'antd-mobile'

export default function HookPage(props) {
    return (
        <div>
            <Layout pageTitle='HookPage' {...props}>
                <BlockPage pageSubTitle='State Hook 使用'>
                    <BaseStateHookUse />
                </BlockPage>
                <BlockPage pageSubTitle='声明多个state变量'>
                    <Fruit />
                </BlockPage>
                <BlockPage pageSubTitle='Effect Hook 使用'>
                    <BaseEffectHookUse />
                </BlockPage>
                <BlockPage pageSubTitle='使用多个effect'>
                    <MoreUseEffect />
                </BlockPage>
            </Layout>
        </div>
    )
}

function BaseStateHookUse() {
    const [date, setDate] = useState(new Date())
    const [name, setName] = useState('Tom')
    const updDate = () => {
        setDate(new Date())
    }
    const changeName = () => {
        setName('newName')
    }
    return (
        <>
            <div onClick={changeName}>点我换个名字吧{name}</div>
            <div onClick={updDate}>点击我切换当前时间{date.toLocaleTimeString()}</div>
        </>
    )
}

function Fruit() {
    const [fruitList, setFruitList] = useState(['苹果', '橙子'])
    const [fruitName, setFruitName] = useState('')
    const inputRef = useRef(null)
    const addFruit = (item) => {
        if (!item) {
            Toast.info('请输入水果名称', 2)
            return false
        }
        setFruitList([...fruitList, item])
        setFruitName("")
        inputRef.current.focus()
    }
    return (
        <>
            <strong style={{ backgroundColor: 'pink' }}>这里注意代码中添加水果的方式</strong>
            <AddFruit addFruit={addFruit} fruitName={fruitName} setFruitName={setFruitName} inputRef={inputRef} />
            <FruitList fruitList={fruitList} setFruitList={setFruitList} />
        </>
    )
}

function BaseEffectHookUse() {
    const [date, setDate] = useState(new Date())
    // 相当于componentDidMount 和 componentDidUpdate
    useEffect(() => {
        // console.log('effect')
        const timer = setInterval(() => {
            document.title = date.toLocaleTimeString()
            setDate(new Date())
        }, 1000)
        return () => clearInterval(timer)
    }, [date])
    return (
        <div>
            <p>{date.toLocaleTimeString()}</p>
        </div>
    )
}

function MoreUseEffect() {
    const [count, setCount] = useState(0)
    const [date, setDate] = useState(new Date())
    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => clearInterval(timer)
    }, [date])
    useEffect(() => {
        document.title = count
    }, [count])
    return (
        <>
            <div>
                <span>点击次数 {count}</span><button onClick={() => setCount(count + 1)} type='button' className='btn'>点击增加次数</button>
            </div>
            <div>
                <span>当前时间 {date.toLocaleTimeString()}</span>
            </div>
        </>
    )
}
