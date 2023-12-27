import React from "react";
import { useState } from "react";
// 4. Изменение цвета с использованием useState: Создайте компонент выбора цвета,
// который позволяет пользователю выбирать цвет из списка и отображает цвет
// выбранного цвета на экране
function Task33() {
    const [data, setData] = useState()

    const arr = ['red', 'green', 'blue'];

    const change = (e) => {
        setData(e.target.textContent)
    }

    return (
        <>
            <ul>
                {arr.map((el) => <li onClick={change}>{el}</li>)}
            </ul>

            <div style={{ width: '300px' , color:`${data}`}}></div>
        </>
    )
}

export default Task33