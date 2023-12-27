import React from "react";
import { useState } from "react";

// 1. Счетчик с использованием useState: Создай компонент React, который отображает
// числовое значение и кнопки "+1" и "-1". Используйте хук useState для управления
// состоянием счетчика. При нажатии на кнопки, значение счетчика должно
// увеличиваться или уменьшаться.

function Task30() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1)
    }

    function decrement() {
        setCount(count - 1)
    }

    return (<>
        <h1>{count}</h1>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
    </>)
}

export default Task30