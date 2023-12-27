import { useState, useEffect } from "react";
import axios from "axios";
// 3. Запрос к API с использованием useState и useEffect: Создайте компонент, который
// выполняет запрос к API https://api.ipify.org/?format=json и отображает полученные
// данные в заголовок с использованием useEffect.

const UseEff3 = () => {

    const [data, setData] = useState('');

    async function getData() {
        const response = await axios.get('https://api.ipify.org/?format=json');
        setData(response.data.ip)
    }

    useEffect(() => {
       getData()
    })

    return (
        <>
            <h1>{data}</h1>
        </>
    )
}

export default UseEff3