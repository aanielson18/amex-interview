import React, { useState } from "react";

function Input() {
  const [infoInit, setInfoInit] = useState(0);

  const increment = (num) => {
    let integerNum = parseInt(num, 10);
    setInfoInit(integerNum + 1);
  };

  const decrement = (num) => {
    let integerNum = parseInt(num, 10);
    setInfoInit(integerNum - 1);
  };

  return (
    <>
      <h1>Test Information</h1>
      <input
        type="number"
        defaultValue={0}
        value={infoInit}
        onChange={(e) => {
          setInfoInit(e.target.value);
        }}
      ></input>
      <button onClick={() => increment(infoInit)} label="Increase">
        /\
      </button>
      <button onClick={() => decrement(infoInit)} label="Decrease">
        \/
      </button>
    </>
  );
}

export default Input;
