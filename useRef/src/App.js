// import logo from './logo.svg';
// import './App.css';
// import { useRef } from 'react';

// function App() {
//   let refValue = useRef(null);
//   function inputHandle() {
//     refValue.current.value = '1000'
//     // refValue.current.focus();
//     refValue.current.style.color='blue';
//     refValue.current.style.display='none';
//   }
//   return (
//     <div className="App">
//       <header className="App-header">
//         <input type="text" ref={refValue} />
//         <button onClick={inputHandle}>Click Here</button>
//       </header>
//     </div>
//   );
// }

// export default App;



// 2....

// import { useState, useRef, useEffect } from 'react';

// function App() {
//   let refValue = useRef(null);
//   function addValue() {
//     refValue.current.value = '234';
//     // value.current.style.color = 'red'
//   }

//   return (
//     <>
//       <input type="text" ref={refValue} />
//       <button onClick={addValue}>Click</button>
//     </>
//   )
// }
// export default App;





// import { useRef } from 'react';

// function App() {
// let refValue = useRef(null);

// function addValue() {
// refValue.current.value = 'abcd';
// refValue.current.style.color = 'blue';
// refValue.current.style.display='none';
//     refValue.current.focus();
//   }
//   return (
//     <>
//       <input type="text" ref={refValue} />
//       <button onClick={addValue}>Click here</button>
//     </>
//   )
// }
// export default App;





// import { useState, useEffect, useRef } from 'react';

// function App() {
//   const [inputValue, setInputValue] = useState("");
//   const refValue = useRef(0);

//   useEffect(() => {
//     refValue.current = refValue.current + 1;
//   });
//   }
//   return (
//     <>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)} />
//       <h1>Render Count: {refValue.current}</h1>
//     </>
//   )
// }

// export default App;






// import { useRef, useState, useEffect } from 'react';

// function App() {
//   const [inputValue, setInputValue] = useState("");
//   let refValue = useRef(0);

//   useEffect(() => {
//     refValue.current = refValue.current + 1;
//   })
//   return (
//     <>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       <h2>Counter : {refValue.current}</h2>
//     </>
//   )
// } export default App;






// import { useRef } from 'react';

// function App() {
//   let inputRef = useRef(null);

//   function focusFun() {
//     // inputRef.current.style.color = 'red'
//     inputRef.current.focus();
//   }

//   return (
//     <>
//       <input type="text" ref={inputRef} />
//       <button onClick={focusFun}>Click Here</button>
//     </>
//   )
// }
// export default App;






// import { useState, useRef, useEffect } from 'react';

// function App() {
//   const [inputValue, setInputValue] = useState("");
//   const previousInputValue = useRef("");

//   useEffect(() => {
//     previousInputValue.current = inputValue;
//   }, [inputValue]);
//   return (
//     <>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       <h2>Current Value : {inputValue}</h2>
//       <h2>PreviousInput Value : {previousInputValue.current}</h2>
//     </>
//   )
// }
// export default App;




// import { useRef } from 'react';
// function App() {
//   let refInput = useRef(null);

//   function blackTheme() {
//     // refInput.current.style.color = 'blue';
//     // refInput.current.style.display = 'none';
//     // refInput.current.focus();
//   }
//   return (
//     <>
//       <input type="text" ref={refInput} />
//       <button onClick={blackTheme} > Hide input box</button>
//     </>
//   )
// }
// export default App;



function App(){

  return(
    <>
    hlllll
    </>
  )
}
 export default App;