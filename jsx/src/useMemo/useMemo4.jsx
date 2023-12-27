import { useState, useMemo } from "react";

// 4. Напишите программу, которая принимает строку от пользователя и выводит ее в
// обратном порядке. Используй хук useState для хранения строки и хук useMemo
// для кэширования результата.

const UseMemo4 = () => {
    const [value, setValue] = useState('');
    const [res, setRes] = useState('');

    const rev = () => {
        const str = value.split('').reverse().join('');
        setRes(str)
    }

    useMemo(rev,[value])

    return (
        <>
            <input onChange={(e) => setValue(e.target.value)}></input>
            
            <h1>{res}</h1>
        </>
    )
}

export default UseMemo4
