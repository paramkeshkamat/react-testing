import { useState } from "react";

export default function Hello() {
  const [value, setValue] = useState("Hello World");

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={() => setValue("Bye World")}>Click</button>
    </div>
  );
}
