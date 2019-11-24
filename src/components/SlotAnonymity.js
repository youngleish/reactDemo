import React, { Component } from 'react'

export default class AnonymitySlot extends Component {
    render() {
        console.log('AnonymitySlot.props', this.props)
        
        return (
            <div>
                <section className="block">
                    <h3>不具名使用</h3>
                    {this.props.children}
                </section>   
            </div>
        )
    }
}
