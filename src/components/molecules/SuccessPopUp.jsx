import React from "react";

export default function SuccessPopUp() {
  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black/50 backdrop-blur-sm">
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
  );
}
