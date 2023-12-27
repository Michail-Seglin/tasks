import React from "react";
import { useState } from "react";
// 3. Отображение текста с использованием useState: Создайте компонент, который
// предоставляет две кнопки: "Показать" и "Скрыть". При нажатии на "Показать"
// отображается текст, а при нажатии на "Скрыть" текст скрывается.

function Task32() {
    const [data, setData] = useState(true)

    return (
        <>
            <h1>{setData ? 'hello' : ''}</h1>
            <button onClick={() => setData(true)}>1</button>
            <button onClick={() => setData(false)}>2</button>
        </>
    )
}

export default Task32