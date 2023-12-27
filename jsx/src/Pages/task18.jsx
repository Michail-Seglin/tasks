import React from "react";
import { useState } from "react";

function Task18() {

    const [inp, setInp] = useState({
        name: '',
        surname: '',
        email: '',
        pwd: ''
    })

    const get = (event) => {
        setInp({ ...inp, [event.target.name]: event.target.value })
    }

    const Show = () => {
        console.log(inp);
    }

    return (
        <>
            <input name='name' onChange={get} />
            <input name='surname' onChange={get} />
            <input name='email' onChange={get} />
            <input name='pwd' onChange={get} />
            <button onClick={Show}>click me</button>
        </>
    )
}

export default Task18