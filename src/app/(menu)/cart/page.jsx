"use client";

import CartCard from "@/components/molecules/CartCard";
import { formatHarga } from "@/helpers/utils";
import useAuthPayload from "@/hooks/Auth/useAuthPayload";
import { useCartStore } from "@/store/cartStore";
import React, { useEffect } from "react";

export default function Cart() {
  const { payload } = useAuthPayload();
  const { cart, fetchCart, isLoading } = useCartStore();

  useEffect(() => {
    if (payload?.id) fetchCart(payload.id);
  }, [fetchCart, payload?.id]);

  return (
    <div className="px-5 pt-5">
      <h4 className="text-center text-2xl">My Cart</h4>
      <div className="mt-10">
        {isLoading ? (
          <div className="flex items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-t-2 border-yellow-500"></div>
          </div>
        ) : cart.totalItems > 0 ? (
          cart.items.map((item) => (
            <CartCard
              key={item.id}
              idCart={item.id}
              userId={payload?.id}
              productId={item.productId}
              quantity={item.quantity}
              subTotal={item.totalPrice}
            />
          ))
        ) : cart.totalItems === 0 ? (
          <p>Belum ada yang dimasukkan ke dalam keranjang</p>
        ) : null}
      </div>
      <div className="mt-10 flex justify-between">
        <div className="my-auto">
          <p className="text-sm">Total</p>
          <p className="text-xl font-bold">{formatHarga(cart.totalAmount)}</p>
        </div>
        <div className="my-auto">
          <button className="rounded-lg bg-yellow-300 px-4 py-2 font-semibold hover:bg-yellow-primary">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
