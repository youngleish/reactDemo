import React from 'react'
import { consumerHandle } from '../util/appContext';

function ThemedButton(props) {
    console.log('themedButtonFun', props);
    
    return (
        <div>
            <button {...props} style={{backgroundColor: props.background}}></button>
        </div>
    )
}

export default consumerHandle(ThemedButton)
