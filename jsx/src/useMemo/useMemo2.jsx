import { useState, useMemo } from "react";
// 2. Разработайте компонент, который выполняет факториал числа при вводе
// значения в текстовое поле. Используйте useMemo, чтобы кэшировать результаты
// вычислений для разных введенных значений и отображать их без повторных
// вычислений.
const UseMemo2 = () => {
    const [value, setValue] = useState(1);
    const [res, setRes] = useState();


    const getFact = (value) => {
        if (value === 1) return 1;
        return value * getFact(value - 1)
    }

    const showFact = () => {
        if (!value) return;
        const data = getFact(value);
        setRes(data)
    }

    useMemo(showFact, [value])

    return (
        <>
            <input onChange={(e) => setValue(+e.target.value)} />

            <h1>{res}</h1>
        </>
    )
}

export default UseMemo2
