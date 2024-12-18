import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
    const count1 = count;
    setCount(count1 + 1);
    const count2 = count;
    console.log(count2);
    setCount(count2 + 1);
  }

  return (
    <div className="counter">
      <h1>Count: {count}</h1>
      <button
        type="button"
        className="counter__button"
        onClick={handleIncrement}
      >
        Increment count by 3
      </button>
    </div>
  );
}
