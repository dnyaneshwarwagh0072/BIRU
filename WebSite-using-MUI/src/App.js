// import logo from './logo.svg';
// import ResponsiveAppBar from './components/ResponsiveAppBar';

// function App() {
//   return (
//     <>
//       {/* <ButtonUsage /> */}
//       <ResponsiveAppBar/>
//     </>
//   );
// }

// export default App;






// function App() {

//   let a = 0;
//   let b = 0;
//   for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//       a = a + i;
//     } else if (i % 2 === 1) {
//       b = b + i;
//     }
//   }
//   console.log(a);
//   console.log(b);

//   return (
//     <>
//       <h4>
//         Print TiGER for 10 times
//       </h4>
//     </>
//   )
// }
// export default App;






import './index.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  )
}
export default App;