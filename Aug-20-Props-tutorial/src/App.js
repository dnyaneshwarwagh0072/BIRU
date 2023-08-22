// import logo from './logo.svg';
// import './App.css';
// import { add, Div } from './components/Calculator';


// function App() {
//   return (
//     <>
//       <ul>
//         <li>Sum = {add(5, 4)}</li>
//         <li>Sum = {Div(5, 4)}</li>
//       </ul>
//     </>
//   );
// }

// export default App;





// 2.....

import Comp1 from "./components/Comp1";


function App() {

  const imgsrc="https://i.pinimg.com/originals/11/7e/1c/117e1c5983ded256581c001476ec49a1.jpg";
  return (
    <>
      <Comp1 imgsrc={imgsrc}/>
    </>
  )
}
export default App;