"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitLogin = async () => {
    try {
      const response = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      });
    } catch (error) {}
  };

  return (
    <section>
      <Link href="/home" className="flex gap-x-2 text-black">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="my-auto"
        >
          <path
            d="M3.825 9L9.425 14.6L8 16L0 8L8 0L9.425 1.4L3.825 7H16V9H3.825Z"
            fill="black"
          />
        </svg>
        <span className="my-auto">Back to Home</span>
      </Link>
      <div className="flex h-screen items-center justify-center">
        <div className="">
          <Image
            src="/images/illustration.png"
            width={310}
            height={187}
            className="mx-auto"
            alt="illustration"
          />
          <form
            onSubmit={handleSubmitLogin}
            className="mt-8 flex flex-col gap-y-4"
          >
            <div className="mb-4 text-center">
              <h3 className="text-2xl font-semibold">Sign In</h3>
              <p className="text-[#887E7E]">Sign in to continue!</p>
            </div>
            <div className="form-group">
              <input
                type="text"
                name="username"
                onChange={(e) => setUsername(e.target.value)}
                className="w-full rounded-lg border-2 border-[#887E7E] p-4"
                placeholder="Username, email & phone number"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border-2 border-[#887E7E] p-4"
                placeholder="Password"
              />
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="w-full rounded-lg bg-[#FDE047] p-4 text-lg font-semibold"
              >
                Sign In
              </button>
            </div>
          </form>
          <p className="mt-2 text-center">
            Don&apos;t have account?{" "}
            <Link href="register" className="font-semibold text-[#FDE047]">
              Sign Up
            </Link>
          </p>
        </div>
        <div className="absolute inset-x-0 bottom-12 flex w-full gap-x-4 text-xs">
          <div className="my-auto h-1 w-full grow bg-gradient-to-l from-yellow-primary"></div>
          <div className="">
            <p>&copy;TokoKu</p>
          </div>
          <div className="my-auto h-1 w-full grow bg-gradient-to-r from-yellow-primary"></div>
        </div>
      </div>
    </section>
  );
}
