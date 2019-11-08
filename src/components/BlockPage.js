// 组合组件
import React from 'react'

export default function BlockPage(props) {
    const {pageSubTitle = '基本使用'} = props
    return (
        <div>
           <section className='block'>
                <h3>{pageSubTitle}</h3>
                {props.children}
            </section> 
        </div>
    )
}
