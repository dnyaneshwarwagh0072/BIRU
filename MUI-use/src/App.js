// import logo from './logo.svg';
import './App.css';





// import { useState, useRef } from 'react';

// function App() {
//   const [item, setItem] = useState("");
//   const [itemArray, setItemArray] = useState([]);
//   const ref = useRef("");

//   const addItem = () => {
//     setItemArray((data) => {
//       return [...data, item];
//     })
//     ref.current.focus();
//     setItem("");
//   }

//   const deleteItem = (idx) => {
//     console.log(idx);
//     const res = itemArray.filter((e, i) => {
//       return idx != i;
//     });
//     setItemArray(res);
//   }

//   return (
//     <>
//       <h1>ToDo List</h1>
//       <input
//         type="text"
//         placeholder="Add item"
//         value={item}
//         ref={ref}
//         onChange={(e) => setItem(e.target.value)}
//       />
//       <button onClick={addItem}>Add</button>
//       <p>
//         {
//           itemArray.map((e, idx) => {
//             return (
//               <>
//                 <p key={idx}>{e}</p>
//                 <button onClick={() => deleteItem(idx)}>delete</button>
//               </>
//             )
//           })
//         }
//       </p>
//     </>
//   );
// }

// export default App;






import { useState, useRef } from 'react';
// import Button from '@mui/material/Button';
import Button from '@mui/material/Button';

function App() {
  const [item, setItem] = useState("");
  const [itemList, setItemList] = useState([]);
  const ref = useRef("");

  const addItem = () => {
    ref.current.focus();
    ref.current.value = "";
    setItemList((array) => {
      return [...array, item];
    })
  }

  const deleteItem = (idx) => {
    const deletedItem = itemList.filter((e, id) => {
      return idx !== id;
    });
    setItemList(deletedItem);
  }

  return (
    <>
      <h1>ToDo List</h1>
      <input
        type="text"
        placeholder="Add Item"
        onChange={(e) => setItem(e.target.value)}
        ref={ref}
      />
      <Button onClick={addItem}>Add</Button>
      <p>
        {
          itemList.map((ele, idx) => {
            return (
              <div id='arrayList'>
                <Button onClick={() => deleteItem(idx)}>Delete</Button>
                <p id='item-list' key={idx}>{`- ${ele}`}</p>
              </div>
            )
          })
        }
      </p>
    </>
  )
}
export default App;






// import Button from "./components/Button";
// import Navbar from './components/Navbar';

// function App() {

//   return (
//     <>
//       <Navbar />
//       <Button />
//     </>
//   )
// }
// export default App;



