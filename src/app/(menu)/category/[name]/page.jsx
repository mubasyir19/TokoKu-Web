"use client";

import ProductItem from "@/components/molecules/ProductItem";
import { formatHarga } from "@/helpers/utils";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

export default function DetailCategory() {
  const { name } = useParams();
  const route = useRouter();

  return (
    <section>
      <div className="flex w-full items-center justify-between px-5 py-4 drop-shadow-xl">
        <button
          onClick={() => route.back()}
          className="rounded-full bg-black p-2"
        >
          <Image
            src="/icons/arrow-left.svg"
            width={20}
            height={20}
            alt="arrow"
            className=""
          />
        </button>
        <div className="text-xl font-semibold capitalize">{name}</div>
        <Link href="#" className="text-lg"></Link>
      </div>
      <div className="mx-4 mb-20 mt-5 grid grid-cols-2 justify-items-center gap-5">
        <ProductItem name="Nama Produk" price={formatHarga(100000)} />
        <ProductItem name="Product Name" price={formatHarga(120000)} />
        <ProductItem name="This is Product Name" price={formatHarga(64500)} />
        <ProductItem name="Name of Product" price={formatHarga(75000)} />
        <ProductItem name="Nama Produk" price={formatHarga(16500)} />
        <ProductItem name="Product Name" price={formatHarga(9500)} />
        <ProductItem name="This is Product Name" price={formatHarga(12000)} />
        <ProductItem name="Name of Product" price={formatHarga(15500)} />
        <ProductItem name="Nama Produk" price={formatHarga(20000)} />
        <ProductItem name="Product Name" price={formatHarga(60000)} />
      </div>
    </section>
  );
}
