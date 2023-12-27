import { useContext, useState } from "react";
import myContext from "../context/context";

const UseContext2 = () => {
    const [value, getLang] = useState(myContext);

    const obj = {
        ru: 'привет',
        en: 'hi'
    }

    return (
        <>
            <button onClick={getLang}>en</button>
            <button onClick={getLang}>ru</button>
            <p>{obj[value]}</p>
        </>
    )
}

export default UseContext2
