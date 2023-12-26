import { useState } from "react";

function Button() {
  const [count, setCount] = useState(0);
  console.log(useState(0));
  return (
    <button
      data-testid="button"
      onClick={() => setCount((prevCount) => prevCount + 1)}
    >
      {count}
    </button>
  );
}

export default Button;
