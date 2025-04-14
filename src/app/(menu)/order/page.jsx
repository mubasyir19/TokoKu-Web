"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function OrderPage() {
  const route = useRouter();
  return (
    <div className="relative p-5">
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
          <p className="text-base font-medium text-black">Mahdy Mubasyir</p>
          <p className="mt-1 text-sm text-black text-opacity-50">
            Jl. Kemangsari 1 Gg. H. Wahab 1 no.36A, Jatibening, Bekasi
          </p>
        </div>
      </div>
      <div className="mt-6 rounded-lg border border-gray-400 p-2">
        <p className="my-2 text-lg font-semibold text-black">
          Shopping Summary
        </p>
        <hr className="my-1 bg-gray-500" />
        <div className="mt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="size-16 bg-gray-400"></div>
              <div className="">
                <p className="text-base font-semibold text-black">Apel Fuji</p>
                <p className="mt-1 text-sm text-black">Quantity : 1</p>
              </div>
            </div>
            <p className="text-base font-semibold text-black">Rp 39.000</p>
          </div>
        </div>
      </div>
      <div className="mt-6 rounded-lg border border-gray-400 p-2">
        <p className="my-2 text-lg font-semibold text-black">Payment Summary</p>
        <hr className="my-1 bg-gray-500" />
        <div className="mt-4">
          <div className="mt-2 flex items-center justify-between">
            <p className="text-base text-black">Harga</p>
            <p className="text-base font-medium text-black">Rp 39.000</p>
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
            <p className="text-base font-bold text-black">Rp 54.000</p>
          </div>
        </div>
      </div>
    </div>
  );
}
