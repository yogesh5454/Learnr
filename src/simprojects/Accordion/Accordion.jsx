{
  /*
  //this is for single selection
  import React, { useState } from "react";
import data from "./data";
const Accordion = () => {
  const [initial, setinitial] = useState(null);

  const singleselction = (getcurrentid) => {
    setinitial(getcurrentid === initial ? null : getcurrentid);
  };

  console.log(initial);

  return (
    <>
      <h1>Accordion project</h1>
      <div>
        {data.map((dataitems) => (
          <div onClick={() => singleselction(dataitems.id)}>
            <h3>{dataitems.question}</h3>
            <span>+</span>
            {initial === dataitems.id ? <div>{dataitems.answer}</div> : null}
          </div>
        ))}
      </div>
    </>
  );
};

export default Accordion;
*/
}
import React, { useState } from "react";
import data from "./data";
const Accordion = () => {
  const [initial, setinitial] = useState(null);
  const [multiselect, setmultiselect] = useState(false);
  const [multipleid, setmultipleid] = useState([]);
  const singleselction = (getcurrentid) => {
    setinitial(getcurrentid === initial ? null : getcurrentid);
  };

  const multiselection = (getcurrentid) => {
    let copymultipleid = [...multipleid];
    const findarrayindex = copymultipleid.indexOf(getcurrentid);

    if (findarrayindex === -1) copymultipleid.push(getcurrentid);
    else copymultipleid.splice(findarrayindex, 1);

    setmultipleid(copymultipleid);
  };
  console.log(initial, multipleid);

  return (
    <>
      <h1>Accordion project</h1>

      <button
        onClick={() => setmultiselect(!multiselect)}
        style={{
          padding: "10px 20px",
          background: "#614101",
          color: "#fff",
          fontWeight: "bold",
          fontSize: "20px",
          cursor: "pointer",
        }}
      >
        Enable multi selection
      </button>
      <div>
        {data.map((dataitems) => (
          <div
            onClick={
              multiselect
                ? () => multiselection(dataitems.id)
                : () => singleselction(dataitems.id)
            }
          >
            <div style={{ display: "flex" }}>
              <h3>{dataitems.question}</h3>
              <span>+</span>
            </div>
            {multiselect
              ? multipleid.indexOf(dataitems.id) !== -1 && (
                  <div>{dataitems.answer}</div>
                )
              : initial === dataitems.id && <div>{dataitems.answer}</div>}
          </div>
        ))}
      </div>
    </>
  );
};

export default Accordion;
