// import logo from './logo.svg';
// import './App.css';

// import { useState } from 'react';

// function App() {
//   const [inc, setInc] = useState(0);

//   const onClick1 = () => {
//     setInc(inc + 1);
//   }

//   const onClick2 = () => {
//     if (inc >= 1) {
//       setInc(inc - 1)
//     } else {
//       alert("You reached to limit");
//     }
//   }

//   return (
//     <>
//       <h1>{inc}</h1>
//       <button onClick={onClick1}>Increment</button>
//       <button onClick={onClick2}>Decrement</button>
//     </>
//   );
// }

// export default App;








//  PROJECT 2 .....



// function App() {

//   return (
//     <>
//       d
//     </>
//   )
// }
// export default App;









// import React, { useState } from "react";

// const TodoList = () => {
//   const [todoText, setTodoText] = useState("");
//   const [todos, setTodos] = useState([]);

//   const addTodo = () => {
//     if (todoText.trim() === "") return;
//     setTodos([...todos, todoText]);
//     setTodoText("");
//   };

//   const deleteTodo = (index) => {
//     const updatedTodos = [...todos];
//     updatedTodos.splice(index, 1);
//     setTodos(updatedTodos);
//   };

//   return (
//     <div>
//       <h2>Todo List</h2>
//       <div>
//         <input
//           type="text"
//           value={todoText}
//           onChange={(e) => setTodoText(e.target.value)}
//         />
//         <button onClick={addTodo}>Add</button>
//       </div>
//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index}>
//             {todo}
//             <button onClick={() => deleteTodo(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TodoList;





// import { useState, useRef } from 'react';

// function App() {
//   const [item, setItem] = useState("");
//   const [itemArray, setItemArray] = useState([]);
//   const ref = useRef("");

//   const onClick = () => {
//     setItemArray((data) => {
//       setItem("");
//       return [...data, item];
//     });
//     ref.current.focus()
//   }

//   const removeItem = (idx) => {
//     const deletedItem = itemArray.filter((ele, id) => {
//       return idx != id;
//     })
//     setItemArray(deletedItem);
//   }

//   return (
//     <>
//       <h1>ToDo List</h1>
//       <input
//         type="text"
//         placeholder="add item"
//         value={item}
//         ref={ref}
//         onChange={(e) => setItem(e.target.value)}
//       />
//       <button onClick={onClick}>Add</button>

//       {
//         itemArray.map((e, idx) => {
//           return (
//             <>
//               <p key={idx}>
//                 <h4>{e}</h4>
//                 <button onClick={() => removeItem(idx)} >remove</button>
//               </p>
//             </>
//           )
//         })
//       }

//     </>
//   )
// }
// export default App;



import { useState, useRef } from 'react';
function App() {
  const [item, setItem] = useState("");
  const [itemList, setItemList] = useState([]);
  const ref = useRef(null);

  const onClick = () => {
    setItemList((list) => {
      return [...list, item];
    })
    ref.current.focus();
  }

  const deleteItem = (idx) => {
    const result = itemList.filter((ele, id) => {
      return idx != id;
    })
    setItemList(result);
  }

  return (
    <>
      <h1>ToDo List</h1>
      <input
        type="text"
        placeholder="Add item"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        ref={ref}
      />
      <button onClick={onClick}>Add</button>
      <h3>
        {
          itemList.map((ele, idx) => {
            return <p key={idx}>
              {ele}
              <button onClick={() => deleteItem(idx)}>delete</button>
            </p>
          })
        }
      </h3>
    </>
  )
}
export default App;








