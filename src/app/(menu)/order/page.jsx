"use client";

import OrderCard from "@/components/molecules/OrderCard";
import { getTokenCookies } from "@/helpers/token";
import { formatHarga } from "@/helpers/utils";
import useAuthPayload from "@/hooks/Auth/useAuthPayload";
import useFetchProfile from "@/hooks/Auth/useFetchProfile";
import { useCartStore } from "@/store/cartStore";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function OrderPage() {
  const { cart } = useCartStore();
  const { payload } = useAuthPayload();
  const { dataProfile } = useFetchProfile(payload?.username);

  // const [address, setAddress] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");

  const [methodPayment, setMethodPayment] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const route = useRouter();

  const totalAmount = parseInt(localStorage.getItem("totalAmount"));
  const deliveryFee = 10000;
  const adminFee = 5000;
  const finalPrice = totalAmount + deliveryFee + adminFee;

  const handleCheckout = async () => {
    setLoading(true);
    const jwtToken = getTokenCookies();
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BACKEND_TOKOKU}/cart/checkout`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwtToken}`,
          },
          body: JSON.stringify({
            userId: payload?.id,
            address: dataProfile?.address,
            phoneNumber: dataProfile?.phoneNumber,
            methodPayment,
            admin_fee: adminFee,
            shipping_fee: deliveryFee,
            items: cart.items.map((item) => ({
              productId: item.productId,
              quantity: item.quantity,
              subTotal: parseInt(item.totalPrice),
            })),
            total_price: finalPrice,
          }),
        },
      );

      console.log("hasil checkout = ", response.data);

      if (!response.ok) throw Error("Gagal checkout");

      setShowSuccessPopup(true);
      setTimeout(() => {
        setShowSuccessPopup(false);
        route.push("/transaction");
      }, 2000);
    } catch (error) {
      alert("Checkout gagal");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative px-5 pb-40 pt-5">
      <button
        onClick={() => route.back()}
        className="absolute left-5 top-8 rounded-full bg-black p-2"
      >
        <Image
          src="/icons/arrow-left.svg"
          width={20}
          height={20}
          alt="arrow"
          className="h-4 w-4"
        />
      </button>
      <div className="py-4 text-center">
        <div className="text-xl font-semibold capitalize">Order</div>
      </div>
      <div className="mt-6 rounded-lg border border-gray-400 p-2">
        <p className="text-lg font-semibold text-black">Delivery Address</p>
        <hr className="my-1 bg-gray-500" />
        <div className="mt-4 rounded-lg bg-slate-100 p-2">
          <p className="text-base font-medium text-black">
            {dataProfile?.name}
          </p>
          <p className="mt-1 text-sm text-black text-opacity-50">
            {dataProfile?.address}
          </p>
        </div>
        <div className="mt-2">
          <button className="rounded-full bg-slate-100 px-4 py-1 text-xs">
            Edit Alamat
          </button>
        </div>
      </div>
      <div className="mt-6 rounded-lg border border-gray-400 p-2">
        <p className="my-2 text-lg font-semibold text-black">
          Shopping Summary
        </p>
        <hr className="my-1 bg-gray-500" />
        <div className="mt-4 flex flex-col gap-2">
          {cart.items.map((item) => (
            <OrderCard
              key={item.id}
              productName={item?.product?.name}
              subTotalProduct={item?.totalPrice}
              quantityProduct={item?.quantity}
              photoProduct={item?.product?.photo}
            />
          ))}
        </div>
      </div>
      <div className="mt-6 rounded-lg border border-gray-400 p-2">
        <p className="my-2 text-lg font-semibold text-black">Payment Summary</p>
        <hr className="my-1 bg-gray-500" />
        <div className="mt-4">
          <div className="mt-2 flex items-center justify-between">
            <p className="text-base text-black">Harga</p>
            <p className="text-base font-medium text-black">
              {formatHarga(totalAmount)}
            </p>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <p className="text-base text-black">Ongkos Kirim</p>
            <p className="text-base font-medium text-black">Rp 10.000</p>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <p className="text-base text-black">Biaya Admin</p>
            <p className="text-base font-medium text-black">Rp 5.000</p>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <p className="text-base font-semibold text-black">Total Akhir</p>
            <p className="text-base font-bold text-black">
              {formatHarga(finalPrice)}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-6 rounded-lg border border-gray-400 p-2">
        <p className="my-2 text-lg font-semibold text-black">Payment Method</p>
        <hr className="my-1 bg-gray-500" />
        <div className="mt-4">
          <div className="flex items-center gap-x-2">
            <input
              type="radio"
              id="cash"
              name="methodPayment"
              value="Cash"
              checked={methodPayment === "Cash"}
              onChange={(e) => setMethodPayment(e.target.value)}
            />
            <label htmlFor="cash">Cash</label>
          </div>
          <div className="flex items-center gap-x-2">
            <input
              type="radio"
              id="transfer"
              name="methodPayment"
              value="Transfer"
              checked={methodPayment === "Transfer"}
              onChange={(e) => setMethodPayment(e.target.value)}
            />
            <label htmlFor="transfer">Transfer</label>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <button
          onClick={handleCheckout}
          className="w-full rounded-lg bg-[#FFD600] py-4 font-semibold text-black"
        >
          Pesan Sekarang
        </button>
      </div>
      {showSuccessPopup && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          {/* Popup */}
          <div className="w-3/4 max-w-sm rounded-xl bg-white p-6 shadow-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#3AFD20"
              className="mx-auto size-36"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <p className="text-center text-xl font-semibold text-black">
              Pesanan berhasil di checkout
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
