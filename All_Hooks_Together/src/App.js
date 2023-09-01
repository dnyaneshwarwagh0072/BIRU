// import Data from "./components/Data";
// import { useState } from 'react';



// function App() {
//     const [gtData, setGtData] = useState("");
//     const getData = (props) => {
//         setGtData(props);
//     }

//     return (
//         <>
//             <h1>My name is : {gtData }</h1>
//             <Data data={getData} />
//         </>
//     )
// }
// export default App;



// import { useMemo, useState } from "react";

// function App() {
//     const [add, setAdd] = useState(0);
//     const [sub, setSub] = useState(10);

//     const mul = () => {
//         console.log("****");
//         return add * 10;
//     }
//     const multi = useMemo(mul, [add]);

//     return (
//         <>
//             <h1>{multi}</h1>
//             <h1>{add}</h1>
//             <button onClickCapture={() => setAdd(add + 1)}>Addition</button>
//             <h1>{sub}</h1>
//             <button onClick={() => setSub(sub - 1)}>Substraction</button>
//         </>
//     )
// }
// export default App;


// import { createContext } from 'react';

// const data1 = createContext();
// const data2 = createContext();
// function App() {

//     const fname = "Dnyaneshwar";
//     const lname = "Wagh";
//     return (
//         <>
//             <data1.Provider value={fname}>
//                 <data2.Provider value={lname}>
//                     <Data1 />
//                 </data2.Provider>
//             </data1.Provider>
//         </>
//     )
// }

// export default App;
// export { data1, data2 };







// import { useState, useRef } from 'react';

// function App() {
//     const [input, setInput] = useState("");
//     const refHook = useRef("");
//     const style = () => {
//         // refHook.current.focus();
//         refHook.current.style.color = "red";
//     }

//     return (
//         <>
//             <form action="#">
//                 <input type="text" ref={refHook} onChange={(e) => setInput(e.target.value)} />
//                 <button onClick={style}>Click Here</button>
//             </form>
//         </>
//     )
// }
// export default App;



import Data1 from "./components/Data1";
import { useState } from "react";

function App() {
    const [getInputData, setGetInputData] = useState("");

    const getData = (props) => {
        setGetInputData(props);
        // console.log(props);
    }

    return (
        <>
            <h1> Name : {getInputData}</h1>
            <Data1 data={getData} />
        </>
    )
}
export default App;







