import { useState, useEffect, useRef } from "react";

// 2. Создайте компонент, который при фокусе на текстовом поле добавляет
// background (событие onFocus)

const UseRef2 = () => {

    const data = useRef();
    const arr = ['red', 'green', 'black']

    function color() {

        data.current.style.backgroundColor = arr[Math.round(Math.random() * 3)]
    }

    function color2() {
        data.current.style.backgroundColor = 'white';
    }

    return (
        <>
            <input ref={data} onFocus={color} onBlur={color2}></input>
        </>
    )
}

export default UseRef2
