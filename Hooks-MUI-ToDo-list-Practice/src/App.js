// import { useState } from 'react';

// function App() {
//   const [input, setInput] = useState({
//     fname: "",
//     lname: "",
//     email: "",
//     contact: ""
//   })

//   const onChange = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     setInput((data) => {
//       return {
//         ...data,
//         [name]: value
//       }
//     });
//   }
//   const submit = (e) => {
//     e.preventDefault();
//     alert("Form Submitted");
//   }


//   return (
//     <>
//       <form onSubmit={submit}>
//         <h2>Name : {input.fname} {input.lname}</h2>
//         <h4>Contact : {input.contact}</h4>
//         <h6>Email : {input.email}</h6>
//         <input
//           type="text"
//           placeholder="First Name"
//           name='fname'
//           value={input.fname}
//           onChange={onChange}
//         />
//         <br />
//         <input
//           type="text"
//           placeholder="Last Name"
//           name='lname'
//           value={input.lname}
//           onChange={onChange}
//         />
//         <br />
//         <input
//           type="email"
//           placeholder="Email@"
//           name='email'
//           value={input.email}
//           onChange={onChange}
//         />
//         <br />
//         <input
//           type="phone"
//           placeholder="Mobile Number"
//           name='contact'
//           value={input.contact}
//           onChange={onChange}
//         />
//         <br />
//         <button>Submit</button>
//       </form>
//     </>
//   )
// }
// export default App;






// import { useState, useRef } from 'react';

// function App() {
//   const [item, setItem] = useState();
//   const [array, setArray] = useState([]);
//   const refer = useRef();

//   const inputValue = (e) => {
//     e.preventDefault();
//     setItem(e.target.value);
//   }

//   const addItem = (e) => {
//     e.preventDefault();
//     refer.current.focus();
//     setArray((data) => {
//       return [...data, item];
//     });
//     setItem("");
//   }

//   const deleteItem = (i) => {
//     const result = array.filter((ele, idx) => {
//       return i != idx;
//     });
//     setArray(result)
//   }

//   return (
//     <>
//       <h2>ToDo List</h2>
//       <input
//         type="text"
//         ref={refer}
//         placeholder="Add Item"
//         value={item}
//         onChange={inputValue}
//       />
//       <button onClick={addItem}>Add</button>
//       {
//         array.map((e, i) => {
//           return (
//             <>
//               <div>
//                 <button onClick={() => deleteItem(i)}>Delete</button>
//                 <span key={i}> {e}</span>
//               </div>
//             </>
//           )
//         })
//       }
//     </>
//   )
// }
// export default App;







import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Page rendered ${count} times`;
  });

  return (
    <>
      <button onClick={() => setCount(count + 1)}>+</button>
      <h2>{count}</h2>
    </>
  )
}
export default App;