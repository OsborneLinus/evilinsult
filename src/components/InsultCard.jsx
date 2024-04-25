import useData from "./Fetch";
import decodeHtml from "./DecodeHTML";
import { CheckboxInput } from "./Checkbox";
import { useState } from "react";
import { Button } from "./Button";
import Countdown from "./Countdown";
import HeartIcon from "./HeartIcon";
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
  };

  if (startCountdown)
    if (loading || showCountdown) {
      return (
        <Countdown
          onCountdownEnd={handleCountdownEnd}
          startCountdown={startCountdown}
        />
      );
    }

  return (
    <>
      {showInfo ? (
        <>
          <Info>
            <CheckboxInput
              id="insult-consent"
              onChange={checkHandler}
              required
            />
          </Info>
        </>
      ) : (
        <div className="insult-card">
          <p className="insult-text">{decodedInsult}</p>
          <p className="non-apology">
            Hey, we warned you. Don't blame us, blame <br />
            <span className="a-hole">
              {!decodedAuthor == "" ? decodedAuthor : "an anonymous asshole"}
            </span>
          </p>
        </div>
      )}
      <Button
        disabled={!isChecked}
        onClick={handleInfoClick}
        className="insult-button"
      >
        INSULT ME <HeartIcon />
      </Button>
    </>
  );
}
