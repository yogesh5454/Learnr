import React, { useEffect, useState } from "react";

const Randomcolor = () => {
  const [typeofcolor, settypeofcolor] = useState("hex");
  const [color, setcolor] = useState("");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  const createrandomhexcolor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexcolor = "#";
    for (let i = 0; i < 6; i++) {
      hexcolor += hex[randomColorUtility(hex.length)];
    }
    setcolor(hexcolor);
  };

  const createrandomrgbcolor = () => {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);
    setcolor(`rgb(${r}, ${g}, ${b})`);
  };

  useEffect(() => {
    if (typeofcolor === "hex") {
      createrandomhexcolor();
    } else {
      createrandomrgbcolor();
    }
  }, [typeofcolor]);

  return (
    <div
      style={{
        width: "600px",
        height: "400px",
        background: color,
        margin: "50px 20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <button onClick={() => settypeofcolor("hex")}>Set HEX Mode</button>
      <button onClick={() => settypeofcolor("rgb")}>Set RGB Mode</button>
      <button
        onClick={() =>
          typeofcolor === "hex"
            ? createrandomhexcolor()
            : createrandomrgbcolor()
        }
      >
        Generate Random Color
      </button>
      <div style={{ color: "#fff" }}>
        {typeofcolor === "hex" ? "HEX" : "RGB"}: {color}
      </div>
    </div>
  );
};

export default Randomcolor;
