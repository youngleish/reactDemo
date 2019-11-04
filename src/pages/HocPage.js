import React, { Component } from 'react'
import Layout from '../components/Layout'
import BlockPage from '../components/BlockPage'

export default class HocPage extends Component {
    foo = Cmp => props => {
        return (
            <div style={{border: '1px solid #ccc', lineHeight: '40px'}}>
                <Cmp {...props}/>
            </div>
        )
    }

    foo2 = Cmp => props => {
        return (
            <div style={{border: '1px solid #ccc', lineHeight: '60px', backgroundColor:'#ccc'}}>
                <Cmp/>
            </div>
        )
    }

    foo3 = Cmp => props => {
        const newProps = {
            name: "Json"
        }
        return (
            <div style={{border: '1px solid #ccc', lineHeight: '60px', backgroundColor:'#ccc'}}>
                <Cmp {...props} {...newProps}/>
            </div>
        )
    }

    render() {
        const Foo = this.foo(Child)
        const Foo2 = this.foo2(this.foo(Child))
        const Foo3 = this.foo3(this.foo(Child2))
        return (
            <Layout pageTitle='HocPage' {...this.props}>
                <div className='page'>
                    <BlockPage>
                        <Foo/> 
                    </BlockPage>
                    <BlockPage pageSubTitle='链式调用'>
                        <Foo2/> 
                    </BlockPage>
                    <BlockPage pageSubTitle='操作props'>
                        <Foo3/> 
                    </BlockPage>
                </div> 
            </Layout>
        )
    }
}

function Child(props) {
    console.log('Child.props', props);
    
    return <div>Child</div>
}
function Child2(props) {
    console.log('Child2.props', props);
    
    return <div>Child2: 通过HOC组件对props进行增加删除修改</div>
}

