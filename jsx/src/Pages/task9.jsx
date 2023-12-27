// 4. У вас есть кнопка. После каждого нажатия менять ее цвет [‘red’, ‘white’, ‘blue’]
// рандомно

import React from "react";

const Task9 = () => {
    const colorArr = ['red', 'Golden', 'Emerald ', 'white', 'blue', 'Yellow', 'Orange', 'Purple', 'Black', 'Sand ']
    function swithColor(event) {

        const colorIndex = Math.round(Math.random() * colorArr.length)
        event.target.style.backgroundColor = colorArr[colorIndex];
    }

    return (
        <div>
            <button onClick={swithColor} style={{ backgroundColor: 'red' }}>
                button
            </button>
        </div >
    )
}

export default Task9;