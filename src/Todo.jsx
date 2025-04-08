import React, { useState } from "react";

function Todo() {
  const [newtask, updatetask] = useState("");
  const [newtasks, upfinalname] = useState();
  const tasks = (event) => {
    updatetask(event.target.value);
  };

  const submit = () => {
    upfinalname(name);
  };
  return (
    <>
      <h1>Todo list</h1>
      <input type="text" placeholder="Add Task" onChange={tasks} />
      <button onClick={submit}>+</button>

      <ol>
        <li>{newtask}</li>
      </ol>
    </>
  );
}
export default Todo;
