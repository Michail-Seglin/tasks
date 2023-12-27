import { useState, useEffect, useRef } from "react";

// 1. Создайте компонент, который при каждом клике на кнопку увеличивает размер
// шрифта текста в элементе на странице.

// const UseRef1 = () => {
//     const font = useRef(16);
//     const tag = useRef();

//     function size() {
//         font.current = font.current + 1;
//         tag.current.style.fontSize = `${font.current}px`;
//     }

//     return (
//         <>
//             <p ref={tag}>text</p>
//             <button onClick={size}>click</button>
//         </>
//     )
// }

// export default UseRef1

const UseRef1 = () => {
    const font = useRef(16);
    const tag = useRef();

    function size() {
        // font.current = font.current + 1;
        tag.current.style.fontSize = `${parseInt(tag.current.style.fontSize) + 10}px`;
    }

    function sizeMin() {
        tag.current.style.fontSize = `${parseInt(tag.current.style.fontSize) - 10}px`;
    }

    return (
        <>
            <p style={{ fontSize: '12px' }} ref={tag}>text</p>
            <button onClick={size}>click plus</button>
            <button onClick={sizeMin}>click minus</button>
        </>
    )
}

export default UseRef1
