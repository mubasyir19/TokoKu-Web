import React, { useEffect, useState } from "react";

export default function useFetchProduct() {
  const [dataProduct, setDataProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchDataProduct() {
      setLoading(true);
      try {
        const fetchData = await fetch(
          `${process.env.NEXT_PUBLIC_API_BACKEND_TOKOKU}/product`,
        );
        if (!fetchData.ok) {
          throw new Error(`Server error: ${fetchData.status}`);
        }

        const response = await fetchData.json();
        setDataProduct(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchDataProduct();
  }, []);

  return { dataProduct, loading, error };
}
