import React, { useState } from "react";

const Clock = () => {
  let time = new Date().toLocaleTimeString();
  const [currtime, newtime] = useState(time);
  const updatetime = () => {
    time = new Date().toLocaleTimeString();
    newtime(time);
  };
  setInterval(updatetime, 1000);
  return (
    <>
      <h1> {currtime} </h1>
    </>
  );
};

export default Clock;
