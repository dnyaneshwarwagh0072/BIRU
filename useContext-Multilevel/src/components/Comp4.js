import { useContext } from "react";
import { data1, data2 } from "../App";

const Comp4 = () => {
    const firstName = useContext(data1);
    const lastName = useContext(data2);

    return (
        <>
            <h1>My name is {firstName} {lastName}</h1>
        </>
    )
}
export default Comp4;