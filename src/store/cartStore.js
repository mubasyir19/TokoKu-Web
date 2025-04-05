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
  addToCart: async () => {},
}));
