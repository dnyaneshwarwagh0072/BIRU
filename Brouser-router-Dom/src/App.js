// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Curriculum from './components/Curriculum';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/curriculum' element={<Curriculum />} />
      </Routes>
    </>
  );
}

export default App;
