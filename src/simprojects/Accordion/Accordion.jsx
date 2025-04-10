import React, { useState } from "react";
import data from "./data";
const Accordion = () => {
  const [initial, setinitial] = useState(null);

  const singleselction = () => {
    setinitial(getcurrentid);
  };
  return (
    <>
      <div>
        {data.map((dataitems) => (
          <div onClick={() => singleselction(dataitems.id)}>
            <h3>{dataitems.question}</h3>
            <span>+</span>
            {}
          </div>
        ))}
      </div>
    </>
  );
};

export default Accordion;
