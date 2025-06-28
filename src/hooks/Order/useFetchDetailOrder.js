import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";

export default function useFetchDetailOrder(orderCode) {
  const [dataOrder, setDataOrder] = useState({});
  const [loadingOrder, setLoadingOrder] = useState(true);
  const [errorOrder, setErrorOrder] = useState(null);

  useEffect(() => {
    // async function fetchDetailOrder(orderCode) {
    const fetchDetailOrder = async () => {
      const token = Cookies.get("authToken");

      if (token) {
        try {
          const jwtToken = atob(token);
          const decodeToken = jwtDecode(jwtToken);

          const fetchData = await fetch(
            `${process.env.NEXT_PUBLIC_API_BACKEND_TOKOKU}/order/detail/${decodeToken.id}/${orderCode}`,
            {
              headers: {
                Authorization: `Bearer ${jwtToken}`,
              },
            },
          );

          const response = await fetchData.json();
          setDataOrder(response.data);
        } catch (error) {
          setErrorOrder(error);
        } finally {
          setLoadingOrder(false);
        }
      } else {
        setError("Silakan login terlebih dahulu");
        setLoadingOrder(false);
      }
    };

    fetchDetailOrder();
  }, [orderCode]);

  return { dataOrder, loadingOrder, errorOrder };
}
