import { useState, useCallback } from "react";

// 3. Создайте компонент, который имеет кнопку "Изменить статус". При каждом клике
// на кнопку статус компонента должен меняться между "Активный" и "Неактивный".
// Используйте useCallback, чтобы оптимизировать функцию изменения статуса.

const UseCallback3 = () => {
    const [data, setData] = useState('Активный');
    const [flag, setFlag] = useState(true)

    const show = useCallback(function () {
        if (flag) {
            setData('Неактивный')
            setFlag(false)
        } else {
            setData('Aктивный')
            setFlag(true)
        }
    }, [flag])



    return (
        <>
            <p>{data}</p>
            <button onClick={show}>Click</button>
        </>
    )
}

export default UseCallback3
