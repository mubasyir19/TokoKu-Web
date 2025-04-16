"use client";

import React, { useEffect, useState } from "react";

export default function useFetchProfile(username) {
  const [dataProfile, setDataProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchDataProfile() {
      setLoading(true);
      try {
        const fetchData = await fetch(
          `${process.env.NEXT_PUBLIC_API_BACKEND_TOKOKU}/user/profile/${username}`,
        );

        if (!fetchData.ok) {
          throw new Error(`HTTP error! status: ${fetchData.status}`);
        }

        const response = await fetchData.json();

        setDataProfile(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    if (username) {
      fetchDataProfile();
    } else {
      setLoading(false);
    }
  }, [username]);
  return { dataProfile, loading, error };
}
