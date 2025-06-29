"use client";

import ProductItem from "@/components/molecules/ProductItem";
import { formatHarga } from "@/helpers/utils";
import useFetchProductByCategory from "@/hooks/Product/useFetchProductByCategory";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

export default function DetailCategory() {
  const { name } = useParams();
  const route = useRouter();
  const title = decodeURIComponent(name);
  const dataProductByCategory = useFetchProductByCategory(title);

  return (
    <section className="relative">
      <button
        onClick={() => route.back()}
        className="absolute left-5 top-4 rounded-full bg-black p-2"
      >
        <Image
          src="/icons/arrow-left.svg"
          width={20}
          height={20}
          alt="arrow"
          className="h-4 w-4"
        />
      </button>
      <div className="py-4 text-center">
        <div className="text-xl font-semibold capitalize">{title}</div>
      </div>
      {dataProductByCategory.some((item) => item.products.length > 0) ? (
        <div className="mx-4 mb-20 mt-10 grid grid-cols-2 justify-items-center gap-5">
          {dataProductByCategory.map((item) =>
            item.products.length > 0 ? (
              item.products.map((product) => (
                <ProductItem
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  image={product.photo}
                  unit={product.unit}
                  price={formatHarga(product.price)}
                />
              ))
            ) : (
              <p key={item.id}>No products available in this category.</p>
            ),
          )}
        </div>
      ) : (
        <div className="flex h-screen items-center justify-center">
          <p>Tidak ada produk di kategori ini</p>
        </div>
      )}
    </section>
  );
}
