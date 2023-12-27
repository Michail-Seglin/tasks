import { useContext } from "react";
import myContext from "../context/context";

const UseContext1 = () => {
    const { id, name, email, pwd } = useContext(myContext);

    return (
        <>
            <p>{id}</p>
            <p>{name}</p>
            <p>{email}</p>
            <p>{pwd}</p>
        </>
    )
}

export default UseContext1
