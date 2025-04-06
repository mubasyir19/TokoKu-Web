"use client";

import { useEffect, useState } from "react";

export default function useFetchDetailProduct(id) {
  const [dataProduct, setDataProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    const fetchDetailProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BACKEND_TOKOKU}/product/detail/${id}`,
        );
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(
            errorData?.message ||
              `Failed to fetch product with ID: ${productId}`,
          );
        }
        const data = await response.json();
        setDataProduct(data.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDetailProduct();
  }, [id]);

  return { dataProduct, loading, error };
}
