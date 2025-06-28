"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { formatHarga } from "@/helpers/utils";

export default function DetailOrder() {
  const [copied, setCopied] = useState("");
  const route = useRouter();

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    // setTimeout(() => setCopied(""), 2000);
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
          unoptimized
        />
      </button>
      <div className="py-4 text-center">
        <div className="text-xl font-semibold capitalize">DetailPesanan</div>
      </div>
      <div className="mt-6 rounded-lg border border-gray-400">
        {/* <p className="bg-yellow-500 rounded-t-lg p-2 text-base font-medium text-white">
          Menunggu pesanan di proses
        </p> */}
        {/* <p className="rounded-t-lg bg-orange-500 p-2 text-base font-medium text-white">
          Pesananmu sedang di proses
        </p> */}
        {/* <p className="rounded-t-lg bg-sky-500 p-2 text-base font-medium text-white">
          Pesananmu sedang diantar
        </p> */}
        <p className="rounded-t-lg bg-emerald-500 p-2 text-base font-medium text-white">
          Pesananmu Sudah Diterima
        </p>
        <div className="p-2">
          <div className="flex items-center gap-2">
            <p className="text-base font-bold text-black">
              Pesanan <span className="bg-[#FEDB22]">TK-712959</span>
            </p>
            <button
              onClick={() => handleCopy("TK-712959", "kode")}
              className="rounded-md bg-slate-200 px-1 py-0.5 text-[10px] text-black"
            >
              Salin
            </button>
          </div>
          <div className="mt-1 space-y-1">
            <div className="flex items-center text-sm">
              <p className="w-36">Nama Pemesan</p>
              <p>: Mahdy Mubasyir</p>
            </div>
            <div className="flex items-center text-sm">
              <p className="w-36">Nomor Telepon</p>
              <p>: +6287774026818</p>
              <button
                onClick={() => handleCopy("+6287774026818", "telepon")}
                className="rounded-md bg-slate-200 px-1 py-0.5 text-[10px] text-black"
              >
                Salin
              </button>
            </div>
          </div>
          <p className="mt-4 text-base font-bold text-black">
            Alamat Pengiriman
          </p>
          <div className="mt-1 flex items-center gap-3 rounded-lg bg-slate-100 p-2">
            <div className="">
              <MapPinIcon className="size-6 text-yellow-primary" />
            </div>
            <div className="flex-1">
              {/* <p className="text-sm font-medium text-black">
                Mahdy Mubasyir{" "}
                <span className="text-xs text-black text-opacity-50">
                  +6287774026818
                </span>
              </p> */}
              <p className="mt-0.5 text-xs text-black">Jatibening, Bekasi</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 rounded-lg border border-gray-400 p-2">
        <p className="my-2 text-lg font-semibold text-black">Produk Pesanan</p>
        <hr className="my-1 bg-gray-500" />
        <div className="mt-4 flex flex-col gap-2">
          <div className="">
            <div className="flex items-center gap-3">
              <Image
                src={`https://images.tokopedia.net/img/cache/500-square/VqbcmM/2023/8/4/a92cd594-b303-4a66-a1b4-0c2be98ea260.jpg.webp?ect=4g`}
                width={100}
                height={100}
                alt="photo product"
                className="size-16"
                unoptimized
              />
              <div className="">
                <p
                  title="Rexus Keyboard Gaming Mechanical Leginore Mx9"
                  className="line-clamp-1 text-base font-semibold text-black"
                >
                  Rexus Keyboard Gaming Mechanical Leginore Mx9
                </p>
                <p className="text-sm text-black">Quantity : 1</p>
                <p className="mt-4 text-end text-base font-semibold text-black">
                  {formatHarga(425000)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 rounded-lg border border-gray-400 p-2">
        <p className="my-2 text-lg font-semibold text-black">Payment Summary</p>
        <hr className="my-1 bg-gray-500" />
        <div className="mt-4">
          <div className="mt-2 flex items-center justify-between">
            <p className="text-sm text-black">Harga</p>
            <p className="text-sm font-medium text-black">
              {formatHarga(425000)}
            </p>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <p className="text-sm text-black">Biaya Pengiriman</p>
            <p className="text-sm font-medium text-black">Rp 8.000</p>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <p className="text-sm text-black">Biaya Layanan</p>
            <p className="text-sm font-medium text-black">Rp 1.000</p>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <p className="text-sm font-semibold text-black">Total Akhir</p>
            <p className="text-sm font-bold text-black">
              {formatHarga(444000)}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-6 rounded-lg border border-gray-400 p-2">
        <p className="my-2 text-lg font-semibold text-black">Info Pengiriman</p>
        <hr className="my-1 bg-gray-500" />
        <div className="mt-2 flex items-center justify-between">
          <p className="text-sm text-black">Metode Pembayaran</p>
          <p className="text-sm font-medium text-black">Cash</p>
        </div>
        <div className="mt-4">
          <div className="mt-2 flex items-center justify-between">
            <p className="text-sm text-black">Waktu Pemesanan</p>
            <p className="text-sm font-medium text-black">07-01-2024 15:51</p>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <p className="text-sm text-black">Waktu Pembayaran</p>
            <p className="text-sm font-medium text-black">07-01-2024 15:53</p>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <p className="text-sm text-black">Waktu Pengiriman</p>
            <p className="text-sm font-medium text-black">08-01-2024 17:38</p>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <p className="text-sm text-black">Waktu Pesanan Selesai</p>
            <p className="text-sm font-medium text-black">09-01-2024 11:12</p>
          </div>
        </div>
      </div>
    </div>
  );
}
