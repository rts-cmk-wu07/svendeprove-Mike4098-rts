import axios from "axios";
import { useEffect, useState } from "react";

export default function Axios({ url, method = "GET", headers = {} }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(
    function () {
      //IIFE
      (async function () {
        if (!url) throw new Error(`Invalid url`);
        try {
          setLoading(true);
          const response = await axios({ url, method, headers });
          setData(response.data);
        } catch (error) {
          console.error(error);
          setError("Noget gik galt, prøv igen senere");
        } finally {
          setLoading(false);
        }
      })();
    },
    /* eslint-disable-next-line */
    [url]
  );

  return { data, loading, error };
}