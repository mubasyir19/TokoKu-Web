import { useEffect, useState } from "react";
import useAuthPayload from "../Auth/useAuthPayload";

export default function useFetchOrder() {
  const [dataOrder, setDataOrder] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { payload } = useAuthPayload();

  useEffect(() => {
    async function fetchDataOrder() {
      setLoading(true);
      try {
        const fetchData = await fetch(
          `${process.env.NEXT_PUBLIC_API_BACKEND_TOKOKU}/order/${payload?.id}`,
        );
        const response = await fetchData.json();
        console.log("res = ", response);
        setDataOrder(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchDataOrder();
  }, [payload]);
  return { dataOrder, loading, error };
}
