// import { useState } from 'react';

// function App() {
//   const [data, setData] = useState({
//     fname: "",
//     lname: "",
//     email: "",
//     contact: ""
//   });

//   const onChange = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     setData((preValue) => {
//       return {
//         ...preValue,
//         [name]: value
//       }
//     })
//   }

//   const onSubmit = (e) => {
//     e.preventDefault();
//     alert("Submitted");
//   }

//   return (
//     <>
//       <form onSubmit={onSubmit}>
//         <h1>Name :{data.fname} {data.lname}</h1>
//         <p>Email : {data.email}</p>
//         <h3>Contact no : {data.contact}</h3>
//         <input
//           type="text"
//           placeholder="Enter firstName"
//           name="firstName"
//           value={data.fname}
//           onChange={onChange}
//         /><br />
//         <input
//           type="text"
//           placeholder="Enter lastName"
//           name="lastName"
//           value={data.lname}
//           onChange={onChange}
//         /><br />
//         <input
//           type="Email"
//           placeholder="Email"
//           name="Email"
//           value={data.email}
//           onChange={onChange}
//         /><br />
//         <input
//           type="phoneNumber"
//           placeholder="Mobile number"
//           name="contactNumber"
//           value={data.contact}
//           onChange={onChange}
//         /><br /><br />
//         <button>Submit</button>
//       </form>
//     </>
//   );
// }

// export default App;







// import { useState } from 'react';

// function App() {
//   const [data, setData] = useState([]);
//   const [temp, setTemp] = useState();

//   const onChange = (e) => {
//     setData(e.target.value);
//   }
//   const onClick = (e) => {
//     e.preventDefault()
//     setTemp(data)
//   }

//   return (
//     <>
//       <h1>To-do List</h1><br />
//       <input type="text"
//         placeholder='Add items'
//         onChange={onChange} />
//       <button onClick={onClick}>+</button>

//       <ol>
//         <li>{temp}</li>
//       </ol>
//     </>
//   )
// }
// export default App;






// import { useState, useRef } from 'react';

// function App() {
//   const [items, setItems] = useState();
//   const [list, setList] = useState([]);
//   const reference = useRef("");

//   const onChange = (e) => {
//     setItems(e.target.value);
//   }

//   const onSubmit = () => {
//     setList((preValue) => {
//       return [...preValue, items];
//     });
//     reference.current.focus();
//     reference.current.value= '';
//   }

//   return (
//     <>
//       <form action="#" onSubmit={onSubmit}>
//         <h1>ToDo List</h1>
//         <input
//           type="text"
//           placeholder='Add Items'
//           onChange={onChange}
//           ref={reference}
//         />
//         <button>+</button>
//         <ul>
//           {
//             list.map((item) => {
//               return <li>{item}</li>
//             })
//           }
//         </ul>
//       </form>
//     </>
//   )
// }
// export default App;





// import { useState, useRef } from 'react';

// function App() {
//   const [items, setItems] = useState();
//   const [itemArray, setItemArray] = useState([]);
//   const refValue = useRef();

//   const onChange = (e) => {
//     setItems(e.target.value);
//   }

//   const onClick = () => {
//     setItemArray((oldItem) => {
//       return [...oldItem, items];
//     })
//     refValue.current.value = "";
//     refValue.current.focus();
//   }

//   return (
//     <form onClick={onClick}>
//       <h1>ToDo List</h1>
//       <input
//         type="text"
//         placeholder='add items'
//         onChange={onChange}
//         ref={refValue}
//       />
//       <button>+</button>
//       <ul>
//         {
//           itemArray.map((element) => {
//             return <li>{element}</li>
//           })
//         }
//       </ul>
//     </form>
//   )
// }
// export default App;





// import { useState, useRef } from 'react';

// function App() {
//   const [item, setItem] = useState();
//   const [added, setAdded] = useState([]);
//   const ref = useRef();

//   const onChange = (e) => {
//     setItem(e.target.value);
//   }

//   const onSubmit = () => {
//     setAdded((preValue) => {
//       console.log(preValue);
//       return [...preValue, item];
//     })
//     ref.current.value = "";
//   }

//   return (
//     <>
//       <form onSubmit={onSubmit}>
//         <h2>toDo List</h2>
//         <input
//           type="text"
//           placeholder='add Item'
//           onChange={onChange}
//           ref={ref}
//         />
//         <button>+</button>
//         <ol>
//           {
//             added.map((element) => {
//               return <li>{element}</li>
//             })
//           }
//         </ol>
//       </form>
//     </>
//   )
// }

// export default App;










///  FINALE APP IS DONE....below...







import { useState, useRef } from 'react';
function App() {
  const [item, setItem] = useState("");
  const [itemList, setItemList] = useState([]);
  const ref = useRef(null);

  const onClick = () => {
    setItemList((list) => {
      return [...list, item];
    })
    ref.current.focus();
  }

  const deleteItem = (idx) => {
    const result = itemList.filter((ele, id) => {
      return idx != id;
    })
    setItemList(result);
  }

  return (
    <>
      <h1>ToDo List</h1>
      <input
        type="text"
        placeholder="Add item"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        ref={ref}
      />
      <button onClick={onClick}>Add</button>
      <h3>
        {
          itemList.map((ele, idx) => {
            return <p key={idx}>
              {ele}
              <button onClick={() => deleteItem(idx)}>delete</button>
            </p>
          })
        }
      </h3>
    </>
  )
}
export default App;
















