// import logo from './logo.svg';
// import './App.css';
// import { useState, useRef } from 'react';

// function App() {
//   const [item, setItem] = useState("");
//   const [itemList, setItemList] = useState([]);
//   const ref = useRef("");


//   const addItem = () => {
//     setItemList((data) => {
//       return [...data, item]
//     });
//     ref.current.focus();
//     setItem("");
//   }

//   const deleteItem = (idx) => {
//     const result = itemList.filter((ele, id) => {
//       return idx !== id;
//     })
//     setItemList(result);
//   }

//   return (
//     <>
//       <h1>to list</h1>
//       <input
//         type="text"
//         placeholder='add item'
//         value={item}
//         ref={ref}
//         onChange={(e) => setItem(e.target.value)}
//       />
//       <button onClick={addItem}>Add</button>
//       <div>
//         {
//           itemList.map((e, idx) => {
//             return (
//               <>
//                 <div>
//                   <button onClick={() => deleteItem(idx)}>delete</button>
//                   <span key={idx}>{e}</span>
//                 </div>
//               </>
//             )
//           })
//         }
//       </div>
//     </>
//   );
// }

// export default App;







// import data from './components/Data';
// import { useState } from 'react';
// import ShowData from './components/ShowData';

// function App() {
//   const [array, setArray] = useState(data);
//   console.log(array);

//   return (
//     <>
//       {
//         array.map((ele, idx) => {
//           return <ShowData key={idx} {...ele} />
//         })
//       }
//     </>
//   )
// }
// export default App;










import { useState } from 'react';

function App() {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    contact: ""
  })

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((preData) => {
      return {
        ...preData,
        [name]: value
      }
    })
  }

  const submit = (e) => {
    e.preventDefault();
    alert("Form Successfully Submitted");
  }

  return (
    <>
      <form onSubmit={submit}>
        <h4>Full Name : {data.fname} {data.lname}</h4>
        <h5>Email : {data.email}</h5>
        <h6>Contact : {data.contact}</h6>
        <input
          type="text"
          placeholder="First name"
          name='fname'
          value={data.fname}
          onChange={onChange}
        /><br />
        <input
          type="text"
          placeholder="Last name"
          name='lname'
          value={data.lname}
          onChange={onChange}
        /><br />
        <input
          type="email"
          placeholder="Email@.gmail"
          name='email'
          value={data.email}
          onChange={onChange}
        /><br />
        <input
          type="contact"
          placeholder="Mobile number"
          name='contact'
          value={data.contact}
          onChange={onChange}
        /><br />
        <button>Submit</button>
      </form>
    </>
  )
}
export default App;