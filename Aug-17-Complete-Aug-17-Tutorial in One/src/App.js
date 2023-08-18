// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => { setTime(new Date(), 1000) })
  },);

  const f_name = "Dnyaneshwar";
  const l_name = 'wagh';
  const date = new Date().toLocaleDateString();
  return (
    <>
      <h1>{`Hello, My name is ${f_name} ${l_name}`}</h1>
      <p>Today's Date :{date}</p>
      <p>Time : {time.toLocaleTimeString()}</p>
    </>
  )
}

export default App;
