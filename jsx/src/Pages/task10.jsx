//1. Input c Локалью вида хх-ХХ
//2. По событию в инпуте onKeyUp выводить в консоль дату в введенном формате toLocaleDateString('xx-XX')
//3.newDate() вывести в консоль
import React from "react";

const Task10 = () => {
    function show(event) {
        if (event.key !== 'Enter') return;
        const inp = event.target.value;

        if (!/^[a-z]{2}-[A-Z]{2}/gm.test(inp)) {
            console.log('incorrect format');
            return
        }
        console.log(new Date().toLocaleDateString(inp, { month: 'long', day: '2-digit', year: 'numeric' }));
    }

    return (
        <div>
            <input onKeyUp={show} />
        </div >
    )
}

export default Task10;