import React, { Component } from 'react'

export default class MixinSlot extends Component {
    render() {
        console.log('MixinSlot.props', this.props);

        const { children } = this.props
        let slotArr = []
        if (children.$$typeof) {
            slotArr.push(children)
        } else {
            for (let item in children) {
                slotArr.push(children[item]);
            }
        }
        console.log('slotArr', slotArr);
        return (
            <div>
                <section className="block">
                    <h3>兼容2种方式写法</h3>
                    {slotArr.map((item, index) => {
                        return <div key={'child' + index}>{item}</div>
                    })} 
                </section>
            </div>
        )
    }
}
