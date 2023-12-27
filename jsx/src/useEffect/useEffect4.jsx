import { useState, useEffect } from "react";
// import axios from "axios";
// 3. Запрос к API с использованием useState и useEffect: Создайте компонент, который
// выполняет запрос к API https://api.ipify.org/?format=json и отображает полученные
// данные в заголовок с использованием useEffect.

const UseEff4 = () => {

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const data = setInterval(() => {
            setDate(new Date())
        }, 1000);
        return () => clearInterval(data)
    }, [date])

    return (
        <>
            <h1>{JSON.stringify(date)}</h1>
        </>
    )
}

export default UseEff4