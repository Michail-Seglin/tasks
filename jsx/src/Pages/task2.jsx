// 
import React from "react";

const arr = [1, 2, 3, 4, 5];

const Task2 = () => {
    return (
        <div>
            {arr.map((el) => {
                <h1>{Math.sqrt(el)}</h1>
            })}
        </div>
    )
}

export default Task2;