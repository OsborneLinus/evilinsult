import useData from "./Fetch";
import decodeHtml from "./DecodeHTML";
import { CheckboxInput } from "./Checkbox";
import { useState } from "react";
import { Button } from "./Button";
import Countdown from "./Countdown";
import Info from "./Info";

export default function InsultCard() {
  const [triggerFetch, setTriggerFetch] = useState(false);
  const { insult, author, loading } = useData(triggerFetch);
  const decodedInsult = decodeHtml(insult);
  const decodedAuthor = decodeHtml(author);
  const [isChecked, setIsChecked] = useState(false);
  const [showCountdown, setShowCountdown] = useState(false);
  const [showInfo, setShowInfo] = useState(true);
  const [startCountdown, setStartCountdown] = useState(false);

  const checkHandler = () => {
    setIsChecked(!isChecked);
  };

  const handleCountdownEnd = () => {
    setShowCountdown(false);
    setStartCountdown(false);
  };

  const handleInfoClick = () => {
    setTriggerFetch((prev) => !prev);
    setShowInfo(false);
    setStartCountdown(true);
    setShowCountdown(true);
    setIsChecked(false);
  };
  console.log(triggerFetch);

  if (startCountdown)
    if (loading || showCountdown) {
      // This is added to make sure that the countdown is not being runned the first time you enter the page.
      return (
        <Countdown
          onCountdownEnd={handleCountdownEnd}
          startCountdown={startCountdown}
        />
      );
    }

  return (
    <div>
      {showInfo ? (
        <Info />
      ) : (
        <div class="insult-card">
          <p>{decodedInsult}</p>
          <p>{!decodedAuthor == "" ? decodedAuthor : "anonymous asshole"}</p>
        </div>
      )}
      <Button
        disabled={!isChecked}
        onClick={handleInfoClick}
        className="insult-button"
      >
        INSULT ME
      </Button>
      <CheckboxInput id="insult-consent" onChange={checkHandler} required />
    </div>
  );
}
