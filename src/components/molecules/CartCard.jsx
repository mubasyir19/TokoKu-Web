"use client";

import { formatHarga } from "@/helpers/utils";
import useFetchDetailProduct from "@/hooks/Product/useFetchDetailProduct";
import { useCartStore } from "@/store/cartStore";
import Image from "next/image";
import React, { useState } from "react";

export default function CartCard({ productId, price, quantity, subTotal }) {
  const { dataProduct } = useFetchDetailProduct(productId);
  const [count, setCount] = useState(1);
  // const [totalPrice, setTotalPrice] = useState(0);

  const addCount = () => {
    setCount(count + 1);
  };

  const minCount = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div className="card my-4 w-full">
        <div className="flex items-center gap-x-4">
          {dataProduct?.photo ? (
            <Image
              src={dataProduct?.photo}
              width={84}
              height={84}
              alt="photo product"
              className="object-cover"
            />
          ) : (
            <div className="h-[84px] w-[84px] rounded-lg bg-[#D9D9D9]"></div>
          )}
          <div className="my-auto flex-1 text-sm">
            <div className="flex items-center justify-between">
              <div className="content w-3/4">
                <p className="font-semibold">{dataProduct?.name}</p>
                <p className="mt-1 text-[#797979]">
                  {formatHarga(dataProduct?.price)} {dataProduct?.unit}
                </p>
              </div>
              <div className="">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="red"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="mt-3 flex w-full items-center justify-between">
              <div className="flex gap-x-2">
                <button
                  onClick={minCount}
                  className="h-6 w-6 rounded-lg bg-[#EDEDED]"
                >
                  -
                </button>
                <p className="">{quantity}</p>
                <button
                  onClick={addCount}
                  className="h-6 w-6 rounded-lg bg-[#FFD600]"
                >
                  +
                </button>
              </div>
              <div className="">
                <p className="font-bold text-black">{formatHarga(subTotal)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}
