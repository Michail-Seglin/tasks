import {  useReducer } from "react";

// 1. Создайте компонент счетчика, который может увеличивать или уменьшать
// значение при нажатии на соответствующие кнопки.

function reducer(state, action) {
    switch (action) {
        case 'INCREMENT':
            return state + 1;

        case 'DECREMENT':
            return state - 1;
        default:
            break;
    }
}


const UseReducer1 = () => {
    const [count, dispatch] = useReducer(reducer, 0)

    return (
        <>
            <p>{count}</p>
            <button onClick={() => dispatch('INCREMENT')}>++</button>
            <button onClick={() => dispatch('DECREMENT')}>--</button>
        </>
    )
}

export default UseReducer1
