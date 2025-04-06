"use client";

import { useCartStore } from "@/store/cartStore";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function BottomNav() {
  const pathname = usePathname();
  const { cart } = useCartStore();
  return (
    <nav
      className="shadow-3xl fixed bottom-5 left-0 right-0 z-10 mx-auto flex max-w-xs justify-around gap-x-2 rounded-full bg-yellow-300 p-1 text-gray-600"
      // style={{ boxShadow: '0 -2px 6px rgba(0, 0, 0, 0.1)' }}
    >
      {pathname === "/home" ? (
        <Link href="/home" className="my-auto rounded-full bg-black p-3">
          <svg
            width="23"
            height="23"
            viewBox="0 0 21 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 20.3714V8.54286C0 8.12667 0.0931872 7.73238 0.279562 7.36C0.465937 6.98762 0.72275 6.68095 1.05 6.44L8.925 0.525714C9.38437 0.175238 9.90937 0 10.5 0C11.0906 0 11.6156 0.175238 12.075 0.525714L19.95 6.44C20.2781 6.68095 20.5354 6.98762 20.7217 7.36C20.9081 7.73238 21.0009 8.12667 21 8.54286V20.3714C21 21.0943 20.7427 21.7133 20.2282 22.2285C19.7137 22.7437 19.096 23.0009 18.375 23H14.4375C14.0656 23 13.7541 22.8738 13.503 22.6215C13.2519 22.3691 13.1259 22.0572 13.125 21.6857V15.1143C13.125 14.7419 12.999 14.43 12.747 14.1785C12.495 13.927 12.1835 13.8009 11.8125 13.8H9.1875C8.81562 13.8 8.50412 13.9262 8.253 14.1785C8.00187 14.4309 7.87587 14.7428 7.875 15.1143V21.6857C7.875 22.0581 7.749 22.3705 7.497 22.6228C7.245 22.8751 6.9335 23.0009 6.5625 23H2.625C1.90312 23 1.28537 22.7428 0.77175 22.2285C0.258125 21.7142 0.000875 21.0952 0 20.3714Z"
              fill="white"
            />
          </svg>
        </Link>
      ) : (
        <Link href="/home" className="my-auto p-3">
          <svg
            width="21"
            height="23"
            viewBox="0 0 21 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 20.3714V8.54286C0 8.12667 0.0931872 7.73238 0.279562 7.36C0.465937 6.98762 0.72275 6.68095 1.05 6.44L8.925 0.525714C9.38437 0.175238 9.90937 0 10.5 0C11.0906 0 11.6156 0.175238 12.075 0.525714L19.95 6.44C20.2781 6.68095 20.5354 6.98762 20.7217 7.36C20.9081 7.73238 21.0009 8.12667 21 8.54286V20.3714C21 21.0943 20.7427 21.7133 20.2282 22.2285C19.7137 22.7437 19.096 23.0009 18.375 23H14.4375C14.0656 23 13.7541 22.8738 13.503 22.6215C13.2519 22.3691 13.1259 22.0572 13.125 21.6857V15.1143C13.125 14.7419 12.999 14.43 12.747 14.1785C12.495 13.927 12.1835 13.8009 11.8125 13.8H9.1875C8.81562 13.8 8.50412 13.9262 8.253 14.1785C8.00187 14.4309 7.87587 14.7428 7.875 15.1143V21.6857C7.875 22.0581 7.749 22.3705 7.497 22.6228C7.245 22.8751 6.9335 23.0009 6.5625 23H2.625C1.90312 23 1.28537 22.7428 0.77175 22.2285C0.258125 21.7142 0.000875 21.0952 0 20.3714Z"
              fill="#797979"
              fillOpacity="0.5"
            />
          </svg>
        </Link>
      )}
      {pathname === "/search" ? (
        <Link href="/search" className="my-auto rounded-full bg-black p-3">
          <svg
            width="23"
            height="23"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 24L16.3333 16.3333M1 9.94444C1 11.119 1.23136 12.2821 1.68086 13.3673C2.13036 14.4525 2.7892 15.4386 3.61977 16.2691C4.45034 17.0997 5.43636 17.7585 6.52155 18.208C7.60674 18.6575 8.76984 18.8889 9.94444 18.8889C11.119 18.8889 12.2821 18.6575 13.3673 18.208C14.4525 17.7585 15.4386 17.0997 16.2691 16.2691C17.0997 15.4386 17.7585 14.4525 18.208 13.3673C18.6575 12.2821 18.8889 11.119 18.8889 9.94444C18.8889 8.76984 18.6575 7.60674 18.208 6.52155C17.7585 5.43636 17.0997 4.45034 16.2691 3.61977C15.4386 2.7892 14.4525 2.13036 13.3673 1.68086C12.2821 1.23135 11.119 1 9.94444 1C8.76984 1 7.60674 1.23135 6.52155 1.68086C5.43636 2.13036 4.45034 2.7892 3.61977 3.61977C2.7892 4.45034 2.13036 5.43636 1.68086 6.52155C1.23136 7.60674 1 8.76984 1 9.94444Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      ) : (
        <Link href="/search" className="my-auto p-3">
          <svg
            width="23"
            height="23"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 24L16.3333 16.3333M1 9.94444C1 11.119 1.23136 12.2821 1.68086 13.3673C2.13036 14.4525 2.7892 15.4386 3.61977 16.2691C4.45034 17.0997 5.43636 17.7585 6.52155 18.208C7.60674 18.6575 8.76984 18.8889 9.94444 18.8889C11.119 18.8889 12.2821 18.6575 13.3673 18.208C14.4525 17.7585 15.4386 17.0997 16.2691 16.2691C17.0997 15.4386 17.7585 14.4525 18.208 13.3673C18.6575 12.2821 18.8889 11.119 18.8889 9.94444C18.8889 8.76984 18.6575 7.60674 18.208 6.52155C17.7585 5.43636 17.0997 4.45034 16.2691 3.61977C15.4386 2.7892 14.4525 2.13036 13.3673 1.68086C12.2821 1.23135 11.119 1 9.94444 1C8.76984 1 7.60674 1.23135 6.52155 1.68086C5.43636 2.13036 4.45034 2.7892 3.61977 3.61977C2.7892 4.45034 2.13036 5.43636 1.68086 6.52155C1.23136 7.60674 1 8.76984 1 9.94444Z"
              stroke="#797979"
              strokeOpacity="0.5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      )}
      {pathname === "/cart" ? (
        <Link
          href="/cart"
          className="relative my-auto rounded-full bg-black p-3"
        >
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.4 18.4C17.1235 18.4 16.1 19.4235 16.1 20.7C16.1 21.31 16.3423 21.895 16.7737 22.3263C17.205 22.7577 17.79 23 18.4 23C19.01 23 19.595 22.7577 20.0263 22.3263C20.4577 21.895 20.7 21.31 20.7 20.7C20.7 20.09 20.4577 19.505 20.0263 19.0737C19.595 18.6423 19.01 18.4 18.4 18.4ZM0 0V2.3H2.3L6.44 11.0285L4.876 13.846C4.7035 14.168 4.6 14.5475 4.6 14.95C4.6 15.56 4.84232 16.145 5.27365 16.5763C5.70499 17.0077 6.29 17.25 6.9 17.25H20.7V14.95H7.383C7.30675 14.95 7.23362 14.9197 7.17971 14.8658C7.12579 14.8119 7.0955 14.7387 7.0955 14.6625C7.0955 14.605 7.107 14.559 7.13 14.5245L8.165 12.65H16.7325C17.595 12.65 18.354 12.167 18.745 11.4655L22.862 4.025C22.9425 3.841 23 3.6455 23 3.45C23 3.145 22.8788 2.85249 22.6632 2.63683C22.4475 2.42116 22.155 2.3 21.85 2.3H4.8415L3.7605 0M6.9 18.4C5.6235 18.4 4.6 19.4235 4.6 20.7C4.6 21.31 4.84232 21.895 5.27365 22.3263C5.70499 22.7577 6.29 23 6.9 23C7.51 23 8.09501 22.7577 8.52635 22.3263C8.95768 21.895 9.2 21.31 9.2 20.7C9.2 20.09 8.95768 19.505 8.52635 19.0737C8.09501 18.6423 7.51 18.4 6.9 18.4Z"
              fill="white"
            />
          </svg>
          {cart.totalItems > 0 && (
            <div className="absolute -right-1 -top-2 flex size-5 items-center justify-center rounded-full bg-red-500 text-xs font-semibold text-white">
              {cart.totalItems}
            </div>
          )}
        </Link>
      ) : (
        <Link href="/cart" className="relative my-auto p-3">
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.4 18.4C17.1235 18.4 16.1 19.4235 16.1 20.7C16.1 21.31 16.3423 21.895 16.7737 22.3263C17.205 22.7577 17.79 23 18.4 23C19.01 23 19.595 22.7577 20.0263 22.3263C20.4577 21.895 20.7 21.31 20.7 20.7C20.7 20.09 20.4577 19.505 20.0263 19.0737C19.595 18.6423 19.01 18.4 18.4 18.4ZM0 0V2.3H2.3L6.44 11.0285L4.876 13.846C4.7035 14.168 4.6 14.5475 4.6 14.95C4.6 15.56 4.84232 16.145 5.27365 16.5763C5.70499 17.0077 6.29 17.25 6.9 17.25H20.7V14.95H7.383C7.30675 14.95 7.23362 14.9197 7.17971 14.8658C7.12579 14.8119 7.0955 14.7387 7.0955 14.6625C7.0955 14.605 7.107 14.559 7.13 14.5245L8.165 12.65H16.7325C17.595 12.65 18.354 12.167 18.745 11.4655L22.862 4.025C22.9425 3.841 23 3.6455 23 3.45C23 3.145 22.8788 2.85249 22.6632 2.63683C22.4475 2.42116 22.155 2.3 21.85 2.3H4.8415L3.7605 0M6.9 18.4C5.6235 18.4 4.6 19.4235 4.6 20.7C4.6 21.31 4.84232 21.895 5.27365 22.3263C5.70499 22.7577 6.29 23 6.9 23C7.51 23 8.09501 22.7577 8.52635 22.3263C8.95768 21.895 9.2 21.31 9.2 20.7C9.2 20.09 8.95768 19.505 8.52635 19.0737C8.09501 18.6423 7.51 18.4 6.9 18.4Z"
              fill="#797979"
              fillOpacity="0.5"
            />
          </svg>
          {cart.totalItems > 0 && (
            <div className="absolute -right-1 -top-2 flex size-5 items-center justify-center rounded-full bg-red-500 text-xs font-semibold text-white">
              {cart.totalItems}
            </div>
          )}
        </Link>
      )}
      {pathname === "/transaction" ? (
        <Link href="/transaction" className="my-auto rounded-full bg-black p-3">
          <svg
            width="23"
            height="23"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_36_685"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="27"
              height="27"
            >
              <path
                d="M23.0833 2H3.91667C3.40834 2 2.92082 2.20193 2.56138 2.56138C2.20193 2.92082 2 3.40834 2 3.91667V23.0833C2 23.5917 2.20193 24.0792 2.56138 24.4386C2.92082 24.7981 3.40834 25 3.91667 25H23.0833C23.5917 25 24.0792 24.7981 24.4386 24.4386C24.7981 24.0792 25 23.5917 25 23.0833V3.91667C25 3.40834 24.7981 2.92082 24.4386 2.56138C24.0792 2.20193 23.5917 2 23.0833 2Z"
                fill="white"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.5833 17.9722L14.7778 20.5278L19.8889 14.1389M7.11108 7.75H19.8889M7.11108 12.8611H12.2222"
                stroke="black"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </mask>
            <g mask="url(#mask0_36_685)">
              <path
                d="M-1.83331 -1.83331H28.8334V28.8334H-1.83331V-1.83331Z"
                fill="white"
              />
            </g>
          </svg>
        </Link>
      ) : (
        <Link href="/transaction" className="my-auto p-3">
          <svg
            width="23"
            height="23"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_51_1985"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="27"
              height="27"
            >
              <path
                d="M23.0833 2H3.91667C3.40834 2 2.92082 2.20193 2.56138 2.56138C2.20193 2.92082 2 3.40834 2 3.91667V23.0833C2 23.5917 2.20193 24.0792 2.56138 24.4386C2.92082 24.7981 3.40834 25 3.91667 25H23.0833C23.5917 25 24.0792 24.7981 24.4386 24.4386C24.7981 24.0792 25 23.5917 25 23.0833V3.91667C25 3.40834 24.7981 2.92082 24.4386 2.56138C24.0792 2.20193 23.5917 2 23.0833 2Z"
                fill="white"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.5833 17.9722L14.7778 20.5278L19.8889 14.1389M7.11108 7.75H19.8889M7.11108 12.8611H12.2222"
                stroke="black"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </mask>
            <g mask="url(#mask0_51_1985)">
              <path
                d="M-1.83331 -1.83334H28.8334V28.8333H-1.83331V-1.83334Z"
                fill="#797979"
                fillOpacity="0.5"
              />
            </g>
          </svg>
        </Link>
      )}
      {pathname === "/profile" ? (
        <Link href="/profile" className="my-auto rounded-full bg-black p-3">
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.38889 5.11111C6.38889 3.75556 6.92738 2.45553 7.8859 1.49701C8.84442 0.53849 10.1444 0 11.5 0C12.8556 0 14.1556 0.53849 15.1141 1.49701C16.0726 2.45553 16.6111 3.75556 16.6111 5.11111C16.6111 6.46666 16.0726 7.76669 15.1141 8.72521C14.1556 9.68373 12.8556 10.2222 11.5 10.2222C10.1444 10.2222 8.84442 9.68373 7.8859 8.72521C6.92738 7.76669 6.38889 6.46666 6.38889 5.11111ZM6.38889 12.7778C4.69445 12.7778 3.06941 13.4509 1.87126 14.649C0.673113 15.8472 0 17.4722 0 19.1667C0 20.1833 0.403868 21.1584 1.12276 21.8772C1.84165 22.5961 2.81667 23 3.83333 23H19.1667C20.1833 23 21.1584 22.5961 21.8772 21.8772C22.5961 21.1584 23 20.1833 23 19.1667C23 17.4722 22.3269 15.8472 21.1287 14.649C19.9306 13.4509 18.3055 12.7778 16.6111 12.7778H6.38889Z"
              fill="white"
            />
          </svg>
        </Link>
      ) : (
        <Link href="/profile" className="my-auto p-3">
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.38889 5.11111C6.38889 3.75556 6.92738 2.45553 7.8859 1.49701C8.84442 0.53849 10.1444 0 11.5 0C12.8556 0 14.1556 0.53849 15.1141 1.49701C16.0726 2.45553 16.6111 3.75556 16.6111 5.11111C16.6111 6.46666 16.0726 7.76669 15.1141 8.72521C14.1556 9.68373 12.8556 10.2222 11.5 10.2222C10.1444 10.2222 8.84442 9.68373 7.8859 8.72521C6.92738 7.76669 6.38889 6.46666 6.38889 5.11111ZM6.38889 12.7778C4.69445 12.7778 3.06941 13.4509 1.87126 14.649C0.673113 15.8472 0 17.4722 0 19.1667C0 20.1833 0.403868 21.1584 1.12276 21.8772C1.84165 22.5961 2.81667 23 3.83333 23H19.1667C20.1833 23 21.1584 22.5961 21.8772 21.8772C22.5961 21.1584 23 20.1833 23 19.1667C23 17.4722 22.3269 15.8472 21.1287 14.649C19.9306 13.4509 18.3055 12.7778 16.6111 12.7778H6.38889Z"
              fill="#797979"
              fillOpacity="0.5"
            />
          </svg>
        </Link>
      )}
    </nav>
  );
}
