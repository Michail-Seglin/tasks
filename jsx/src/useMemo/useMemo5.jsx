import { useState, useMemo } from "react";
import axios from "axios";
// 5. Реализуйте компонент, который отображает IP-адрес пользователя. IP-адрес
// должен быть получен с использованием useMemo при монтировании
// компонента и кэширован для избегания повторных запросов к API при
// обновлении других частей компонента. https://api.ipify.org/?format=json

const UseMemo5 = () => {
    const [value, setValue] = useState('');
    async function show() {
        const res = await axios.get('https://api.ipify.org/?format=json')
        setValue(res.data.ip)
    }
    useMemo(show, [])
    
    return (
        <>
            <h1>{value}</h1>
        </>
    )
}

export default UseMemo5
