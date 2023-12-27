import React, { useState } from "react";

// 6. Форма с использованием useState: Создайте компонент текстового поля, который
// позволяет пользователю вводить текст и проверять введенный текст регулярным
// выражением на почту. В заголовок отобразить true если введенная строка
// удовлетворяет регулярному выражению и false в противном случае

function Task35() {

    const [data1, setData1] = useState('');
    const [data2, setData2] = useState('');

    function emailValue(e) {
        setData1(e.target.value)
    }

    function checkValue() {
        const res = /^\w+@[a - z]+.[a - z]{ 2,}$/gm.test(data1);
        res ? setData2('true') : setData2('false')

    }

    return (<>
        <p>{data2}</p>
        <input type='text' onChange={emailValue} />
        <button onClick={checkValue}>check</button>
    </>)
}

export default Task35