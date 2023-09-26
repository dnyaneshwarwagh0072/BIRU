// // import logo from './logo.svg';
// // import './App.css';
// import { useState } from 'react';

// function App() {
//   const [num, setNum] = useState();
//   return (
//     <>
//       <h1>You Selected {num} number of given list</h1>
//       <select value={num} onClick={(e) => setNum(e.target.value)}>
//         <option value="1">1</option>
//         <option value="25">25</option>
//         <option value="3">3</option>
//         <option value="4">4</option>
//         <option value="5">5</option>
//       </select>
//     </>
//   );
// }

// export default App;



import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [num, setNum] = useState();

  useEffect(() => {
    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      console.log(res.data.name);
    }
    getData();
  });



  return (
    <>
      <h1>We entered {num} number</h1>
      <select value={num} onChange={(e) => setNum(e.target.value)}>
        <option value="1">1</option>
        <option value="25">25</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </>
  )
}
export default App;