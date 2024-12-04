import useFetchCategory from "@/hooks/Category/useFetchCategory";
import React from "react";
import CategoryItem from "../molecules/CategoryItem";

export default function ListCategory() {
  const dataCategory = useFetchCategory();

  return (
    <section className="mx-4 mt-5 grid grid-cols-7 gap-x-20 gap-y-5 overflow-x-scroll">
      {dataCategory.map((category) => (
        <CategoryItem
          key={category.id}
          name={category.name}
          icon={category.name}
          link={category.name}
        />
      ))}
    </section>
  );
}
