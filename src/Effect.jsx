import React, { useState, useEffect } from "react";

const Effect = () => {
  const [initial, final] = useState(0);
  const [initial1, final1] = useState(0);
  useEffect(() => {
    alert("you clicked me ");
  }, [initial]);

  const submit = () => {
    final(initial + 1);
  };
  const submit1 = () => {
    final1(initial1 + 1);
  };
  return (
    <>
      <button onClick={submit}>Click me{initial}</button>
      <button onClick={submit1}>Click me{initial1}</button>
    </>
  );
};

export default Effect;
