// 3. По клику на кнопку собрать данные из input и проверить вводимую строку на
// почту
import React, { useState } from 'react';

function Task14() {
    const [email, setEmail] = useState('');
    const setInp = (event) => {
        setEmail(event.target.value)
    }

    const validator = () => {
        try {
            if (/^[a-zA-Z0-9-_]+@[a-z]{2,10}\.[a-z]{2,10}/gm.test(email)) throw new Error('incorrect email')
            alert('correcct')
        } catch (er) {
            console.log(er.message);
        }
    }

    return (
        <div>
            <input onChange={setInp} />
            <button >click me</button>
        </div>
    )
}

export default Task14