import React from 'react'
export const Context = React.createContext()
export const Provider = Context.Provider
export const Consumer = Context.Consumer
// consumerHandle是高阶组件 
export const consumerHandle = Cmp => props => {
    return <Consumer>{ctx => <Cmp {...ctx} {...props}/>}</Consumer>
}
