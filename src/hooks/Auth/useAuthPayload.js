import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useState, useEffect } from "react";

export default function useAuthPayload() {
  const [payload, setPayload] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(true);
  const [errorAuth, setErrorAuth] = useState(null);

  useEffect(() => {
    const fetchAndDecodePayload = async () => {
      try {
        const tokenAuth = Cookies.get("authToken");
        if (tokenAuth) {
          const jwtToken = atob(tokenAuth);
          const decodedPayload = jwtDecode(jwtToken);
          setPayload(decodedPayload);
        } else {
          setPayload(null);
        }
      } catch (err) {
        setErrorAuth(err);
        setPayload(null);
      } finally {
        setLoadingAuth(false);
      }
    };

    fetchAndDecodePayload();
  }, [loadingAuth]);

  return { payload, loadingAuth, errorAuth };
}
