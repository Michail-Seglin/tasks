import React, { useState } from "react";

// отображай в h1 каждое введенное значение из input

function Task25() {

    const [inp, setInp] = useState('');

    function show(event) {
        setInp(event.target.value)
    }


    return (
        <>
            <h1>{inp}</h1>
            <input onChange={show}></input>
        </>
    )
}

export default Task25