import React, { useState } from "react";
import "./todo.css";
function Todo() {
  const [newtask, updatetask] = useState("");
  const [newtasks, upfinaltask] = useState([]);
  const tasks = (event) => {
    updatetask(event.target.value);
  };

  const submit = () => {
    upfinaltask((olditems) => {
      return [...olditems, newtask];
    });
    updatetask("");
  };

  const deltask = (index) => {
    upfinaltask((olditems) => olditems.filter((_, i) => i !== index));
  };
  return (
    <>
      <h1>Todo list</h1>
      <input
        type="text"
        placeholder="Add Task"
        value={newtask}
        onChange={tasks}
      />
      <button className="button" onClick={submit}>
        +
      </button>

      <ol>
        {newtasks.map((value, index) => {
          return (
            <>
              <li key={index}>
                {value} <button onClick={() => deltask(index)}>delete </button>
              </li>
            </>
          );
        })}
      </ol>
    </>
  );
}
export default Todo;
