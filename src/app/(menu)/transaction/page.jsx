"use client";

import LoadingModals from "@/components/molecules/LoadingModals";
import { formatHarga, formatDateTime } from "@/helpers/utils";
import useFetchOrder from "@/hooks/Order/useFetchOrder";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Transaction() {
  const [openTab, setOpenTab] = useState("ongoing");
  const router = useRouter();

  const { dataOrder, loadingOrder, errorOrder } = useFetchOrder();
  console.log("loading Order =", loadingOrder);
  console.log("error Order =", errorOrder);

  const switchTab = (TabName) => {
    setOpenTab(TabName);
  };

  if (loadingOrder) return <LoadingModals />;

  return (
    <div className="h-screen bg-white px-4 pb-28">
      <div id="title" className="pt-8">
        <h1 className="text-center text-lg font-semibold">Transaksi</h1>
      </div>
      <div id="tab" className="mt-4 grid grid-cols-2">
        <button
          className={`border-b-2 py-2 text-sm font-medium ${openTab === "ongoing" ? "border-yellow-darken text-yellow-darken" : "border-gray-200 text-gray-700"}`}
          onClick={() => switchTab("ongoing")}
        >
          Ongoing
        </button>
        <button
          className={`border-b-2 py-2 text-sm font-medium ${openTab === "history" ? "border-yellow-darken text-yellow-darken" : "border-gray-200 text-gray-700"}`}
          onClick={() => switchTab("history")}
        >
          History
        </button>
      </div>
      {errorOrder ? (
        <div className="mt-4 text-center text-red-500">
          <p>{errorOrder}</p>
        </div>
      ) : (
        <section className="pb-40 pt-8">
          {openTab === "ongoing" && (
            <div className="">
              {dataOrder?.length > 0 ? (
                <div>
                  {dataOrder.map((item) => (
                    <div key={item.id} id="CardOrder" className="mb-2 w-full">
                      <div className="rounded-t-2xl bg-black px-4 py-2">
                        <p className="text-base font-semibold text-white">
                          Order on process
                        </p>
                      </div>
                      <div className="rounded-b-2xl border border-gray-200 px-4">
                        <div className="flex items-center justify-between py-2">
                          <div className="">
                            <p className="text-sm text-black">
                              {item.methodPayment}
                            </p>
                          </div>
                          <div className="">
                            <p className="text-sm text-black">
                              {formatHarga(item.total_price)}
                            </p>
                          </div>
                        </div>
                        <hr />
                        <div className="my-2 flex items-center justify-between">
                          <p className="line-clamp-1 w-1/2 text-xs">
                            Order ID: {item.order_code}
                          </p>
                          <p className="text-xs">
                            {formatDateTime(item.order_date)}
                          </p>
                          {/* <p className="text-xs">14 April 2025 | 21:56</p> */}
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                          <div className="w-3/4">
                            <div className="flex items-center gap-x-1">
                              <div className="size-3 rounded-full bg-yellow-400"></div>
                              <p className="text-xs">{item.status}</p>
                            </div>
                            <p className="mt-1 line-clamp-1 text-xs text-gray-400">
                              {item.OrderItem.map((data, index) => (
                                <span key={index}>
                                  {data.product.name}
                                  {`, `}
                                </span>
                              ))}
                              {/* telur curah, ayam potong, susu kambing */}
                            </p>
                          </div>
                          <div className="">
                            <p className="text-xs text-gray-400">3 Item</p>
                          </div>
                        </div>
                        <div className="mt-4">
                          <p className="line-clamp-1 text-xs text-gray-400">
                            {item.address}
                          </p>
                        </div>
                        <div className="mt-4 flex items-center justify-between pb-2">
                          <button className="rounded-lg bg-red-700 px-2 py-1 text-xs font-medium text-white">
                            Batalkan Pesanan
                          </button>
                          <Link
                            href={`/transaction/${item.order_code}`}
                            className="rounded-lg bg-yellow-darken px-2 py-1 text-xs font-medium text-white"
                          >
                            Detail Pesanan
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  <div className="mx-auto h-28 w-28 rounded-full bg-gray-500"></div>
                  <div className="mx-auto mt-2 w-10/12 text-center">
                    <p className="text-sm font-bold text-black">
                      Belum ada pesanan
                    </p>
                    <p className="text-xs text-gray-400">
                      Kamu bisa cek pesanan yang sedang diproses di sini
                    </p>
                    <button
                      onClick={() => router.push("/menu")}
                      className="mt-2 rounded-full bg-yellow-primary px-4 py-2 text-sm font-medium text-white"
                    >
                      Pesan Sekarang
                    </button>
                  </div>
                </>
              )}
            </div>
          )}
          {openTab === "history" && (
            <>
              <div className="mx-auto h-28 w-28 rounded-full bg-gray-500"></div>
              <div className="mx-auto mt-2 w-10/12 text-center">
                <p className="text-sm font-bold text-black">
                  Belum ada history pesanan
                </p>
                <p className="text-xs text-gray-400">
                  Kamu bisa cek pesanan yang sedang diproses di sini
                </p>
                <button
                  onClick={() => router.push("/menu")}
                  className="mt-2 rounded-full bg-yellow-primary px-4 py-2 text-sm font-medium text-white"
                >
                  Pesan Sekarang
                </button>
              </div>
            </>
          )}
        </section>
      )}
    </div>
  );
}
