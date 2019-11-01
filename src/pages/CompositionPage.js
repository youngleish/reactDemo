import React, { Component } from 'react'
import AnonymitySlot from '../components/AnonymitySlot'
import NamedSlot from '../components/NamedSlot'
import MixinSlot from '../components/MixinSlot'
import Layout from '../components/Layout'

export default class CompositionPage extends Component {
    render() {
        return (
            <Layout pageTitle='CompositionPage' {...this.props}>
                <div className='page'>
                    <AnonymitySlot>
                        <p>这里是不具名组件中包含的内容</p>
                    </AnonymitySlot>
                    <NamedSlot>
                        {{
                            btn: <button className='btn' type='button'>我是具名提供的btn</button>,
                            con: <p>我是具名提供的内容</p>
                        }}
                    </NamedSlot>
                    <MixinSlot>
                        {{
                            pic: <img className="pic" src={require('../logo.svg')} alt="" />,
                            con: <p>我是混合使用中的具名内容</p>
                        }}
                    </MixinSlot>
                </div>
            </Layout>
        )
    }
}
