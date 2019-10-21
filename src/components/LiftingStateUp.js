import React, { Component } from 'react'

export default class LiftingStateUp extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <input type="text" value={this.props.num} onChange={(e) => this.props.setNum(e)}/>
                <button onClick={this.props.addNum}>+</button> 
            </div>
        )
    }
}
