import MyContext from "./MyContext.js";
import { useContext } from "react";

const ChildComponent = () => {
    const ContextData = useContext(MyContext);
    return (
        <>
            {ContextData}
        </>
    );
}
export default ChildComponent;