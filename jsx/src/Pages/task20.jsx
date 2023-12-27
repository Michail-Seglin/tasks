import React, { useState } from "react";

function Task20() {

    const [val, setVal] = useState('');
    // let flag = true;
    const [flag, setFlag] = useState('')
    function show() {
        if (flag === true) {
            setVal('Привет')
            setFlag(false);
        } else {
            setVal('')
            setFlag(true)
        }
    }

    return (
        <>
            <h1>{val}</h1>
            <button onClick={show}>Поздороваться</button>
        </>
    )
}

export default Task20 