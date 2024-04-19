import { useEffect, useState } from "react";

export default function useData() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  let [data, setData] = useState(null);
  const [insult, setInsult] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    setLoading(true);
    let ignore = false;

    try {
      const proxyUrl = "https://api.allorigins.win/get?url=";
      const targetUrl =
        "https://evilinsult.com/generate_insult.php?lang=en&type=json";
      const finalUrl =
        proxyUrl + encodeURIComponent(targetUrl) + `&timestamp=${Date.now()}`;
      fetch(finalUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          if (!ignore) {
            const parsedData = JSON.parse(data.contents);
            const { insult, createdby } = parsedData;
            setInsult(insult);
            setAuthor(createdby);
            setLoading(false);
          }
        })
        .catch((error) => {
          setError("Oops, something went wrong!");
          setLoading(false);
        });
    } catch (error) {
      setError("Oops, something went wrong!");
      setLoading(false);
    }

    return () => {
      ignore = true;
    };
  }, []);

  return { insult, loading, error, author };
}
