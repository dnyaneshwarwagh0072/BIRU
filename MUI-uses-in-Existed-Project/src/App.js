// // import logo from './logo.svg';
// // import './App.css';

// import { useState, useRef } from 'react';

// function App() {
//   const [item, setItem] = useState("");
//   const [itemList, setItemList] = useState([]);
//   const ref = useRef("");

//   const onChange = (e) => {
//     setItem(e.target.value);
//     // console.log(e.target.value);
//   }
//   const addItem = () => {
//     setItemList((data) => {
//       // console.log(data)
//       return [...data, item];
//     })
//     ref.current.focus();
//     setItem("");
//   }

//   const delItem = (idx) => {
//     const result = itemList.filter((e, id) => {
//       return idx != id;
//     });
//     setItemList(result);
//   }

//   return (
//     <>
//       <h2>ToDo List</h2>
//       <input
//         type="text"
//         placeholder="Add Item"
//         value={item}
//         onChange={onChange}
//         ref={ref}
//       />
//       <button onClick={addItem}>Add</button>
//       {
//         itemList.map((e, idx) => {
//           return (
//             <>
//               <p key={idx}>{e}</p>
//               <button onClick={() => delItem(idx)}>Delete Item</button>
//             </>
//           )
//         })
//       }
//     </>
//   );
// }

// export default App;





// import data from './components/Data'
// import { useState } from 'react';
// import Nana from './components/Nana';   

// function App() {
//   const [info, setInfo] = useState(data);
//   console.log(info);

//   return (
//     <>
//       <h1>Name :</h1>
//       {
//         info.map((ele, idx) => {
//           return <Nana key={idx} {...ele} />
//         })
//       }
//     </>
//   )
// }
// export default App;






import Data from './components/Data';
import { useState } from 'react';
import Nana from './components/Nana';
function App() {
  const [data, setDate] = useState(Data);
  console.log(Data);

  return (
    <>
      <h1>List of Name</h1>
      {
        data.map((e, id) => {
          return <Nana key={id} {...e} />
        })
      }
    </>
  )
}
export default App;



