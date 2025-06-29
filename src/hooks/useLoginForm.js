import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Cookies from "js-cookie";

export default function useLoginForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BACKEND_TOKOKU}/user/signin`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();

      if (response.ok) {
        const tokenBase64 = btoa(data.data.access_token);
        Cookies.set("authToken", tokenBase64, {
          expires: 7,
          secure: true,
          sameSite: "strict",
        });
        router.push("/home");
        setLoading(false);
      } else if (response.status === 401) {
        setError(data.message);
        setIsModalOpen(true);
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Error Login");
      }
      setIsModalOpen(true);
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setError(null);
  };

  return {
    formData,
    loading,
    error,
    isModalOpen,
    closeModal,
    handleChange,
    handleLogin,
  };
}
