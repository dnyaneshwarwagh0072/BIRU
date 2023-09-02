// import logo from './logo.svg';
// import './App.css';
// import { useState } from 'react';

// function App() {
//   const [typed, setTyped] = useState('');
//   const [fullName, setFullName] = useState();

//   const inputEvent = (event) => {
//     setTyped(event.target.value);
//   }

//   const onSubmit = () => {
//     setFullName(typed);
//   }

//   return (
//     <>
//       <div>
//         <h1>HELLO, {fullName}</h1>
//         <input
//           type="text"
//           placeholder='Enter your name'
//           onChange={inputEvent}
//           value={typed}
//         /><br />
//         <button onClick={onSubmit}>Submit</button>
//       </div>
//     </>
//   );
// }

// export default App;



// import { useState } from 'react';

// function App() {
//   const [typed, setTyped] = useState('');
//   const [submit, setSubmit] = useState('');

//   const typedValue = (event) => {
//     setTyped(event.target.value);
//   }

//   const onSubmit = (e) => {
//     e.preventDefault();
//     setSubmit(typed);
//   }
//   return (
//     <>
//       <form action="#">
//         <h1>HELLO, {submit}</h1>
//         <div>
//           <input
//             type="text"
//             placeholder='Enter your name'
//             onChange={typedValue}
//             value={typed}
//           />
//           <button onClick={onSubmit}>SUBMIT</button>
//         </div>
//       </form>
//     </>
//   )
// }
// export default App;



// import { useState } from 'react';

// function App() {
//   const [name, setName] = useState('');
//   const [submitValue, setSubmitValue] = useState('');

//   const enteredValue = (e) => {
//     setName(e.target.value);
//   }
//   const onSubmit = () => {
//     setSubmitValue(name);
//   }

//   return (
//     <>
//       <form action="#">
//         <h1>Hello, {submitValue}</h1>
//         <input
//           type="text"
//           placeholder='Enter your name'
//           onChange={enteredValue}
//         />
//         <button onClick={onSubmit}>Submit</button>
//       </form>
//     </>
//   )
// }
// export default App;







// import { useState } from 'react';

// function App() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");

//   const [subVal_1, setSubVal_1] = useState("");
//   const [subVal_2, setSubVal_2] = useState("");

//   const inputValue_1 = (e) => {
//     setFirstName(e.target.value);
//   }
//   const inputValue_2 = (e) => {
//     setLastName(e.target.value);
//   }


//   const submitAllValue = (e) => {
//     e.preventDefault();
//     setSubVal_1(firstName);
//     setSubVal_2(lastName);
//   }

//   return (
//     <>
//       <form onClick={submitAllValue}>
//         <h1>HELLO, {subVal_1} {subVal_2}</h1>

//         <input
//           type="text"
//           placeholder="Username"
//           onChange={inputValue_1}
//           value={firstName}
//           name='username'
//         />
//         <br />

//         <input
//           type="text"
//           placeholder='Enter Password'
//           onChange={inputValue_2}
//           value={lastName}
//           name='password'
//         />
//         <br />

//         <button type='submit'>SUBMIT</button>
//       </form>
//     </>
//   )
// }

// export default App;




// import { useState } from 'react';

// function App() {
//   const [input_1, setInput_1] = useState("");
//   const [input_2, setInput_2] = useState("");
//   const [subVal_1, setSubVal_1] = useState("");
//   const [subVal_2, setSubVal_2] = useState("");

//   const value_1 = (e) => {
//     setInput_1(e.target.value);
//     console.log(e.target.value);
//   }
//   const value_2 = (e) => {
//     setInput_2(e.target.value);
//     console.log(e.target.value);
//   }

//   const submit = (e) => {
//     e.preventDefault();
//     setSubVal_1(input_1);
//     setSubVal_2(input_2);
//   }

//   return (
//     <>
//       <form onClick={submit}>
//         <h1>HELLO, {subVal_1} {subVal_2}</h1>
//         <input
//           type="text"
//           placeholder="Username"
//           onChange={value_1}
//           value={input_1}
//         /><br/>
//         <input
//           type="text"
//           placeholder="Password"
//           onChange={value_2}
//           value_2={input_2}
//         /><br/>
//         <button type='submit'>SUBMIT</button>
//       </form>
//     </>
//   )
// }

// export default App;




// import { useState } from 'react';

// function App() {
//   const [FullName, setFullName] = useState({
//     f_name: "",
//     l_name: ""
//   });

//   const inputValue = (e) => {
//     e.preventDefault();
//     const name = e.target.name;
//     const value = e.target.value;
//     console.log(name);
//     console.log(value);

//     setFullName(e);
//     // setFullName((data) => {
//     //   console.log(data);
//     // });
//   }

//   return (
//     <>
//       <form action="#">
//         <h1>HELLO, </h1>
//         <input
//           type="text"
//           placeholder='Username'
//           value={setFullName.f_name}
//           name='fname'
//           onChange={inputValue}
//         /><br />
//         <input
//           type="text"
//           placeholder='Password'
//           value={setFullName.l_name}
//           name='lname'
//           onChange={inputValue}
//         /><br />
//         <button>SUBMIT</button>
//       </form>
//     </>
//   )
// }
// export default App;












// // import logo from './logo.svg';
// import './App.css';
// import { useEffect, useState } from 'react';

// function App() {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     setTimeout(() => {
//       setCount(count => count + 1)
//     }, 1000);
//   },);

//   return (
//     <>
//       <h1>{count}</h1>
//     </>
//   );
// }

// export default App;





// import Child3 from "./components/Child3";
// import { createContext } from 'react';

// const data1 = createContext();
// const data2 = createContext();
// function App() {
//   const name = "Dnyaneshwar";
//   const sirName = "Wagh";
//   return (
//     <>
//       <data1.Provider value={name}>
//         <data2.Provider value={sirName}>
//           <Child3 />
//         </data2.Provider>
//       </data1.Provider>
//     </>
//   );
// }
// export default App;
// export { data1, data2 };







// import Child3 from "./components/Child3";
// import { createContext } from 'react';

// const data1 = createContext();
// const data2 = createContext();
// function App() {
//   const name = "Dnyaneshwar";
//   const sirName = "Wagh";

//   return (
//     <>
//       <data1.Provider value={name}>
//         <data2.Provider value={sirName}>
//           <Child3 />
//         </data2.Provider>
//       </data1.Provider>
//     </>
//   )
// }
// export default App;
// export { data1, data2 };








// import { useState } from 'react';

// function App() {
//   const [name, setName] = useState("");
//   const [handle, setHandle] = useState();

//   const onChange = (e) => {
//     setName(e.target.value);
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setHandle(name);
//   }
//   return (
//     <>
//       <form action="#">
//         <h1>Details : {handle}</h1>
//         <input
//           type="text"
//           onChange={onChange}
//         />
//         <button onClick={handleSubmit}>SUBMIT</button>
//       </form>
//     </>
//   );
// }
// export default App;





/// FOR FORM ....BELLOW...


import Form from './components/Form';

function App() {
  
  return (
    <>
      <Form />
    </>
  )
}

export default App;

