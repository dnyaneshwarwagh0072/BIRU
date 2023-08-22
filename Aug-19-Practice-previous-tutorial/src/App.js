// // import logo from './logo.svg';
// import './App.css';
// import { useState, useEffect } from 'react';
// import Greeting from './components/Greeting';
// 
// import {Comp3} from "./components/Comp2";

// function App() {
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     setInterval(() => setTime(new Date(), 1000))
//   },)
//   return (
//     <>
//       <h1>Time : {time.toLocaleTimeString()}</h1>
//       <Greeting/>
//     </>
//   );
// }

// export default App;




import Comp1, { Comp3, bappu } from "./components/Comp1";
import Comp2 from "./components/Comp2";

function App() {

  return (
    <>
      <h1>Hello</h1>
      <Comp1 />
      <Comp2 />
      <h1>{Comp3()}</h1>
      <h2>{bappu()}</h2>
    </>
  )
}
export default App;