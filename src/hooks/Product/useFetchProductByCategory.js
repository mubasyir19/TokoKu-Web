import React, { useEffect, useState } from "react";

export default function useFetchProductByCategory(category) {
  const [dataProductByCategory, setDataProductByCategory] = useState([]);

  useEffect(() => {
    async function fetchDataProductByCategory() {
      const fetchData = await fetch(
        `${process.env.NEXT_PUBLIC_API_BACKEND_TOKOKU}/product/category/${category}`,
      );
      const response = await fetchData.json();
      setDataProductByCategory(response.data);
    }

    fetchDataProductByCategory();
  }, [category]);
  return dataProductByCategory;
}
