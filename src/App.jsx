import { useState } from "react";
import React from "react";
import "./App.css";

// function App() {
//   const state = useState;

//   const [count, setcount] = useState(0);

//   function increase() {
//     setcount(count + 1);
//   }

//   return (
//     <>
//       <h1>{count}</h1>
//       <button onClick={increase}>Click me</button>
//     </>
//   );
// }

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
export default App;
