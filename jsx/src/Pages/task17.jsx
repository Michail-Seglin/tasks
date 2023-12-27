import React from "react";
import { useState } from 'react';

function Task17() {
    const [inp, setInp] = useState('');

    function change(e) {
        setInp(e.target.value)
    }

    function show() {
        console.log(inp);
    }

    return (
        <>
            <input onChange={change}></input>
            <button onClick={show}>click me</button>
        </>
    )
}

export default Task17