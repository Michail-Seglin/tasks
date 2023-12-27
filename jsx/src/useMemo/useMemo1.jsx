import { useState, useMemo } from "react";
// 1. Создайте компонент React, который отображает сумму двух чисел. Используй хук
// useState для хранения значений чисел и хук useMemo для кэширования
// результата суммы. При изменении значений чисел, сумма должна
// пересчитываться только тогда, когда необходимо

const UseMemo1 = () => {
    const [value1, setValue1] = useState();
    const [value2, setValue2] = useState();
    const [res, setRes] = useState();

    const calc = () => {
        setRes(value1 + value2);
    }

    useMemo(calc, [value1, value2]);

    return (
        <>
            <input onChange={(e) => setValue1(+e.target.value)} />
            <input onChange={(e) => setValue2(+e.target.value)} />
            <p>{res}</p>
        </>
    )
}

export default UseMemo1
