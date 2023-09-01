// // import logo from './logo.svg';
// import './App.css';
// import { useState } from 'react';




// // function App() {
// //   const [color, setColor] = useState('red');

// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <h3>My favorite Color is {color}</h3>
// //         <span>
// //           <button onClick={() => setColor('green')} > Green</button>
// //           <button onClick={() => setColor('blue')}>Blue</button>
// //           <button onClick={() => setColor('yellow')}>Yellow</button>
// //         </span>
// //       </header>
// //     </div >
// //   );
// // }





// // function App() {

// //   const [brand, setBrand] = useState('Ford');
// //   const [model, setModel] = useState('Mustang');
// //   const [year, setYear] = useState('1964');
// //   const [color, setColor] = useState('red');

// //   return (
// //     <>
// //       <h1>My {brand}</h1>
// //       <h5>It's {color} {model} from {year}</h5>
// //     </>
// //   )
// // }





// function App() {
//   const [car, setCar] = useState({
//     brand: 'Ford',
//     model: 'Mustang',
//     year: '1964',
//     color: 'red'
//   })

//   const updateColor = () => {
//     setCar(nana => {
//       return { ...nana, color: 'blue' }
//     })
//   }

//   return (
//     <>
//       <h1>My {car.brand}</h1>
//       <h4>It is {car.color} {car.model} since {car.year}</h4>
//       <button onClick={updateColor}>Blue</button>
//     </>
//   )
// }



// export default App;

import { useState } from "react";

function App() {
  const [inputValue1, setInputValue1] = useState({});
  // const [inputValue2, setInputValue2] = useState("");


  const handleSubmit = () => {

  }

  return (
    <>
      <h1>form</h1>
    
        <label>
          first name :
        </label>
        <input type="text" value={inputValue1.firstName} onChange={e => setInputValue1(e.target.value)} />
        <br />
        <label >
          last name:
        </label>
        <input type="text" value={inputValue2.lastName} onChange={e => setInputValue2(e.target.value)} />
        <button onClick={handleSubmit}>Submit</button>
      
      <h1>{inputValue1}</h1>
      {/* <h1>{inputValue2}</h1> */}
    </>
  )
}
export default App;




