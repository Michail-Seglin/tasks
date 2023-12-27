import React, { useState } from "react";

// Сделай компонент выезжающего меню из 3 параграфов. 
// по нажатию на кнопку ,,открыть,, отображаешь меню. 


function Task23() {

    const [btn, setBtn] = useState(false);

    function show() {
        if (btn == false) {
            setBtn(true)
        } else (setBtn(false))
    }


    return (
        <>
            <button onClick={show}>{!btn ? 'Open' : 'Close'}</button>
            {!btn ? <div>
            </div> : <div> 
                 <p>1</p>
                <p>2</p>
                <p>3</p></div>}
        </>
    )
}

export default Task23