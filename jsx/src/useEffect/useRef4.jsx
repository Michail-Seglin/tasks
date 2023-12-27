import { useState, useEffect, useRef } from "react";

// 5. Разработайте компонент, который позволяет пользователю изменять цвет фона
// элемента с помощью кнопок "Следующий цвет" и "Предыдущий цвет", используя
//  useRef.
const UseRef4 = () => {

    const [index, setIndex] = useState(0);

    const ref = useRef()
    const arr = useRef(['red', 'blue', 'green'])

    const nextColor = () => {
        if (index >= 0 && index < arr.current.length)
            ref.current.style.backgroundColor = arr.current[index]
    }

    return (
        <>
            <h1 ref={ref} style={{ backgroundColor: arr.current[0] }}>Look on background</h1>
            <button onClick={() => {
                setIndex(index + 1);
                nextColor()
            }}>'next color'</button>
            <button onClick={() => {
                setIndex(index - 1);
                nextColor();
            }}>'previous color'</button>
        </>
    )
}

export default UseRef4
