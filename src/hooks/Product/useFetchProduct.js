import React, { useEffect, useState } from "react";

export default function useFetchProduct() {
  const [dataProduct, setDataProduct] = useState([]);

  useEffect(() => {
    async function fetchDataProduct() {
      const fetchData = await fetch(
        `${process.env.NEXT_PUBLIC_API_BACKEND_TOKOKU}/product`,
      );
      const response = await fetchData.json();
      setDataProduct(response.data);
    }

    fetchDataProduct();
  }, []);

  return dataProduct;
}
