import React, { Component } from 'react'
import {Consumer} from '../util/appContext'

export default class ThemedButtonClass2 extends Component {
    render() {
        return (
            <Consumer>{ctx => <BtnHandle {...ctx} {...this.props}/>}</Consumer>
        )
    }
}

function BtnHandle(props) {
    console.log('ThemedButtonClass2', props);
    
    return (
        <div>
            <button {...props} style={{backgroundColor: props.background}}></button>
        </div>
    )
}
