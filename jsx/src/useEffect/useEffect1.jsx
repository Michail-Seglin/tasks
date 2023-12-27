import { useState, useEffect } from "react";

// 1. Форма ввода с использованием useState и useEffect: Создайте компонент React,
// который содержит форму с полем ввода и кнопкой "Отправить". Используйте хук
// useState для хранения значения введенного текста и хук useEffect для
// отслеживания изменений этого значения. При каждом изменении значения в
// поле ввода, выводить его в консоль с помощью useEffect.

const UseEff1 = () => {
    const [inpValue, setInpValue] = useState('');
    const inp = (e) => {
        setInpValue(e.target.value)
    }
    useEffect(() => {
        console.log(inpValue);
    }, [inpValue])
    return (
        <>
            <input onChange={inp}></input>
            <button>send</button>
        </>
    )
}

export default UseEff1