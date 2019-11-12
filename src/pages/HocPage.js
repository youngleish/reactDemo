/* eslint-disable jsx-a11y/accessible-emoji */
import React, { Component } from 'react'
import Layout from '../components/Layout'
import BlockPage from '../components/BlockPage'
import { Draggable } from 'gsap/all'
export default class HocPage extends Component {
    foo = Cmp => props => {
        return (
            <div style={{ border: '1px solid #ccc', lineHeight: '40px' }}>
                <Cmp {...props} />
            </div>
        )
    }

    foo2 = Cmp => props => {
        return (
            <div style={{ border: '1px solid #ccc', lineHeight: '60px', backgroundColor: '#ccc' }}>
                <Cmp />
            </div>
        )
    }

    foo3 = Cmp => props => {
        const newProps = {
            name: "Json"
        }
        return (
            <div style={{ border: '1px solid #ccc', lineHeight: '60px', backgroundColor: '#ccc' }}>
                <Cmp {...props} {...newProps} />
            </div>
        )
    }
    withDrag = Cmp => {
        class WithDrag extends Component {
            state = {
                x: null,
                y: null
            }
            constructor(props) {
                super(props)
                this.elementRef = React.createRef()
            }
            componentDidMount = () => new Draggable(this.elementRef.current, { onDrag: this.onDrag })
            onDrag = (e) => {
                const { x, y } = e.target.getBoundingClientRect()
                console.log('{z,hll', y);
                
                this.setState({
                    x: Math.floor(x),
                    y: Math.floor(y)
                })
            }
            render = () => {
                const { x, y } = this.state
                return (
                    <span className='draggableInner' ref={this.elementRef}>
                        <Cmp {...this.props} x={x} y={y} />
                    </span>
                )
            }
        }
        WithDrag.displayName = `WithDrag(${Cmp.displayName || Cmp.name})`
        return WithDrag
    }

    render() {
        const Foo = this.foo(Child)
        const Foo2 = this.foo2(this.foo(Child))
        const Foo3 = this.foo3(this.foo(Child2))
        const DraggableMouse = this.withDrag(Mouse)
        const DraggableCat = this.withDrag(Cat)
        return (
            <Layout pageTitle='HocPage' {...this.props}>
                <BlockPage>
                    <Foo />
                </BlockPage>
                <BlockPage pageSubTitle='链式调用'>
                    <Foo2 />
                </BlockPage>
                <BlockPage pageSubTitle='操作props'>
                    <Foo3 />
                </BlockPage>
                <BlockPage pageSubTitle='有趣的例子'>
                    <div className='draggableWrapper'>
                        <DraggableMouse />
                        <DraggableCat />
                    </div>
                </BlockPage>
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
const Mouse = (props) => {
    const { x = 10, y = 10 } = props
    return (
        <div className='picWrapper'>
            <span role='img'>🐭</span>
            {x && y && (
                <span className='picPosition'>{`(${x},${y})`}</span>
            )}
        </div>
    )
}
const Cat = (props) => {
    const { x, y } = props
    return (
        <div className='picWrapper'>
            <span role='img'>🐱</span>
            {x && y && (
                <span className='picPosition'>{`(${x},${y})`}</span>
            )}
        </div>
    )
}
