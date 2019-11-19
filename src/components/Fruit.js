import React from 'react'

export function AddFruit({ addFruit, fruitName, setFruitName, inputRef }) {
    return (
        <div>
            <input ref={inputRef} type="text" value={fruitName} onChange={e => setFruitName(e.target.value)} />
            <button type='button' className='btn' onClick={() => addFruit(fruitName)}>添加水果哦</button>
        </div>
    )
}


export function FruitList({ fruitList, setFruitList }) {
    const delFruit = (delIndex) => {
        const tem = [...fruitList]
        tem.splice(delIndex, 1)
        setFruitList(tem)
    }
    return (
        <ul>
            {
                fruitList.map((item, index) => {
                    return <li key={'fruit-' + index} onClick={() => delFruit(index)}>{item}</li>
                })
            }
        </ul>
    )
}

