import { useState, useMemo } from "react";
// 3. Создайте компонент для отображения списка чисел от 1 до N, где N - число,
// введенное пользователем с клавиатуры. Используйте useMemo, чтобы вычислить
// список чисел только при изменении N.
const UseMemo3 = () => {
    const [value, setValue] = useState();
    const [list, setList] = useState([]);

    function getList() {
        const arr = [];
        for (let i = 0; i < value; i++) {
            arr.push(1)
        }
        setList(arr)
    }

    return (
        <>
            {list.map((el, i) =>  <p key={i}>{el}</p> )}
            <input onChange={(e) => setValue(e.target.value)} />
            <button onClick={getList} />
        </>
    )
}

export default UseMemo3
