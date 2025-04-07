import React, { useState } from "react";

function Events() {
  const color = "red";
  const [initial, final] = useState(color);
  const [button, newbutton] = useState("click me");
  const bgchange = () => {
    let newbg = "blue";
    final(newbg);
    newbutton("Changed now");
  };

  const bgback = () => {
    final(color);
    newbutton("original");
  };
  return (
    <>
      <div
        style={{
          backgroundColor: initial,
          textAlign: "center",
          height: "40px",
        }}
      >
        <button onClick={bgchange} onDoubleClick={bgback}>
          {button}
        </button>
      </div>
    </>
  );
}

export default Events;
