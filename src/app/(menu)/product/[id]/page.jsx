"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { formatHarga } from "@/helpers/utils";
import Image from "next/image";
import useFetchDetailProduct from "@/hooks/Product/useFetchDetailProduct";
import { useCartStore } from "@/store/cartStore";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import QuantitySelector from "@/components/molecules/QuantitySelector";

export default function DetailProduct() {
  const { id } = useParams();
  const route = useRouter();

  const [payloadUser, setPayloadUser] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const tokenAuth = Cookies.get("authToken");

    if (tokenAuth) {
      try {
        const jwtToken = atob(tokenAuth);
        const payload = jwtDecode(jwtToken);
        setPayloadUser(payload);
      } catch (err) {
        console.error("Token tidak valid:", err);
        setPayloadUser(null);
      }
    } else {
      setPayloadUser(null); // belum login
    }
  }, []);

  const { dataProduct } = useFetchDetailProduct(id);
  const { addToCart } = useCartStore();

  const handleAddToCart = () => {
    if (!payloadUser) {
      alert("Silakan login terlebih dahulu");
      return;
    }
    addToCart(payloadUser.id, dataProduct?.id, quantity);
    route.push("/cart");
  };

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
            unoptimized
          />
        </button>
        <div className="my-auto"></div>
        <Link href="#" className="my-auto text-lg"></Link>
      </div>
      <div className="pb-40">
        <div id="card-product" className="">
          <div id="card-image" className="">
            {dataProduct?.photo && (
              <Image
                src={dataProduct.photo}
                width={384}
                height={384}
                alt="photo product"
                className="h-96 w-full rounded-b-3xl object-cover"
                unoptimized
              />
            )}
          </div>
          <div id="card-body" className="mt-4 px-5">
            <p className="text-2xl font-bold">{dataProduct?.name}</p>
            <p className="mt-2 text-black">{dataProduct?.unit}</p>
            <div className="mt-7 flex items-center justify-between">
              {/* <div className="flex items-center gap-x-2">
                <button className="text-4xl text-[#B3B3B3]">-</button>
                <p className="rounded-lg border-2 border-[#EDEDED] px-4 py-2 text-lg text-black">
                  1
                </p>
                <button className="text-4xl text-[#FFD600]">+</button>
              </div> */}
              <QuantitySelector onChange={setQuantity} />
              <div className="">
                <p className="text-lg font-bold text-black">
                  {formatHarga(dataProduct?.price)}
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
              <p className="">{dataProduct?.description}</p>
            </div>
            <div className="mt-8">
              <button
                onClick={handleAddToCart}
                className="w-full rounded-lg bg-[#FFD600] py-4 font-semibold text-black"
              >
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
