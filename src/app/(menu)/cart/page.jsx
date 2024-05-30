"use client";

import React, { useState } from "react";

export default function Cart() {
  const [count, setCount] = useState(1);

  const addCount = () => {
    setCount(count + 1);
  };

  const minCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="px-5 pt-5">
      {/* <p>This is Cart page</p> */}
      <h4 className="text-center text-2xl">My Cart</h4>
      <div className="mt-10">
        <div className="card my-4 flex justify-between">
          <div className="flex gap-x-4">
            <div className="my-auto h-[84px] w-[84px] rounded-lg bg-[#D9D9D9]"></div>
            <div className="my-auto text-sm">
              <p className="font-semibold">Product Name</p>
              <p className="mt-1 text-[#797979]">Rp12.000/pack</p>
              <p className="mt-3 font-bold">Rp120.000</p>
            </div>
          </div>
          <div className="my-auto flex gap-x-2">
            <button
              className="h-6 w-6 rounded-lg bg-[#EDEDED]"
              onClick={minCount}
            >
              -
            </button>
            <p className="">{count}</p>
            <button
              className="h-6 w-6 rounded-lg bg-[#FFD600]"
              onClick={addCount}
            >
              +
            </button>
          </div>
        </div>
        <hr />
        <div className="card my-4 flex justify-between">
          <div className="flex gap-x-4">
            <div className="my-auto h-[84px] w-[84px] rounded-lg bg-[#D9D9D9]"></div>
            <div className="my-auto text-sm">
              <p className="font-semibold">Product Name</p>
              <p className="mt-1 text-[#797979]">Rp12.000/pack</p>
              <p className="mt-3 font-bold">Rp120.000</p>
            </div>
          </div>
          <div className="my-auto flex gap-x-2">
            <button className="h-6 w-6 rounded-lg bg-[#EDEDED]">-</button>
            <p className="">10</p>
            <button className="h-6 w-6 rounded-lg bg-[#FFD600]">+</button>
          </div>
        </div>
        <hr />
        <div className="card my-4 flex justify-between">
          <div className="flex gap-x-4">
            <div className="my-auto h-[84px] w-[84px] rounded-lg bg-[#D9D9D9]"></div>
            <div className="my-auto text-sm">
              <p className="font-semibold">Product Name</p>
              <p className="mt-1 text-[#797979]">Rp12.000/pack</p>
              <p className="mt-3 font-bold">Rp120.000</p>
            </div>
          </div>
          <div className="my-auto flex gap-x-2">
            <button className="h-6 w-6 rounded-lg bg-[#EDEDED]">-</button>
            <p className="">10</p>
            <button className="h-6 w-6 rounded-lg bg-[#FFD600]">+</button>
          </div>
        </div>
        <hr />
        <div className="card my-4 flex justify-between">
          <div className="flex gap-x-4">
            <div className="my-auto h-[84px] w-[84px] rounded-lg bg-[#D9D9D9]"></div>
            <div className="my-auto text-sm">
              <p className="font-semibold">Product Name</p>
              <p className="mt-1 text-[#797979]">Rp12.000/pack</p>
              <p className="mt-3 font-bold">Rp120.000</p>
            </div>
          </div>
          <div className="my-auto flex gap-x-2">
            <button className="h-6 w-6 rounded-lg bg-[#EDEDED]">-</button>
            <p className="">10</p>
            <button className="h-6 w-6 rounded-lg bg-[#FFD600]">+</button>
          </div>
        </div>
        <hr />
      </div>
      <div className="mt-10 flex justify-between">
        <div className="my-auto">
          <p className="text-sm">Total</p>
          <p className="text-xl font-bold">Rp480.000</p>
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
