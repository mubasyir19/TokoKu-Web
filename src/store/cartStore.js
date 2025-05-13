import { getTokenCookies } from "@/helpers/token";
import { create } from "zustand";

export const useCartStore = create((set) => ({
  cart: {
    totalItems: 0,
    totalAmount: 0,
    items: [],
  },
  isLoading: false,
  fetchCart: async (userId) => {
    set({ isLoading: true });
    const jwtToken = getTokenCookies();
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BACKEND_TOKOKU}/cart?userId=${userId}`,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        },
      );
      const data = await res.json();
      set({ cart: data.data });
    } catch (error) {
      console.error("Fetch cart failed:", error);
    } finally {
      set({ isLoading: false });
    }
  },
  addToCart: async (userId, productId, quantity = 1) => {
    set({ isLoading: true });
    const jwtToken = getTokenCookies();
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_TOKOKU}/cart/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwtToken}`,
        },
        body: JSON.stringify({ userId, productId, quantity }),
      });
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BACKEND_TOKOKU}/cart?userId=${userId}`,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        },
      );
      const data = await res.json();
      set({ cart: data.data });
    } catch (error) {
      console.error("Fetch cart failed:", error);
    } finally {
      set({ isLoading: false });
    }
  },
  updateCartItem: async (userId, productId, quantity) => {
    set({ isLoading: true });
    const jwtToken = getTokenCookies();
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_TOKOKU}/cart/update`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwtToken}`,
        },
        body: JSON.stringify({ userId, productId, quantity }),
      });
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BACKEND_TOKOKU}/cart?userId=${userId}`,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        },
      );
      const data = await res.json();
      set({ cart: data.data });
    } catch (error) {
      console.error("Fetch cart failed:", error);
    } finally {
      set({ isLoading: false });
    }
  },
  removeFromCart: async (userId, idCart) => {
    set({ isLoading: true });
    const jwtToken = getTokenCookies();
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_TOKOKU}/cart/delete`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwtToken}`,
        },
        // body: JSON.stringify({ userId, productId }),
        body: JSON.stringify({ idCart }),
      });
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BACKEND_TOKOKU}/cart?userId=${userId}`,
      );
      const data = await res.json();
      set({ cart: data.data });
    } catch (error) {
      console.error("Remove item failed:", error);
    } finally {
      set({ isLoading: false });
    }
  },
}));
