import { useState, useEffect } from "react";

export default function Countdown({ onCountdownEnd }) {
  const [count, setCount] = useState(3);

  useEffect(() => {
    if (count > 0) {
      const timerId = setTimeout(() => {
        setCount(count - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    } else {
      onCountdownEnd();
    }
  }, [count, onCountdownEnd]);

  return <div>{count}</div>;
}
