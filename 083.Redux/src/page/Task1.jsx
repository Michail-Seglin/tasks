import React, { useState, useSelector } from "react";
import { useDispath } from 'react-redux'
import { countPlus } from "../slice/increment";

const Task1 = () => {
    const dispath = useDispath();
    const state = useSelector((state) => state.increment)

    return (
        <>

            <p></p>
            <button onClick={() => dispath(countPlus())}>count ++</button>
        </>
    )
}

export default Task1