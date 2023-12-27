// 4. По клику на кнопку собрать данные из двух input (2 разных state). Сравнить
// значения 2 input

import React, { useState } from "react";


function Task15() {

    const [inp1, setInp1] = useState('');
    const [inp2, setInp2] = useState('');

    function doInp1(e) {
        setInp1(e.target.value)
    }
    function doInp2(e) {
        setInp2(e.target.value)
    }

    function compare() {
        if (inp1 === inp2) {
            alert('true')
        } else alert('false')
    }

    return (
        <div>
            <input classname='inp1' onChange={doInp1} />
            <input classname='inp2' onChange={doInp2} />

            <button onClick={compare}>click me</button>
        </div>
    )
}

export default Task15