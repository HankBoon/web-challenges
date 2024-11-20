import ColoredNumber from "./ColoredNumber";
import { useState } from "react";

export default function Counter() {
  const [value, setValue] = useState(0);
  function handleIncrement(operator) {
    setValue(value + operator);
  }

  return (
    <div className="counter">
      <h1>Colored Number</h1>
      {/* <ColoredNumber value={0} /> */}
      <ColoredNumber value={value} />

      <div className="counter__buttons-container">
        <button
          onClick={() => handleIncrement(+1)}
          type="button"
          className="counter__button"
          aria-label="increment count"
        >
          +
        </button>
        <button
          onClick={() => handleIncrement(-1)}
          type="button"
          className="counter__button"
          aria-label="decrement count"
        >
          -
        </button>
      </div>
    </div>
  );
}
