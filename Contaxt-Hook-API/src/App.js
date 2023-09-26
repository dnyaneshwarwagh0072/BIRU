// import Data1 from "./components/Data1";
// import { createContext } from "react";
// import Data4 from 'react';

// const data = createContext();

// function App() {
//   const name = "the TiGER..";
//   return (
//     <>
//       <data.Provider value={name}>
//         <Data4 />
//       </data.Provider>
//     </>
//   )
// }
// export default App;
// export { data };






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