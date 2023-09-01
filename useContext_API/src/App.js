

import Child3 from "./components/Child3";
import { createContext } from 'react';

const data1 = createContext();
const data2 = createContext();
function App() {
  const name = "Dnyaneshwar";
  const sirName = "Wagh";
  return (
    <>
      <data1.Provider value={name}>
        <data2.Provider value={sirName}>
          <Child3 />
        </data2.Provider>
      </data1.Provider>
    </>
  );
}
export default App;
export { data1, data2 };