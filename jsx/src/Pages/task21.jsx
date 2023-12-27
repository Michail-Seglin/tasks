import React, { useState } from "react";
import style from './style.module.css'
// у тебя есть кнопка с названием ,
// ,добавить цвет,,. по клику на кнопку твоя задача поменять цвет шрифта h1. при повторном клике цвет вернуть в первоначальное состояние 

function Task21() {

    const [flag, setFlag] = useState(false);

    function show() {
        if (flag == true) {
            setFlag(false)
        } else {
            setFlag(true)
        }
    }

    return (
        <>
            <h1 className={flag == true ? style.text1 : style.text2}>Hi</h1>
            <button onClick={show}>Click me</button>
        </>
    )
}
export default Task21