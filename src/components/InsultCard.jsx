import useData from "./Fetch";
import decodeHtml from "./DecodeHTML";
import { CheckboxInput } from "./Checkbox";
import { useState } from "react";
import { Button } from "./Button";

export default function InsultCard() {
  const { insult, author, loading } = useData();
  const decodedInsult = decodeHtml(insult);
  const decodedAuthor = decodeHtml(author);
  const [isChecked, setIsChecked] = useState(false);

  const checkHandler = () => {
    setIsChecked(!isChecked);
  };
  return (
    <>
      <div>
        <p>
          {decodedInsult}
          {decodedAuthor}
        </p>
        <Button disabled={!isChecked} onClick={() => window.location.reload()}>
          INSULT ME
        </Button>
        <CheckboxInput id="insult-consent" onChange={checkHandler} required />
      </div>
    </>
  );
}
