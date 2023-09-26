// // import logo from './logo.svg';
// import './App.css';
// import { useState } from 'react';

// function App() {
//   const [counter, setCounter] = useState(5);

//   // function incNum() {
//   //   return (
//   //       setCounter(counter+1)
//   //   )
//   // }


//   return (
//     <>
//       <h1>{counter}</h1>
//       <button onClick={() => setCounter(counter - 1)}>Click Me</button>
//     </>
//   );
// }

// export default App;





// CURRENT PC TIME APP

// import { useState } from 'react';

// function App() {
//   let currentTime = new Date().toLocaleTimeString();
//   const [curTime, setCurTime] = useState(currentTime);

//   const getCurrentTime = () => {
//     currentTime = new Date().toLocaleTimeString();
//     setCurTime(currentTime);
//   }

//   return (
//     <>
//       <h1>{currentTime}</h1>
//       <button onClick={getCurrentTime}>Current Time</button>
//     </>
//   )
// }
// export default App;




// CURRENT / REAL TIME APP...


import { useState } from 'react';

function App() {
  let curTime = new Date().toLocaleTimeString();
  const [time, setTime] = useState(curTime);

  const currentTime = () => {
    let curTime = new Date().toLocaleTimeString();
    setTime(curTime);
  }

  setInterval(currentTime, 1000);

  return (
    <>
      <h1>{time}</h1>
    </>
  )
}
export default App;