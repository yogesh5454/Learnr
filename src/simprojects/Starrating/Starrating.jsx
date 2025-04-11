import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Starrating = ({ noofstars = 10 }) => {
  const [rating, setrating] = useState(0);
  const [hover, sethover] = useState();

  function handleclick(getcurrentindex) {
    setrating(getcurrentindex);
  }
  function handlemouseenter(getcurrentindex) {
    sethover(getcurrentindex);
  }
  function handlemouseleave() {
    sethover(rating);
  }
  return (
    <>
      <style>
        {`.active {
  color: #fff700;
}

.inactive {
  color: #000000;
}`}
      </style>
      <div>
        {[...Array(noofstars)].map((_, index) => {
          index += 1;
          return (
            <FaStar
              key={index}
              className={index <= (hover || rating) ? "active " : "inactive"}
              onClick={() => handleclick(index)}
              onMouseEnter={() => handlemouseenter(index)}
              onMouseLeave={() => handlemouseleave()}
              size={40}
            />
          );
        })}
      </div>
    </>
  );
};
export default Starrating;
