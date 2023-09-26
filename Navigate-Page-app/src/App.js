import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Menu from './components/Menu';
import Service from './components/Service';

function App() {

  return (
    <>
      <Menu />
      <Routes>
        <Route exact path="/" Component={() => <Home text="Home" />} />
        <Route exact path="/contact" Component={() => <Contact text="Contact" />} />
        <Route exact path="/about" Component={() => <About text="About" />} />
        <Route path='/service/:fname/:lname' Component={() => <Service tex="Home" />} />
      </Routes>
    </>
  );
}

export default App;






// import DrawerAppBar from "./components/DrawerAppBar";

// function App() {

//   return (
//     <>
//       <DrawerAppBar />
//     </>
//   )
// }
// export default App;