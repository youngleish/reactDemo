/* eslint-disable jsx-a11y/accessible-emoji */
import React, { Component } from 'react'
import Layout from '../components/Layout'
import BlockPage from '../components/BlockPage'
import { Draggable } from 'gsap/all'

export default class RenderPropPage extends Component {
    render() {
        return (
            <div>
                <Layout pageTitle='RenderPropPage' {...this.props}>
                    <BlockPage>
                        <div className='draggableWrapper'>
                            <WidthDrag render={mouse => (
                                // `${mouse.x},${mouse.y}` 
                                <Cat mouse={mouse} />
                            )} />
                            <WidthDrag render={(mouse) => (
                                <Mouse mouse={mouse}/>
                            )}/>
                        </div>
                    </BlockPage>
                </Layout>
            </div>
        )
    }
}

class WidthDrag extends Component {
    constructor(props) {
        super(props)
        this.dragRef = React.createRef()
        this.state = {
            x: null,
            y: null
        }
    }
    componentDidMount = () => new Draggable(this.dragRef.current, { onDrag: this.onDrag })
    onDrag = (e) => {
        const { x, y } = e.target.getBoundingClientRect()
        this.setState({
            x: Math.floor(x),
            y: Math.floor(y)
        })
    }
    render() {
        return (
            <span className='draggableInner' ref={this.dragRef}>
                {this.props.render(this.state)}
            </span>
        )
    }
}
const Cat = (props) => {
    const { mouse } = props

    return (
        <div className='picWrapper'>
            <span role='img'>🐱</span>
            {mouse.x && mouse.y && (
                <span className='picPosition'>{`(${mouse.x},${mouse.y})`}</span>
            )}
        </div>
    )
}
const Mouse = (props) => {
    const {mouse} = props
    return (
        <div className='picPositions'>
            <span role='img'>🐭</span> 
            {
                mouse.x && mouse.y && (
                    <span className='picPosition'>{`(${mouse.x},${mouse.y})`}</span>
                )
            }
        </div>
    )
}
