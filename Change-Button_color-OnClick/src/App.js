// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let bgColor = 'gray';
  let name = 'Click Here'
  const [color, setColor] = useState(bgColor);
  const [changeName, setChangeName] = useState(name)

  const changeColor = () => {
    let newColor = 'yellow';
    let newName = 'Clicked';
    setColor(newColor);
    setChangeName(newName)
  }

  const dbClickColor = () => {
    setColor(bgColor);
    setChangeName('Double Clicked');
  }

  return (
    <>
      <div style={{ backgroundColor: color }}>
        <button onClick={changeColor} onDoubleClick={dbClickColor}>{changeName}</button>
      </div>
    </>
  );
}

export default App;
