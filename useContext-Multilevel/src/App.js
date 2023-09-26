// import logo from './logo.svg';
// import './App.css';
import Comp4 from './components/Comp4';
import { createContext } from 'react';

const data1 = createContext();
const data2 = createContext();

function App() {
  const fname = "Nana";
  const lname = "Wagh";

  return (
    <>
      <data1.Provider value={fname}>
        <data2.Provider value={lname}>
          <Comp4 />
        </data2.Provider>
      </data1.Provider>
    </>
  );
}

export default App;
export { data1, data2 }