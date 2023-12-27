import { useState, useEffect, useRef } from "react";

// 4. Реализуйте компонент, который отслеживает количество кликов на кнопку с
// помощью useRef и выводит это число при каждом клике.


const UseRef3 = () => {
    const count = useRef(0);

    function change() {
        count.current.textContent = +count.current.textContent +1 ;

    }
    return (
        <>
            <p ref={count}>{count.current}</p>
            <button onClick={change}>Click me</button>
        </>
    )
}

export default UseRef3
