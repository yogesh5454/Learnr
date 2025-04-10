import React, { useEffect, useState } from "react";
import axios from "axios";

const Fetchapi = () => {
  const [num, setnum] = useState();
  const [name, setname] = useState();
  const [moves, setmoves] = useState();

  const seloption = (events) => {
    setnum(events.target.value);
  };

  useEffect(() => {
    async function getapi() {
      const res = await axios.get(`https://pokeapi.co/api/v2/type/${num}`);

      setname(res.data.name);
      setmoves(res.data.moves.length);
    }
    getapi();
  });
  return (
    <>
      <h1>You choose {num}</h1>
      <h1>my skill is {name}</h1>
      <h1>i have {moves} moves</h1>

      <select value={num} onChange={seloption}>
        <option value="num">num</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
    </>
  );
};
export default Fetchapi;
