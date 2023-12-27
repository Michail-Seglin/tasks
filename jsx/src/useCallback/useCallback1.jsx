import { useState, useCallback } from "react";
// 1. Создайте компонент с кнопкой "Увеличить счетчик". При каждом клике на кнопку
// счетчик должен увеличиваться на 1. Используйте useCallback, чтобы
// оптимизировать обработчик клика на кнопке.


const UseCallback1 = () => {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1)
    }

    function decrement() {
        setCount(count - 1)
    }

    return (
        <>
            <p>{count}</p>
            <button onClick={increment}>Count++</button>
            <button onClick={decrement}>Count--</button>
        </>
    )
}

export default UseCallback1
