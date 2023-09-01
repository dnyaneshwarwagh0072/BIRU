// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

// function App() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     setTimeout(() => {
//       setCount(count => count + 1)
//     }, 1000)
//   },);

//   return (
//     <>
//       <h2>I Have Rendered {count} Times</h2>
//     </>
//   )
// }




// function App() {
//   const [count, setCount] = useState(0);
// console.log(count);
// console.log(setCount);
//   useEffect(() => {
//     setTimeout(() => {
//       setCount(count => count + 1)
//     }, 1000);
//   }, []);
//   return (
//     <>
//       <h1>Count : {count}</h1>
//     </>
//   )
// }





// function App() {
//   const [count, setCount] = useState(0);
//   const [calc, setCalc] = useState(0);

//   useEffect(() => {
//     setCalc(() => count * 3)
//   }, [count]);

//   return (
//     <>
//       <h2>Count : {count}</h2>
//       <button onClick={() => setCount(count => count + 1)}>+</button>
//       <h2>Calculation : {calc}</h2>
//     </>
//   )
// }







// function App() {
//   const [calculation, setCalculation] = useState(0);
//   const [mul, setMul] = useState(0);

//   useEffect(() => {
//     setMul(calculation * 3)
//   }, [calculation]);

//   return (
//     <>
//       <h1>Calculation : {calculation}</h1>
//       <button onClick={() => setCalculation(c => c + 1)}> +</button >
//       <h1>Multiplication : {mul}</h1>
//     </>
//   )
// }


function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount(count + 1)
    }, 2000);
    return () => clearTimeout(timer);
  }, [])

  return (
    <>
      <h1>Count : {count}</h1>
    </>
  )
}


export default App;
