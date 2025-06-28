"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import { MapPinIcon } from "@heroicons/react/24/outline";
import {
  formatDateTime,
  formatHarga,
  getStatusOrderStyle,
} from "@/helpers/utils";
import useFetchDetailOrder from "@/hooks/Order/useFetchDetailOrder";
import LoadingModals from "@/components/molecules/LoadingModals";

export default function DetailOrder() {
  const [copied, setCopied] = useState("");
  const route = useRouter();
  const { orderCode } = useParams();
  const { dataOrder, loadingOrder, error } = useFetchDetailOrder(orderCode);
  const { colorStatus, textStatus } = getStatusOrderStyle(dataOrder.status);

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    // setTimeout(() => setCopied(""), 2000);
  };

  const totalPriceOrderItem = Array.isArray(dataOrder.OrderItem)
    ? dataOrder.OrderItem.reduce((total, item) => {
        const price = Number(item.product?.price) || 0;
        const quantity = Number(item.quantity) || 0;
        return total + price * quantity;
      }, 0)
    : 0;

  if (loadingOrder) {
    return <LoadingModals />;
  }

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
        <p
          className={`rounded-t-lg ${colorStatus} p-2 text-base font-medium text-white`}
        >
          {textStatus}
        </p>
        <div className="p-2">
          <div className="flex items-center gap-2">
            <p className="text-base font-bold text-black">
              Pesanan <span className="bg-[#FEDB22]">{orderCode}</span>
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
              <p>: {dataOrder?.user?.name}</p>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <p className="w-36">Nomor Telepon</p>
              <p>: {dataOrder?.user?.phoneNumber}</p>
              <button
                onClick={() =>
                  handleCopy(dataOrder?.user?.phoneNumber, "telepon")
                }
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
              <p className="mt-0.5 text-xs text-black">
                {dataOrder?.user?.address}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 rounded-lg border border-gray-400 p-2">
        <p className="my-2 text-lg font-semibold text-black">Produk Pesanan</p>
        <hr className="my-1 bg-gray-500" />
        <div className="mt-4 flex flex-col gap-2">
          {dataOrder.OrderItem.map((item) => (
            <div id="card" key={item.id} className="flex items-center gap-3">
              <Image
                src={item.product.photo}
                // src={`https://images.tokopedia.net/img/cache/500-square/VqbcmM/2023/8/4/a92cd594-b303-4a66-a1b4-0c2be98ea260.jpg.webp?ect=4g`}
                width={100}
                height={100}
                alt="photo product"
                className="size-16"
                unoptimized
              />
              <div className="flex-1">
                <p
                  title="Rexus Keyboard Gaming Mechanical Leginore Mx9"
                  className="line-clamp-1 text-sm font-semibold text-black"
                >
                  {item.product.name}
                </p>
                <p className="text-xs text-black">Quantity : {item.quantity}</p>
                <p className="mt-4 text-end text-sm font-semibold text-black">
                  {formatHarga(item.subTotal)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 rounded-lg border border-gray-400 p-2">
        <p className="my-2 text-lg font-semibold text-black">Payment Summary</p>
        <hr className="my-1 bg-gray-500" />
        <div className="mt-4">
          <div className="mt-2 flex items-center justify-between">
            <p className="text-sm text-black">Harga</p>
            <p className="text-sm font-medium text-black">
              {formatHarga(totalPriceOrderItem)}
            </p>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <p className="text-sm text-black">Biaya Pengiriman</p>
            <p className="text-sm font-medium text-black">
              {formatHarga(dataOrder?.shipping_fee)}
            </p>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <p className="text-sm text-black">Biaya Layanan</p>
            <p className="text-sm font-medium text-black">
              {formatHarga(dataOrder?.admin_fee)}
            </p>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <p className="text-sm font-semibold text-black">Total Akhir</p>
            <p className="text-sm font-bold text-black">
              {formatHarga(dataOrder?.total_price)}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-6 rounded-lg border border-gray-400 p-2">
        <p className="my-2 text-lg font-semibold text-black">Info Pengiriman</p>
        <hr className="my-1 bg-gray-500" />
        <div className="mt-2 flex items-center justify-between">
          <p className="text-sm text-black">Metode Pembayaran</p>
          <p className="text-sm font-medium text-black">
            {dataOrder?.methodPayment}
          </p>
        </div>
        <div className="mt-4">
          <div className="mt-2 flex items-center justify-between">
            <p className="text-sm text-black">Waktu Pemesanan</p>
            <p className="text-sm font-medium text-black">
              {formatDateTime(dataOrder?.order_date)}
            </p>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <p className="text-sm text-black">Waktu Pengiriman</p>
            <p className="text-sm font-medium text-black">
              {dataOrder?.delivered_date
                ? formatDateTime(dataOrder.delivered_date)
                : "-"}
            </p>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <p className="text-sm text-black">Waktu Pesanan Selesai</p>
            <p className="text-sm font-medium text-black">
              {dataOrder?.completed_date
                ? formatDateTime(dataOrder.completed_date)
                : "-"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
