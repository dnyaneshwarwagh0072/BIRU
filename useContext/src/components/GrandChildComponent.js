import MyContext from "./MyContext.js";
import { useContext } from "react";

const GrandChildComponent = () => {
    const myData = useContext(MyContext);
    return (
        <>
            {myData}
        </>
    )
}
export default GrandChildComponent;