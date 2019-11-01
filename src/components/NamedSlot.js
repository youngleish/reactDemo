import React, { Component } from 'react'

export default class NamedSlot extends Component {
    render() {
        console.log('namedSlt.props', this.props);
        
        const {children} = this.props
        return (
            <div>
                <section className="block">
                    <h3>具名使用</h3>
                    {children.btn}
                    {children.con}
                </section>  
            </div>
        )
    }
}
