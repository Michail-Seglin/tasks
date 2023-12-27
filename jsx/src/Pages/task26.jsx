import React, { useState } from "react";
// получить значение из 2 инпутов и отобразить 
// это в консоль по клику на кнопку (одним useState)

function Task26() {

    const [inp, setInp] = useState({
        name: '',
        surname: ''
    })

    function getInp(e) {
        setInp({ ...inp, [e.target.name]: e.target.value })
    }

    function show() {
        console.log(inp);
    }

    return (
        <>
            <input name='name' onChange={getInp}></input>
            <input name='surname' onChange={getInp}></input>
            <button onClick={show}>click me</button>
        </>
    )
}

export default Task26