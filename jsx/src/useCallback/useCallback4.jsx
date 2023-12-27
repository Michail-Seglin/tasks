import { useState, useCallback, useRef } from "react";

// 4. Создайте компонент, который предоставляет пользователю выбор цвета из
// списка. При выборе цвета, компонент должен отображать выбранный цвет на
// странице. Используйте useCallback, чтобы оптимизировать функцию выбора
// цвета.

const UseCallback4 = () => {
    const [color, setColor] = useState('');
    const arr = useRef(['red', 'green', 'blue'])

    const randomColor = () => {
        setColor(arr.current[Math.round(Math.random() * arr.current.length)])
    }

    return (
        <>
            <button onClick={randomColor}>Color</button>
            {arr.current.map((el, i) => <div key={i}><button onClick={(e) => setColor(e.target.textContent)}>{el}</button></div>)}
            <h1 style={{ color: `${color}` }}>bussines</h1>
        </>
    )
}

export default UseCallback4
