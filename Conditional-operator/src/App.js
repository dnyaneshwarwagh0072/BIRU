// // import logo from './logo.svg';
// import './App.css';

// function App() {
//   const data = 'nana';
//   function Res1() {
//     if (data === 'nasxna') {
//       console.log(true);
//     } else {
//       console.log(false);
//     }
//   }

//   function Res2() {
//     data === 'nana' ? document.write(true) : document.write(false);
//   }


//   return (
//     <>
//       {/* <Res1 /> */}
//       <Res2 />
//     </>
//   );
// }

// export default App;






import Emoji from './components/Emoji'

function App() {

  return (
    <>
      <h3 className='heading_style'>🎰Welcome to <span style={{ color: 'blue' }}>Slot Machine Game</span> 🎰</h3>
      <Emoji x='😘' y='😘' z='😘' />
      <Emoji x='😍' y='😂' z='😊' />
      <Emoji x='🤷‍♀️' y='🤷‍♀️' z='🤷‍♀️' />
    </>
  )
}

export default App;  