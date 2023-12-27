import { useState } from "react";

function Task12() {

    const [inp, setInp] = useState('');

    function show(e) {
        setInp(e.target.value)
    }

    return (
        <div>
            <h1>{inp}</h1>
            <input onChange={show} />
        </div>
    )
}

export default Task12