import React, { useState } from 'react'

export function AddFruit({ addFruit }) {
    const [fruitName, setFruitName] = useState('')
    return (
        <div>
            <input type="text" value={fruitName} onChange={e => setFruitName(e.target.value)} />
            <button type="button" className='btn' onClick={() => addFruit(fruitName)}>增加水果哟</button>
        </div>
    )
}

export function FruitList({ fruitList, setFruitList }) {
    const delFruit = (index) => {
        const tem = [...fruitList]
        tem.splice(index, 1)
        setFruitList(tem) 
    }
    return (
        <ul>
            {
                fruitList.map((item, index) => {
                    return (<li key={'fruit' + index} onClick={index => delFruit(index)}>{item}</li>)
                })
            }
        </ul>
    )
}

