import React from 'react'
import {consumerHandle} from '../util/appContext'

function UserName(props) {
    console.log('userName', props);
    
    return (
        <div className='usrName'>
            {props.isLogin ? <p className='name'>{props.user.name}</p> : <button className='btn' onClick={props.handleLogin}>登录</button>}
        </div>
    )
}

export default consumerHandle(UserName) 
