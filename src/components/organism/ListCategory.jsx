import useFetchCategory from "@/hooks/Category/useFetchCategory";
import React from "react";
import CategoryItem from "../molecules/CategoryItem";
import SkeletonCategory from "./SkeletonCategory";
// import LoadingModals from "../molecules/LoadingModals";

export default function ListCategory() {
  const { dataCategory, loading, error } = useFetchCategory();

  return (
    <>
      <section className="mx-4 mt-5 grid grid-cols-7 gap-x-20 gap-y-5 overflow-x-scroll">
        {loading ? (
          <SkeletonCategory count={10} />
        ) : error ? (
          <p className="text-red-500">Terjadi masalah: {error}</p>
        ) : dataCategory?.length === 0 ? (
          <p>Tidak ada kategori tersedia.</p>
        ) : (
          dataCategory?.map((category) => (
            <CategoryItem
              key={category.id}
              name={category.name}
              icon={category.name}
              link={category.name}
            />
          ))
        )}
      </section>
      {error && <p>Ini error: {error}</p>}
    </>
  );
}
