import { useState, useEffect } from "react";

export default function Countdown({ onCountdownEnd, startCountdown }) {
  const [count, setCount] = useState(0);
  const array = ["Är du redo?", "Är du säker?", "Skyll dig själv!"];
  const flip = "flipcard";

  useEffect(() => {
    if (startCountdown && count < 3) {
      const timerId = setTimeout(() => {
        setCount(count + 1);
      }, 1000);
      return () => clearTimeout(timerId);
    } else if (count === 3) {
      onCountdownEnd();
    }
  }, [count, onCountdownEnd, startCountdown]);

  return (
    <div className={`flip ${count % 2 === 0 ? "" : "flipped"}`}>
      <div className={`flip ${count % 2 === 0 ? "" : "flipped"}`}>
        {array[count]}
      </div>
    </div>
  );
}
