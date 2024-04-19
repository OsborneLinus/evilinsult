import useData from "./Fetch";
import { useEffect } from "react";
import decodeHtml from "./DecodeHTML";
import { CheckboxInput } from "./Checkbox";
import { useState } from "react";
import { Button } from "./Button";
import Countdown from "./Countdown";
import Info from "./Info";

export default function InsultCard() {
  const { insult, author, loading } = useData();
  const decodedInsult = decodeHtml(insult);
  const decodedAuthor = decodeHtml(author);
  const [isChecked, setIsChecked] = useState(false);
  const [showCountdown, setShowCountdown] = useState(true);
  const [showInfo, setShowInfo] = useState(true);

  const checkHandler = () => {
    setIsChecked(!isChecked);
  };

  const handleCountdownEnd = () => {
    setShowCountdown(false);
  };

  useEffect(() => {
    if (localStorage.getItem("infoShown")) {
      setShowInfo(false);
    }
  }, []);

  const handleButtonClick = () => {
    localStorage.setItem("infoShown", "true");
    setShowInfo(false);
    setShowCountdown(true);
    setIsChecked(false);
  };

  if (showInfo) {
    return (
      <Info>
        <CheckboxInput id="insult-consent" onChange={checkHandler} required />
        <Button
          disabled={!isChecked}
          onClick={handleButtonClick}
          className="insult-button"
        >
          INSULT ME
        </Button>
      </Info>
    );
  }

  if (loading || showCountdown) {
    return <Countdown onCountdownEnd={handleCountdownEnd} />;
  }

  return (
    <div>
      <p>{decodedInsult}</p>
      <p>{!decodedAuthor == "" ? decodedAuthor : "anonymous asshole"}</p>
      <Button
        disabled={!isChecked}
        onClick={() => window.location.reload()}
        className="insult-button"
      >
        INSULT ME
      </Button>
      <CheckboxInput id="insult-consent" onChange={checkHandler} required />
    </div>
  );
}
