import { Routes, Route } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <>
      <Menu />
      <div className="menu_css">
        <Routes >
          <Route exact path="/" Component={Home} />
          <Route exact path="/contact" Component={Contact} />
          <Route exact path="/about" Component={About} />
        </Routes>
      </div>
    </>
  );
}

export default App;
