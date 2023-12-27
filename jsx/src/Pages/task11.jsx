// 1. На входе 2 статичные переменные пароля. По клику на кнопку необходимо
// реализовать метод валидации. Написать регулярное выражение: пароль от 8
// символов, содержит числа, буквы, !@#$%^&*+=
import { useState } from 'react'

function Task11() {
    const [inpPwd1, SetInpPwd1] = useState('');
    const [inpPwd2, SetInpPwd2] = useState('');

    function changePwd1(e) {
        SetInpPwd1(e.target.value)
    }
    function changePwd2(e) {
        SetInpPwd2(e.target.value)
    }

    function isValid() {
        try {
            if (inpPwd1 != inpPwd2) throw new Error('pwd is not equal')
            alert('true')
        } catch (er) {
            alert(er.message)
        }
    }
    return (
        <div>
            <input onChange={changePwd1} />
            <input onChange={changePwd2} />
            <button onClick={isValid}>click me</button>
        </div>
    )
}

export default Task11