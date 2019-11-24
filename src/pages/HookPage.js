/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useRef, useEffect, useContext, useReducer } from 'react'
import Layout from '../components/Layout'
import BlockPage from '../components/BlockPage'
import { AddFruit, FruitList } from '../components/Fruit'
import { Draggable } from 'gsap/all'
import { ActivityIndicator, Toast } from 'antd-mobile'

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
                <BlockPage pageSubTitle='函数式更新'>
                    <FunctionUpd initialCount={18}/>
                </BlockPage> 
                <BlockPage pageSubTitle='Effect Hook 使用'>
                    <BaseEffectHookUse />
                </BlockPage>
                <BlockPage pageSubTitle='使用多个effect'>
                    <MoreUseEffect />
                </BlockPage>
                <BlockPage pageSubTitle='自定义Hook'>
                    <div className='draggableWrapper'>
                        <Animal>
                            <span role='img'>🐭</span>
                        </Animal>
                        <Animal>
                            <span role='img'>🐱</span>
                        </Animal>
                    </div>
                </BlockPage>
                <BlockPage pageSubTitle='useContext使用'>
                    <BaseContextUse/>
                </BlockPage>
                <BlockPage pageSubTitle='useReducer使用'>
                    <BaseReducerUse/>
                </BlockPage>
                <BlockPage pageSubTitle='useReducer惰性初始化'>
                    <LazyInitialization/>
                </BlockPage>
                <BlockPage pageSubTitle='复杂state中useReducer使用'>
                    <UseReducerLogin/>
                </BlockPage>
            </Layout>
        </div>
    )
}
// State Hook基本使用
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
// 多个State Hook使用
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
// 函数式更新
function FunctionUpd ({initialCount}) {
    const [count, setCount] = useState(initialCount)
    return(
        <>
            <span>count值{count}</span>
            <button className='btn' type='button' onClick={() => setCount(initialCount)}>Reset</button>
            <button className='btn' type='button' onClick={() => setCount(preCount => setCount(preCount + 1))}>+</button>
            <button className='btn' type='button' onClick={() => setCount(preCount => setCount(preCount - 1))}>-</button>
        </>
    )
}
// Effect Hook 基本使用
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
// 多个Effect Hook使用
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
// 自定义Hook
function useDrag() {
    const [x, setX] = useState(null)
    const [y, setY] = useState(null)
    const dragRef = useRef(null)
    const onDrag = (e) => {
        const {x, y} = e.target.getBoundingClientRect()
        setX(Math.floor(x))
        setY(Math.floor(y))
    }
    
    useEffect(() => {
        new Draggable(dragRef.current, {onDrag: onDrag})
    }, [dragRef])
    return {
        x, y, dragRef 
    }
}
// 组合组件应用
function Animal(props) {
    const { x, y, dragRef } = useDrag()
    return (
        <span className='draggableInner' ref={dragRef}>
            <div className='picWrapper'>
                {props.children}
                {
                    x && y && (
                        <span className='picPosition'>{`(${x},${y})`}</span>
                    )
                }
            </div>   
        </span>
    )
}

// useContext使用
const theme = {
    light: {
        bgc: '#fff',
        fgc: '000'
    },
    dark: {
        bgc: '#000',
        fgc: '#fff'
    }
}
const ThemeContext = React.createContext(theme.light)
function BaseContextUse() {
    return (
        <ThemeContext.Provider value={theme.dark}>
            <MiddleCmp/>
        </ThemeContext.Provider>
    )
}
function MiddleCmp() {
    return(
        <div>
            <ThemeButton/>
        </div>
    )
}
function ThemeButton() {
    const theme = useContext(ThemeContext)
    return (
        <button className='btn' type='button' style={{backgroundColor: theme.bgc, color: theme.fgc}}>我的样式来自useContext</button>
    )
}

// useReducer的基本使用
function BaseReducerUse() {
    const initialState = {count: 0}
    const countReducer = (state, action) => {
        switch(action.type) {
            case 'increment':
                return {count: state.count + 1}
            case 'decrement':
                return {count: state.count -1 }
            default:
                throw new Error()
        }
    }
    const [state, dispatch] = useReducer(countReducer, initialState)
    return (
        <>
            <span>count值: {state.count}</span>
            <button className='btn' onClick={() => dispatch({type: 'increment'})}>+</button>
            <button className='btn' onClick={() => dispatch({type: 'decrement'})}>-</button>
        </>
    )
}
// useReducer 惰性初始化
function LazyInitialization() {
    const initialCount = 12
    const init = (initialCount) => {
        return {count: initialCount}
    }
    const countReducer = (state, action) => {
        switch(action.type) {
            case "increment":
                return {count: state.count + 1}
            case "decrement":
                return {count: state.count - 1}
            case "reset":
                return init(action.payload)
            default:
                throw new Error()
        }
    }
    const [state, dispatch] = useReducer(countReducer, initialCount, init)
    return (
        <>
            <span>count值: {state.count}</span>
            <button className='btn' onClick={() => dispatch({type: 'increment'})}>+</button>
            <button className='btn' onClick={() => dispatch({type: 'decrement'})}>-</button>  
            <button className='btn' onClick={() => dispatch({type: 'reset', payload: initialCount})}>Reset</button>  
        </>
    )
}
// UseReducerLogin 
const initState = {
    name: '',
    pwd: '',
    isLoading: false,
    success: '',
    error: '',
    isLoggedIn: false
}
function UseReducerLogin() {
    const [state, dispatch] = useReducer(loginReducer, initState)
    const login = () => {
        if (!state.name) {
            Toast.info('请输入用户名', 1) 
            return
        }
        if (!state.pwd) {
            Toast.info('请输入密码', 1) 
            return
        }
        dispatch({type: 'login'})
        console.log('success', state.isLoading)
        setTimeout(() => {
            dispatch({type: 'success', payload: {success: '登录成功'}})
            Toast.info(state.success, 1)  
        }, 1000)
    }
    return (
        <div>
            <ActivityIndicator toast text="Loading..." animating={state.isLoading} />
            <input type="text" placeholder='请输入用户名' value={state.name} onChange={e => dispatch({type: 'nameChange', payload: {name: e.target.value}})}/>
            <input type="text" placeholder='请输入用密码' value={state.pwd} onChange={e => dispatch({type: 'pwdChange',payload: {pwd: e.target.value}})}/>
            <button className="btn" type='button' onClick={login}>登录</button>
        </div>
    )
}
function loginReducer(state, action) {
    switch(action.type) {
        case 'nameChange':
            return {...state, name: action.payload.name}
        case 'pwdChange':
            return {...state, pwd: action.payload.pwd}
        case 'login':
            return {...state, isLoading: true}
        case 'success':
            return {...state, isLoading: false, isLoggedIn: true, success: action.payload.success}
        case 'error': 
            return {...state, isLoading: false, error: action.payload.error, name: '', pwd: ''}
        default:
            return state
    }
}
