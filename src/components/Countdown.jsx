import { useState, useEffect } from "react";

export default function Countdown({ onCountdownEnd, startCountdown }) {
  const [count, setCount] = useState(0);
  const array = ["You ready?", "You sure??", "Suit yourself!"];

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
      <p className={`info-text ${count % 2 === 0 ? "" : "flipped"}`}>
        {array[count]}
      </p>
    </div>
  );
}
