import { useState, useEffect } from "react";

export default function Countdown({ onCountdownEnd, startCountdown }) {
  const [count, setCount] = useState(3);

  useEffect(() => {
    if (startCountdown && count > 0) {
      const timerId = setTimeout(() => {
        setCount(count - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    } else if (count === 0) {
      onCountdownEnd();
    }
  }, [count, onCountdownEnd, startCountdown]);

  return <div>{count}</div>;
}
