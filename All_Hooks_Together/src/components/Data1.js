// import { useContext } from "react";
// import { data1, data2 } from "../App";

// const Data1 = () => {

//     const firstName = useContext(data1);
//     const lastName = useContext(data2);
//     return (
//         <>
//             <h2>My name is {firstName} {lastName}</h2>
//         </>
//     )
// }
// export default Data1;



import { useState } from 'react';

const Data1 = (props) => {
    const [inputValue, setInputValue] = useState("");

    const onSubmit = () => {
        props.data(inputValue);
    }

    return (
        <>
            <input
                type="text"
                placeholder="Enter your name"
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={onSubmit}>Submit</button>
        </>
    )
}
export default Data1;