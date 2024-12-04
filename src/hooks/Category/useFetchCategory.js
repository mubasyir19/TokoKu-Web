import React, { useEffect, useState } from "react";

export default function useFetchCategory() {
  const [dataCategory, setDataCategory] = useState([]);

  useEffect(() => {
    async function fetchDataCategory() {
      const fetchData = await fetch(
        `${process.env.NEXT_PUBLIC_API_BACKEND_TOKOKU}/category`,
      );
      const response = await fetchData.json();
      setDataCategory(response.data);
    }

    fetchDataCategory();
  }, []);
  return dataCategory;
}
