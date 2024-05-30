"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import products from "../../../../services/products.json";
import { formatHarga } from "@/helpers/utils";
import Image from "next/image";
import ShareButton from "@/components/ShareButton/ShareButton";

export default function DetailProduct() {
  const [productURL, setProductURL] = useState("");

  const router = useParams();
  // console.log(router);
  const productURI = router.name;
  // console.log("ini produknya ", productURI.replace(/-/g, " "));
  const sanitizedProduct = productURI.replace(/-/g, " ");

  const findProduct = (name) => {
    return products.find((product) => product.name === name);
  };

  const product = findProduct(sanitizedProduct);
  console.log("Data produk:", product);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setProductURL(window.location.href);
    }
  }, [router.asPath]);

  return (
    <section className="realtive py-0">
      <div className="absolute flex w-full justify-between px-5 py-4 text-white drop-shadow-xl">
        <Link href="#" className="my-auto rounded-full bg-black p-2">
          <Image
            src="/icons/arrow-left.svg"
            width={20}
            height={20}
            alt="arrow"
            className=""
          />
        </Link>
        <div className="my-auto">
          {/* <h2 className="text-lg text-white">Detail Produk</h2> */}
        </div>
        <Link href="#" className="my-auto text-lg"></Link>
      </div>
      <div className="pb-40">
        <div id="card-product" className="">
          <div id="card-image" className="">
            {/* <div className="h-96 w-full bg-gray-400"></div> */}
            <Image
              src={product.image}
              width={384}
              height={384}
              alt="photo product"
              className="h-96 w-full object-cover"
            />
          </div>
          <div id="card-body" className="mt-4 px-5">
            <p className="text-sm capitalize text-gray-400">
              {product.category}
            </p>
            <p className="font-bold">{product.name}</p>
            <div className="flex gap-x-3">
              <div className="">{formatHarga(product.price)}</div>
              <div className="">{product.unit}</div>
            </div>
            <div className="mx-auto mt-4 w-1/2 gap-x-3">
              {/* <button className="rounded-full bg-yellow-primary px-4 py-2 text-xs">
                Bagikan
              </button> */}
              <button className="w-full rounded-full bg-yellow-primary px-4 py-2 text-xs">
                Keranjang
              </button>
              <ShareButton
                url={productURL}
                title="Checkout barang ini segera!"
              />
            </div>
            <div
              id="description"
              className="mt-8 text-justify indent-8 text-sm"
            >
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-40"></div>
    </section>
  );
}
