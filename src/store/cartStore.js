import { create } from "zustand";

export const useCartStore = create((set) => ({
  cart: [],
  fetchCart: async (userId) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BACKEND_TOKOKU}/cart?userId=${userId}`,
    );
    const data = await res.json();
    set({ cart: data.data });
  },
  addToCart: async (userId, productId, quantity = 1) => {
    await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_TOKOKU}/cart/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, productId, quantity }),
    });
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BACKEND_TOKOKU}/cart?userId=${userId}`,
    );
    const data = await res.json();
    set({ cart: data.data });
  },
  removeFromCart: async (userId, productId) => {
    await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_TOKOKU}/cart/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, productId }),
    });
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BACKEND_TOKOKU}/cart?userId=${userId}`,
    );
    const data = await res.json();
    set({ cart: data.data });
  },
}));
