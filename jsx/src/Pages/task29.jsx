import React, { useState } from "react";


// сделайте инпут в который вы пишите математическое выражение
// по клику на кнопку вы высчитываете результат мат
// выражения и отображаете результат в h1

function Task29() {

    const [inp, setInp] = useState('')

    function show() {

    }

    return (
        <>
            <h1></h1>
            <input onChange={show}></input>
        </>
    )
}

export default Task29