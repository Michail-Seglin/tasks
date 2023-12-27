import React from "react";
import { useState } from "react";

// 2. Форма с использованием useState: Создайте компонент
//  текстового поля, который позволяет пользователю вводить 
//  текст и отображает его в реальном времени.

function Task31() {
    const [inp, setInp] = useState('');

    function show(e) {
        setInp(e.target.value)
    }

    return (<>
        <h1>{inp}</h1>
        <input onChange={show}></input>
    </>)
}

export default Task31