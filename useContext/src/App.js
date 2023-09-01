// import logo from './logo.svg';
// import './App.css';
// import { createContext } from 'react';
// import ChildA from './components/ChildA';
// import { useState } from 'react';
// import ChildB from './components/ChildB';



// const data1 = createContext();
// const data2 = createContext();

// function App() {

//   const name = 'Nana'
//   const gender = 'Male'

//   return (
//     <>
//       <data1.Provider value={name}>
//         <data2.Provider value={gender}>
//           <ChildA />
//         </data2.Provider>
//       </data1.Provider>
//     </>
//   );
// }

// export default App;
// export { data1, data2 };  




import ChildComponent from "./components/ChildComponent.js";
import GrandChildComponent from "./components/GrandChildComponent.js";
import MyContext from "./components/MyContext.js";

function App() {
  const data = 'Hello TiGER';
  return (
    <MyContext.Provider value={data}>
      <ChildComponent />
      <br />
      <GrandChildComponent />
    </MyContext.Provider>
  );
}
export default App;