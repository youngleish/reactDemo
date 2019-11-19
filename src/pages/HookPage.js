import React, { useState, useRef } from 'react'
import Layout from '../components/Layout'
import BlockPage from '../components/BlockPage'
import { AddFruit, FruitList } from '../components/Fruit'
import { Toast } from 'antd-mobile'

export default function HookPage() {
    return (
        <div>
            <Layout pageTitle='HookPage'>
                <BlockPage pageSubTitle='State Hook 使用'>
                    <BaseStateHookUse/>
                </BlockPage>
                <BlockPage pageSubTitle='声明多个state变量'>
                    <Fruit/>
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
            <strong style={{backgroundColor: 'pink'}}>这里注意代码中添加水果的方式</strong>
            <AddFruit addFruit={addFruit} fruitName={fruitName} setFruitName={setFruitName} inputRef={inputRef}/>
            <FruitList fruitList={fruitList} setFruitList={setFruitList} />
        </>
    )
}
