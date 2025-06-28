import { useEffect, useState } from "react";
import useAuthPayload from "../Auth/useAuthPayload";
import { getTokenCookies } from "@/helpers/token";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

export default function useFetchOrder() {
  const [dataOrder, setDataOrder] = useState([]);
  const [loadingOrder, setLoadingOrder] = useState(true);
  const [errorOrder, setErrorOrder] = useState(null);

  const { payload, loadingAuth, errorAuth } = useAuthPayload();

  useEffect(() => {
    async function fetchDataOrder() {
      const token = Cookies.get("authToken");

      if (token) {
        try {
          const jwtToken = atob(token);
          const decodeToken = jwtDecode(jwtToken);

          const fetchData = await fetch(
            `${process.env.NEXT_PUBLIC_API_BACKEND_TOKOKU}/order/${decodeToken.id}`,
            {
              headers: {
                Authorization: `Bearer ${jwtToken}`,
              },
            },
          );
          const response = await fetchData.json();
          console.log("res = ", response);
          setDataOrder(response.data);
        } catch (error) {
          setErrorOrder(error);
        } finally {
          setLoadingOrder(false);
        }
      } else {
        setErrorOrder("Silakan login terlebih dahulu");
        setLoadingOrder(false);
      }
    }

    fetchDataOrder();
  }, [payload, loadingAuth]);
  return { dataOrder, loadingOrder, errorOrder };
}
