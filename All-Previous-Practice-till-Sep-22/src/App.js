// import logo from './logo.svg';
// import './App.css';
// import { useState } from 'react';

// function App() {
//   const [input, setInput] = useState({
//     fname: "",
//     lname: "",
//     email: "",
//     contact: ""
//   });

//   const onchange = (e) => {
//     e.preventDefault();
//     const name = e.target.name;
//     const value = e.target.value;
//     setInput((data) => {
//       return {
//         ...data,
//         [name]: value
//       }
//     })

//   }

//   const submit = () => {
//     alert("form successfully submitted");
//   }
//   return (
//     <>
//       <h1> Full Name : {input.fname} {input.lname}</h1>
//       <h4>Email : {input.email}</h4>
//       <h4>Contact no : {input.contact}</h4>
//       <form onSubmit={submit}>
//         <input
//           type="text"
//           placeholder="Enter Name"
//           name="fname"
//           value={input.fname}
//           onChange={onchange}
//         /> <br />
//         <input
//           type="text"
//           placeholder="Enter SirName"
//           name="lname"
//           value={input.lname}
//           onChange={onchange}
//         /> <br />
//         <input
//           type="emil"
//           placeholder="email@.gmail.com"
//           name="email"
//           value={input.email}
//           onChange={onchange}
//         /> <br />
//         <input
//           type="phone number"
//           placeholder="Mobile Number"
//           name="contact"
//           value={input.contact}
//           onChange={onchange}
//         /> <br />
//         <button>SUBMIT</button>
//       </form>
//     </>
//   );
// }

// export default App;







// TODO LIST....

// import { useState } from 'react';

// function App() {
//   const [input, setInput] = useState();
//   const [listArray, setListArray] = useState([]);

//   const addItem = () => {
//     setListArray((data) => {
//       return (
//         [...data, input]
//       )
//     })
//   }

//   const deleteItem = (i) => {
//     const result = listArray.filter((ele, idx) => {
//       return i != idx;
//     });
//     setListArray(result);
//   }
//   return (
//     <>
//       <h2>TODO List</h2>
//       <input
//         type="text"
//         placeholder="Add Item"
//         onChange={(e) => setInput(e.target.value)}
//       />
//       <button onClick={addItem}>Add</button>
//       {
//         listArray.map((e, i) => {
//           return (
//             <>
//               <p key={i}>{e}</p>
//               <button onClick={() => deleteItem(i)}>DELETE</button>
//             </>
//           )
//         })
//       }
//     </>
//   )
// }
// export default App;





import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Contact from './components/Contact';
import About from './components/About';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='about' element={<About />} />
      </Routes>
    </>
  )
}
export default App;









