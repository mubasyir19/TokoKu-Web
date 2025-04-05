"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
// import React, { useEffect, useState } from "react";
import products from "../../../../services/products.json";
import { formatHarga } from "@/helpers/utils";
import Image from "next/image";

export default function DetailProduct() {
  // const [productURL, setProductURL] = useState("");

  const route = useRouter();
  const param = useParams();
  // console.log(param);
  const productURI = decodeURIComponent(param.name);
  // console.log("in produk URI decode =", productURI);

  const findProduct = (name) => {
    return products.find((product) => product.name === name);
  };

  const product = findProduct(productURI);
  // console.log("Data produk:", product);

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     setProductURL(window.location.href);
  //   }
  // }, [param.asPath]);

  return (
    <section className="realtive py-0">
      <div className="absolute flex w-full justify-between px-5 py-4 text-white drop-shadow-xl">
        <button
          onClick={() => route.back()}
          className="my-auto rounded-full bg-black p-2"
        >
          <Image
            src="/icons/arrow-left.svg"
            width={20}
            height={20}
            alt="arrow"
            className=""
          />
        </button>
        <div className="my-auto"></div>
        <Link href="#" className="my-auto text-lg"></Link>
      </div>
      <div className="pb-40">
        <div id="card-product" className="">
          <div id="card-image" className="">
            <Image
              src={product.image}
              width={384}
              height={384}
              alt="photo product"
              className="h-96 w-full rounded-b-3xl object-cover"
            />
          </div>
          <div id="card-body" className="mt-4 px-5">
            <p className="text-2xl font-bold">{product.name}</p>
            <p className="mt-2 text-black">{product.unit}</p>
            <div className="mt-7 flex items-center justify-between">
              <div className="flex items-center gap-x-2">
                <button
                  className="text-4xl text-[#B3B3B3]"
                  // onClick={minCount}
                >
                  -
                </button>
                <p className="rounded-lg border-2 border-[#EDEDED] px-4 py-2 text-lg text-black">
                  1
                </p>
                <button
                  className="text-4xl text-[#FFD600]"
                  // onClick={addCount}
                >
                  +
                </button>
              </div>
              <div className="">
                <p className="text-lg font-bold text-black">
                  {formatHarga(product.price)}
                </p>
              </div>
            </div>
            <p className="mt-7 text-base font-semibold text-black">
              Detail Produk
            </p>
            <div
              id="description"
              className="mt-6 text-justify indent-8 text-base text-black"
            >
              <p className="">{product.description}</p>
            </div>
            <div className="mt-8">
              <button className="w-full rounded-lg bg-[#FFD600] py-4 font-semibold text-black">
                Tambah Ke Keranjang
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-40"></div>
    </section>
  );
}
