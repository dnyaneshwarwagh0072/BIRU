// import { useState } from 'react';

// const Nana = ({ name, id }) => {
//     const [data, setData] = useState(false);
//     return (
//         <>
//             <div>
//                 <button onClick={() => setData(true)}>{id}</button>
//             <span>
//                 {
//                     data && <span>-{name}</span>
//                 }
//             </span>
//             </div>
//         </>
//     )
// }
// export default Nana;


import { useState } from "react";

const Nana = ({ id, name, education }) => {
    const [btn, setBtn] = useState(false);

    return (
        <>
            <div>
                <button onClick={() => setBtn(true)}>{id}</button>
                <span>
                    {
                        btn && <span>-{name} {education}</span>
                    }
                </span>
            </div>
        </>
    )
}
export default Nana; 