"use client";

import useAuthPayload from "@/hooks/Auth/useAuthPayload";
import useFetchProfile from "@/hooks/Auth/useFetchProfile";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Cookies from "js-cookie";
import { useAuth } from "@/hooks/Auth/useAuth";
import { UserCircleIcon } from "@heroicons/react/24/outline";

export default function Profile() {
  const [openPopUpLogout, setOpenPopUpLogout] = useState(false);
  const { payload } = useAuthPayload();
  const { dataProfile } = useFetchProfile(payload?.username);
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("authToken");
    router.push("/home");
  };

  if (!isLoggedIn) {
    return (
      <div className="px-5 text-center">
        <div className="">
          <h1 className="mt-10 text-3xl font-semibold">Login Dahulu</h1>
          <p className="mt-10 text-base text-[#797979]">
            Untuk melihat profil pengguna, kamu harus login dulu
          </p>
          <Image
            src="/images/illustration.png"
            height={300}
            width={300}
            className="mx-auto my-10"
            alt="illustration"
          />
          <button
            type="button"
            onClick={() => router.push("/login")}
            className="w-3/4 rounded-full bg-yellow-300 py-2 font-semibold hover:bg-yellow-primary"
          >
            Silakan Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="relative px-5 pt-5">
        <h4 className="text-center text-2xl">Profile</h4>
        <div className="mx-auto mt-12 w-60 text-center">
          {dataProfile?.photo ? (
            <Image
              src={dataProfile?.photo}
              width={100}
              height={100}
              className="mx-auto rounded-full"
              alt="image profile"
            />
          ) : (
            <div className="">
              <UserCircleIcon className="mx-auto size-20 text-[#ABABAB]" />
            </div>
          )}
          <p className="mt-4 font-semibold">{payload?.name}</p>
          <p className="mt-2 text-xs text-[#ABABAB]">{dataProfile?.address}</p>
        </div>
        <div className="list-menu mt-10">
          <div className="menu my-4 flex justify-between">
            <div className="my-auto flex">
              <div className="w-8">
                <Image
                  src="/icons/detail-profile.svg"
                  width={24}
                  height={24}
                  className="mx-auto"
                  alt="icon-menu"
                />
              </div>
              <p className="my-auto ml-2 text-sm">Your Profile</p>
            </div>
            <div className="my-auto">
              <Link href="#">
                <Image
                  src="/icons/arrow.svg"
                  width={7}
                  height={14}
                  alt="icon-menu"
                />
              </Link>
            </div>
          </div>
          <hr />
          <div className="menu my-4 flex justify-between">
            <div className="my-auto flex">
              <div className="w-8">
                <Image
                  src="/icons/setting.svg"
                  width={24}
                  height={24}
                  className="mx-auto"
                  alt="icon-menu"
                />
              </div>
              <p className="my-auto ml-2 text-sm">Setting</p>
            </div>
            <div className="my-auto">
              <Link href="#">
                <Image
                  src="/icons/arrow.svg"
                  width={7}
                  height={14}
                  alt="icon-menu"
                />
              </Link>
            </div>
          </div>
          <hr />
          <div className="menu my-4 flex justify-between">
            <div className="my-auto flex">
              <div className="w-8">
                <Image
                  src="/icons/help-center.svg"
                  width={10}
                  height={24}
                  className="mx-auto"
                  alt="icon-menu"
                />
              </div>
              <p className="my-auto ml-2 text-sm">Help Center</p>
            </div>
            <div className="my-auto">
              <Link href="#">
                <Image
                  src="/icons/arrow.svg"
                  width={7}
                  height={14}
                  alt="icon-menu"
                />
              </Link>
            </div>
          </div>
          <hr />
          <div className="menu my-4 flex justify-between">
            <div className="my-auto flex">
              <div className="w-8">
                <Image
                  src="/icons/privacy.svg"
                  width={22}
                  height={24}
                  className="mx-auto"
                  alt="icon-menu"
                />
              </div>
              <p className="my-auto ml-2 text-sm">Privacy Policy</p>
            </div>
            <div className="my-auto">
              <Link href="#">
                <Image
                  src="/icons/arrow.svg"
                  width={7}
                  height={14}
                  alt="icon-menu"
                />
              </Link>
            </div>
          </div>
          <hr />
          <div
            className="menu my-4 flex cursor-pointer justify-between"
            onClick={() => setOpenPopUpLogout(true)}
          >
            <div className="my-auto flex">
              <div className="w-8">
                <Image
                  src="/icons/logout.svg"
                  width={24}
                  height={24}
                  className="mx-auto"
                  alt="icon-menu"
                />
              </div>
              <p className="my-auto ml-2 text-sm">Logout</p>
            </div>
            <div className="my-auto">
              <Link href="#">
                <Image
                  src="/icons/arrow.svg"
                  width={7}
                  height={14}
                  alt="icon-menu"
                />
              </Link>
            </div>
          </div>
          <hr />
        </div>
        <div
          className={`${openPopUpLogout ? "fixed inset-0 z-50 flex items-center justify-center" : "hidden"}`}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
          <div className="relative h-fit w-11/12 max-w-md transform rounded-lg border border-gray-300 bg-white py-10 text-center shadow-xl">
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-20 w-20"
            >
              <path
                d="M32 0C40.4869 0 48.6263 3.37142 54.6274 9.37258C60.6286 15.3737 64 23.5131 64 32C64 40.4869 60.6286 48.6263 54.6274 54.6274C48.6263 60.6286 40.4869 64 32 64C23.5131 64 15.3737 60.6286 9.37258 54.6274C3.37142 48.6263 0 40.4869 0 32C0 23.5131 3.37142 15.3737 9.37258 9.37258C15.3737 3.37142 23.5131 0 32 0ZM32 13.7143C31.4196 13.7138 30.8455 13.8343 30.3143 14.0682C29.7831 14.3021 29.3066 14.6442 28.9151 15.0727C28.5236 15.5012 28.2258 16.0066 28.0407 16.5567C27.8556 17.1068 27.7872 17.6894 27.84 18.2674L29.5086 36.5806C29.5733 37.1963 29.8636 37.7662 30.3237 38.1805C30.7838 38.5947 31.3809 38.8239 32 38.8239C32.6191 38.8239 33.2162 38.5947 33.6763 38.1805C34.1364 37.7662 34.4267 37.1963 34.4914 36.5806L36.1554 18.2674C36.2082 17.6898 36.14 17.1076 35.9551 16.5578C35.7703 16.008 35.4729 15.5028 35.0819 15.0744C34.6909 14.646 34.2149 14.3038 33.6843 14.0696C33.1536 13.8354 32.58 13.7144 32 13.7143ZM32 50.2857C32.9699 50.2857 33.9001 49.9004 34.586 49.2146C35.2718 48.5287 35.6571 47.5985 35.6571 46.6286C35.6571 45.6586 35.2718 44.7284 34.586 44.0426C33.9001 43.3567 32.9699 42.9714 32 42.9714C31.0301 42.9714 30.0999 43.3567 29.414 44.0426C28.7282 44.7284 28.3429 45.6586 28.3429 46.6286C28.3429 47.5985 28.7282 48.5287 29.414 49.2146C30.0999 49.9004 31.0301 50.2857 32 50.2857Z"
                fill="#FEDB22"
              />
            </svg>

            <h3 className="mt-6 text-2xl font-semibold">Konfirmasi Logout</h3>
            <p className="mt-3">Apakah Anda yakin ingin keluar?</p>
            <div className="mt-8 flex justify-center gap-x-4">
              <button
                onClick={handleLogout}
                className="rounded-lg bg-red-500 px-4 py-2 text-sm text-white shadow-lg"
              >
                Logout
              </button>
              <button
                className="rounded-lg border border-gray-300 bg-sky-400 px-4 py-2 text-sm text-white shadow-lg"
                onClick={() => setOpenPopUpLogout(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
        {/* <div className="fixed inset-0 top-1/2 z-50 mx-5 flex h-fit -translate-y-1/2 transform items-center justify-center rounded-lg border border-gray-300 bg-white py-10 text-center shadow-xl">
          <div className="">
            <h3>Are you sure to Logout?</h3>
            <p>This is Pop up logout</p>
            <div className="mt-4 flex justify-center gap-x-4">
              <button className="rounded-lg bg-yellow-400 px-4 py-2">
                Logout
              </button>
              <button className="rounded-lg bg-yellow-400 px-4 py-2">
                Cancel
              </button>
            </div>
          </div>
        </div> */}
      </div>
      {/* Halaman yang tampil jika belum login */}
    </>
  );
}
