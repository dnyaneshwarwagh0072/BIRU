// import Data from './components/Data';

// function App() {

//   return (
//     <>
//       <Data imgsrc="https://img.freepik.com/free-photo/aerial-beautiful-shot-seashore-with-hills-background-sunset_181624-24143.jpg?w=740&t=st=1692607707~exp=1692608307~hmac=258bcd0d9c4592b71ddc7e103ab8d6c81344748739d8c3a04e65422977d08909" />
//     </>
//   )
// }
// export default App;





// function App() {
//   const arr = ['nana', 'yadav', 'wagh'];
//   const res = arr.map((e, idx, ar) => {
//     return idx + ":" + e;
//     // console.log(ar);
//   });
//   // console.log(res);

//   return (
//     <>
//       <h1>Arrow function</h1>
//     </>
//   )
// }
// export default App;






function App() {
  const arr = [
    { id: '1', name: 'Dnyaneshwar', education: 'Computer Science' },
    { id: '2', name: 'Rupali', education: 'Fashion Designer' }
  ];
  const result = arr.map((e, idx) => {
    return (
      `My name is ${e.name} and im a ${e.education} student`
    )
  });
console.log(result);

  return (
    <>
      <h5>
        {document.getElementById('root').innerHTML=result}
      </h5>
    </>
  )
}
export default App;