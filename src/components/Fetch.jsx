import { useState, useEffect } from "react";

export default function useData(triggerFetch) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [insult, setInsult] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    setLoading(true);
    let ignore = false;

    const fetchData = async () => {
      try {
        const proxyUrl = "https://api.allorigins.win/get?url=";
        const targetUrl =
          "https://evilinsult.com/generate_insult.php?lang=en&type=json";
        const finalUrl =
          proxyUrl + encodeURIComponent(targetUrl) + `&timestamp=${Date.now()}`;
        const response = await fetch(finalUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        if (!ignore) {
          const parsedData = JSON.parse(data.contents);
          const { insult, createdby } = parsedData;
          setInsult(insult);
          setAuthor(createdby);
          setLoading(false);
        }
      } catch (error) {
        setError("Oops, something went wrong!");
        setLoading(false);
      }
    };
    fetchData();

    return () => {
      ignore = true;
    };
  }, [triggerFetch]);
  return { insult, loading, author };
}
