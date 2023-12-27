import React, { useState } from "react";

// 5. Список задач с использованием useState: Создайте компонент списка задач,
// который позволяет пользователю добавлять и удалять задачи из списка.

function Task34() {
    let arr = ['1', '2', '3'];
    const [data, setData] = useState('');
    const [array, setArray] = useState(arr);

    function sost(e) {
        setData(e.target.value)
    }

    function push() {
        setArray([...array, data])
        setData('')
    }

    function del(e) {
        let res = array.filter((el) => el !== e.target.id)
        setArray(res)
    }

    return (<>
        <div>{array.map((el) => <div><span>{el}</span><button onClick={del} id={el}>del</button></div>)}</div>
        <input onChange={sost} value={data}></input>
        <button onClick={push}>dob</button>
    </>)
}

export default Task34