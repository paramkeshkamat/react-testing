import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    // setCount((prev) => {
    //   if (prev === 0) return 0;
    //   else return prev - 1;
    // });
    setCount((prev) => prev - 1);
  };

  return (
    <div>
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={increment}>Inc</button>
      <button onClick={decrement} disabled={count === 0}>
        Dec
      </button>
    </div>
  );
}
