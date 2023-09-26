// import { useContext } from "react";
// import { data } from "../App";

// const Data4 = () => {
//     const res = useContext(data);
//     return (
//         <>
//             <h1>Hello {res}</h1>
//         </>
//     )
// }
// export default Data4;







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