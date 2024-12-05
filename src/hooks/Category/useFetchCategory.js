import React, { useEffect, useState } from "react";

export default function useFetchCategory() {
  const [dataCategory, setDataCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchDataCategory() {
      setLoading(true);
      try {
        const fetchData = await fetch(
          `${process.env.NEXT_PUBLIC_API_BACKEND_TOKOKU}/category`,
        );
        const response = await fetchData.json();
        setDataCategory(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchDataCategory();
  }, []);
  return { dataCategory, loading, error };
}
