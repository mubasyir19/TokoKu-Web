import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useState, useEffect } from "react";

export default function useAuthPayload() {
  const [payload, setPayload] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAndDecodePayload = async () => {
      setLoading(true);
      setError("error");
      try {
        const tokenAuth = Cookies.get("authToken");
        if (tokenAuth) {
          const jwtToken = atob(tokenAuth);
          const decodedPayload = jwtDecode(jwtToken);
          setPayload(decodedPayload);
        } else {
          setPayload(null);
        }
        setLoading(false);
      } catch (err) {
        setError(err);
        setPayload(null);
        setLoading(false);
      }
    };

    fetchAndDecodePayload();
  }, []);

  return { payload, loading, error };
}
