import logo from './logo.svg';
import './App.css';
import { useState, useMemo } from 'react';

function App() {
  const [add, setAdd] = useState(0);
  const [sub, setSub] = useState(100);

  const result = useMemo(function mul() {
    console.log("***");
    return add * 10
  }, [add]);


  return (
    <>
      {result}
      <button onClick={() => setAdd(add + 1)}>Addition : {add}</button>
      <button onClick={() => setSub(sub - 1)}>Subtraction : {sub}</button>
    </>
  );
}

export default App;
