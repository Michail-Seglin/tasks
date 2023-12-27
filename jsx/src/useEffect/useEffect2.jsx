import { useState, useEffect } from "react";

// 2. Счетчик с использованием useState и useEffect: Создайте компонент счетчика,
// который увеличивает значение счетчика на 1 каждую секунду с использованием
// useEffect.


const UseEff2 = () => {

    const [count, setCount] = useState(0);

    function timer() {
        setCount(count + 1)
    }

    useEffect(() => {
        const data = setInterval(timer, 1000);
        return () => { clearInterval(data) }
    })


    return (
        <>
            <p >{count}</p>
        </>
    )
}

export default UseEff2