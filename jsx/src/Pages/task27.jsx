import React, { useState } from "react";

// Напиши компонент, который будет показывать случайную 
// строку в h1 при нажатии на кнопку. слова хранятся в массиве

function Task27() {

    const [inp, setInp] = useState('')
    const arr = ['anna', 'sasha', 'jenya'];

    function show() {
        setInp(arr[Math.round(Math.random() * 2)])
    }

    return (
        <>
            <h1>{inp}</h1>
            <button onClick={show}>Click me</button>
        </>
    )
}

export default Task27