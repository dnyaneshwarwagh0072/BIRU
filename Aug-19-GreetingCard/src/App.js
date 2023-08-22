// import logo from './logo.svg';
// import './App.css';

// function App() {
//   const cssData={
//     color:'Blue',
//     backgroundColor:'yellow',
//     textAlign:'center',
//     margin:'40px',
//     border:'2px solid red',
//     borderRadius:'15px'
//   }
//   return (
//     <>
//       <h1 style={cssData}>TiGER</h1>
//     </>
//   );
// }

// export default App;



// 2...

// function App() {

//   let curTime = new Date();
//   curTime = curTime.getHours();

//   let greeting = "";
//   const cssStyle = {};

//   if (curTime > 1 && curTime < 12) {
//     greeting = 'Good Morning';
//     cssStyle.color = 'Green';
//   } else if (curTime >= 12 && curTime <= 15) {
//     greeting = 'Good Afternoon';
//     cssStyle.color = 'yellow';
//   } else if (curTime >= 15 && curTime <= 19) {
//     greeting = 'Good Evening';
//     cssStyle.color = 'red';
//   } else {
//     greeting = 'Good Night';
//     cssStyle.color = 'black';
//   }


//   console.log(curTime)
//   return (
//     <>
//       <h1>Hello TiGER.. <span style={cssStyle}>{greeting}</span></h1>
//     </>
//   )
// }
// export default App;





function App() {

  let currentTime = new Date();
  currentTime = currentTime.getHours();

  let greeting = "";
  const cssStyle = {};

  if (currentTime > 1 && currentTime < 12) {
    greeting = 'Good Morning';
    cssStyle.color = 'green';
  } else if (currentTime >= 12 && currentTime < 15) {
    greeting = 'Good Afternoon';
    cssStyle.color = 'yellow';
  } else if (currentTime >= 15 && currentTime <= 19) {
    greeting = 'Good Evening';
    cssStyle.color = 'orange';
  } else {
    greeting = 'Good Night';
    cssStyle.color = 'gray';
  }


  return (
    <>
        <h1>Hello TiGER <span style={cssStyle}>{greeting}</span></h1>
    </>
  )
}
export default App;