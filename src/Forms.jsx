import React, { useState } from "react";

function Forms() {
  const [name, updatename] = useState();
  const [finalname, upfinalname] = useState();
  const input = (event) => {
    updatename(event.target.value);
  };

  const submit = () => {
    upfinalname(name);
  };
  return (
    <>
      <h1>Hello{finalname}</h1>
      <input
        type="text"
        placeholder="Enter your Name"
        onChange={input}
        value={name}
      />
      <br />
      <button onClick={submit}>Submit</button>
    </>
  );
}
export default Forms;
