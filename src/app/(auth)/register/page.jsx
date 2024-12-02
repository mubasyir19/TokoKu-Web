"use client";

import ErrorModals from "@/components/molecules/ErrorModals";
import LoadingModals from "@/components/molecules/LoadingModals";
import useRegisterForm from "@/hooks/useRegisterForm";
import Link from "next/link";
import React from "react";

export default function Register() {
  const {
    formData,
    loading,
    error,
    isModalOpen,
    closeModal,
    handleChange,
    handleRegister,
  } = useRegisterForm();

  return (
    <section className="relative">
      <div className="">
        <h2 className="text-2xl font-semibold text-black">Sign Up</h2>
        <p className="text-[#635C5C]">create account to continue</p>
      </div>
      <form className="mt-8 flex flex-col gap-y-4" onSubmit={handleRegister}>
        <div className="form-group">
          <label htmlFor="" className="text-base font-semibold text-black">
            Fullname
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-lg border border-[#887E7E] px-4 py-2"
            placeholder="Enter your fullname"
          />
        </div>
        <div className="form-group">
          <label htmlFor="" className="text-base font-semibold text-black">
            Username
          </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full rounded-lg border border-[#887E7E] px-4 py-2"
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="" className="text-base font-semibold text-black">
            Phone Number
          </label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full rounded-lg border border-[#887E7E] px-4 py-2"
            placeholder="Enter your phone number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="" className="text-base font-semibold text-black">
            Address
          </label>
          <input
            type="tel"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full rounded-lg border border-[#887E7E] px-4 py-2"
            placeholder="Enter your phone number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="" className="text-base font-semibold text-black">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full rounded-lg border border-[#887E7E] px-4 py-2"
            placeholder="Enter your password"
          />
        </div>
        {/* <div className="form-group">
          <label htmlFor="" className="text-base font-semibold text-black">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirm_password"
            className="w-full rounded-lg border border-[#887E7E] px-4 py-2"
            placeholder="Enter your password"
          />
        </div> */}
        <div className="form-group">
          <button
            type="submit"
            className="w-full rounded-lg bg-[#FDE047] p-4 text-base font-semibold"
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
      {loading && <LoadingModals />}
      {error && (
        <ErrorModals
          isOpen={isModalOpen}
          onClose={closeModal}
          title="An Error Occured"
        >
          <p>{error}</p>
        </ErrorModals>
      )}
    </section>
  );
}
