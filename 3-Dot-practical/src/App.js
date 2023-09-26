// import './App.css';
// import { useState } from 'react';

// function App() {

//   const [data, setData] = useState({
//     fname: "",
//     lname: "",
//     email: "",
//     number: ""
//   });

//   const onchange = (e) => {
//     const value = e.target.value;
//     const name = e.target.name;
//     setData((previous) => {
//       if (name === 'fname') {
//         return {
//           fname: value,
//           lname: previous.lname,
//           email: previous.email,
//           number: previous.number
//         }
//       } else if (name === 'lname') {
//         return {
//           fname: previous.fname,
//           lname: value,
//           email: previous.email,
//           number: previous.number
//         }
//       } else if (name === 'email') {
//         return {
//           fname: previous.fname,
//           lname: previous.lname,
//           email: value,
//           number: previous.number
//         }
//       } else if (name === 'number') {
//         return {
//           fname: previous.fname,
//           lname: previous.lname,
//           email: previous.email,
//           number: value
//         }
//       }
//     })
//   }
//   const onSubmit = () => {
//     alert("Form Successfully Submitted");
//   }

//   return (
//     <>
//       <form onSubmit={onSubmit}>
//         <h1>Hello ! {data.fname} {data.lname}</h1>
//         <p>{data.email}</p>
//         <h3>Contact no : {data.number}</h3>
//         <input
//           type="text"
//           placeholder=' First Name'
//           name='fname'
//           value={data.fname}
//           onChange={onchange}
//         /><br />

//         <input
//           type="text"
//           placeholder='SirName'
//           name='lname'
//           value={data.lname}
//           onChange={onchange}
//         /><br />

//         <input
//           type="email"
//           placeholder='Enter mail'
//           name='email'
//           value={data.email}
//           onChange={onchange}
//         /><br />

//         <input
//           type="phoneNumber"
//           placeholder='Mobile Number'
//           name='number'
//           value={data.number}
//           onChange={onchange}
//         /><br />

//         <button>Submit</button>
//       </form>
//     </>
//   );
// }

// export default App;







// import { useState } from 'react';

// function App() {
//   // const arr = ['aanna', 'aakka', 'nana', 'maai', 'rupa', 'diu', 'pukya'];
//   // const arr1 = ['baba', 'kaka', 'mama', 'dada'];
//   // // const result = [...arr, ...arr1];
//   // const [first,...rem]=arr;
//   // console.log(first);
//   // console.log(rem);


//   const data = {
//     fname: "Dnyaneshwar",
//     lname: "Wagh"
//   }

//   const res = {
//     id: 1,
//     ...data,
//     age: 32,
//     bike: "GT-650"
//   }

//   console.log(res);

//   return (
//     <>
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
  });

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData((e) => {
      return {
        ...e,
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
        <h1>Hello : {data.fname} {data.lname}</h1>
        <p>E-mail : {data.email}</p>
        <h3>Contact no : {data.contact}</h3>
        <input
          type="text"
          placeholder='Enter Name'
          name='fname'
          value={data.fname}
          onChange={onChange}
        /><br />
        <input
          type="text"
          placeholder='SirName'
          name='lname'
          value={data.lname}
          onChange={onChange}
        /><br />
        <input
          type="email"
          placeholder='Email@'
          name='email'
          value={data.email}
          onChange={onChange}
        /><br />
        <input
          type="phone"
          placeholder='Mobile Number'
          name='contact'
          value={data.contact}
          onChange={onChange}
        /><br /><br />
        <button>Submit</button>
      </form>
    </>
  );
}

export default App;





