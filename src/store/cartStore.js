import { create } from "zustand";

export const useCartStore = create((set) => ({
  cart: [],
  fetchCart: async (userId) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BACKEND_TOKOKU}/cart?userId=${userId}`,
      {
        // headers: {
        //     Authorization: `Bearer ${token}`
        // }
      },
    );
    set({ cart: res.data });
  },
  addToCart: async (userId, productId, quantity = 1) => {
    await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_TOKOKU}/cart/add`, {
      method: "POST",
      body: JSON.stringify({ userId, productId, quantity }),
    });
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BACKEND_TOKOKU}/cart?userId=${userId}`,
    );
    set({ cart: res.data });
  },
  removeFromCart: async (userId, productId) => {
    await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_TOKOKU}/cart/delete`, {
      method: "DELETE",
      body: JSON.stringify({ userId, productId }),
    });
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BACKEND_TOKOKU}/cart?userId=${userId}`,
    );
    set({ cart: res.data });
  },
}));
