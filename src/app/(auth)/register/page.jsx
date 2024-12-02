import Link from "next/link";
import React from "react";

export default function Register() {
  return (
    <section className="relative">
      <div className="">
        <h2 className="text-2xl font-semibold text-black">Sign Up</h2>
        <p className="text-[#635C5C]">create account to continue</p>
      </div>
      <form className="mt-8 flex flex-col gap-y-4">
        <div className="form-group">
          <label htmlFor="" className="text-lg font-semibold text-black">
            Fullname
          </label>
          <input
            type="text"
            name="nama_pelanggan"
            className="w-full rounded-lg border-2 border-[#887E7E] p-4"
            placeholder="Enter your fullname"
          />
        </div>
        <div className="form-group">
          <label htmlFor="" className="text-lg font-semibold text-black">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="w-full rounded-lg border-2 border-[#887E7E] p-4"
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="" className="text-lg font-semibold text-black">
            Username
          </label>
          <input
            type="text"
            name="username"
            className="w-full rounded-lg border-2 border-[#887E7E] p-4"
            placeholder="Enter your username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="" className="text-lg font-semibold text-black">
            Phone Number
          </label>
          <input
            type="tel"
            name="no_telepon"
            className="w-full rounded-lg border-2 border-[#887E7E] p-4"
            placeholder="Enter your phone number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="" className="text-lg font-semibold text-black">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="w-full rounded-lg border-2 border-[#887E7E] p-4"
            placeholder="Enter your password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="" className="text-lg font-semibold text-black">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirm_password"
            className="w-full rounded-lg border-2 border-[#887E7E] p-4"
            placeholder="Enter your password"
          />
        </div>
        <div className="form-group">
          <button
            type="submit"
            className="w-full rounded-lg bg-[#FDE047] p-4 text-lg font-semibold"
          >
            Sign Up
          </button>
        </div>
      </form>
      <p className="mt-2 text-center">
        Already have account?{" "}
        <Link href="/login" className="font-semibold text-[#FDE047]">
          Sign In
        </Link>
      </p>
    </section>
  );
}
