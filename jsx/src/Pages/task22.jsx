import React, { useState } from "react";

// Кнопка открыто меняется на закрыто по нажатию на себя

function Task22() {

    const [btn, setBtn] = useState(false);

    function show() {
        if (btn == false) {
            setBtn(true)
        } else (setBtn(false))
    }

    return (
        <>
            <button onClick={show} >{!btn ? 'Open' : 'Close'}</button>
        </>
    )
}

export default Task22

