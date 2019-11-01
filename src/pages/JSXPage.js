import React from 'react'
import Layout from '../components/Layout'

export default function JSXPage(props) {
    const str = '我是表达式string'
    const name = {
        firstName: 'Tom',
        lastName: 'Jerry'
    }
    const formatName = () => {
        return name.firstName + '-' + name.lastName
    }

    const greet = <div>我是jsx对象</div>

    const show = false
    const ifTem = <div>我是条件语句要显示的内容</div>
    const ifContent = name ? <div>如果name存在我就显示{name.firstName + '-' + name.lastName}</div> : null

    const arr = [0, 1, 2, 3]
    const obj = [
        {
            name: 'Tom',
            age: 18
        },
        {
            name: 'Nicky',
            age: 20
        }
    ]
    return (
        // <div className="page">
        <Layout pageTitle='JSXPage' {...props}>
            <div className='page'>
                <section className='block'>
                    <h3>表达式{}的使用</h3>
                    <div>{str}</div>
                </section>
                <section className='block'>
                    <h3>函数表达式的使用</h3>
                    <div>{formatName()}</div>
                </section>
                <section className="block">
                    <h3>jsx是js的对象也是合法的表达式</h3>
                    <div>{greet}</div>
                </section>
                <section className="block">
                    <h3>条件语句的实现</h3>
                    <div>{show && ifTem}</div>
                    <div>{show ? ifTem : '我是替代语句'}</div>
                    <div>{ifContent}</div>
                </section>
                <section className="block">
                    <h3>数组的使用</h3>
                    <ul>
                        {arr.map((item, index) => {
                            return <li key={'item' + index}>{item}</li>
                        })}
                    </ul>
                    <ul>
                        {obj.map((item, index) => {
                            return <li key={'item2' + index}>{item.name + '-' + item.age}</li>
                        })}
                    </ul>
                </section>
                <section className="block">
                    <h3>属性的使用</h3>
                    <img className="pic" src={require('../logo.svg')} alt=""/>
                </section>
            </div>
        </Layout>
        // </div>
    )
}
