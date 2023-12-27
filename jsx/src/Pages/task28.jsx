import React, { useState } from "react";

// у вас есть 3 кнопки: о нас, цена, главная страница

// в h1 текст того на какую кнопку вы нажали
// (если нажали на ,,цена,, отображать ,,цена,, в h1)

function Task28() {

    const [inp, setInp] = useState('');

    function show(e) {
        setInp(e.target.textContent)
    }
    return (
        <>
            <h1>{inp}</h1>
            <button onClick={show}>о нас</button>
            <button onClick={show}>цена</button>
            <button onClick={show}>главная страница</button>
        </>
    )
}

export default Task28