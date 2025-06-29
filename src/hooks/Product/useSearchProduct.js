import { useEffect, useState } from "react";

export default function useSearchProduct(keyword) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (keyword === "") {
      setResults([]);
      return;
    }

    const controller = new AbortController();

    const timeout = setTimeout(async () => {
      setLoading(true);
      try {
        const fetchData = await fetch(
          `${process.env.NEXT_PUBLIC_API_BACKEND_TOKOKU}/product/search?keyword=${keyword}`,
          { signal: controller.signal },
        );
        const result = await fetchData.json();
        console.log("ini hasil cari = ", result);
        setResults(result.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }, 500);

    return () => {
      clearTimeout(timeout);
      controller.abort();
    };
  }, [keyword]);

  return { results, loading, error };
}
