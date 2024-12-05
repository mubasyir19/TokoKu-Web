import React from "react";

function SkeletonItem() {
  return <div className="h-36 w-44 rounded-lg bg-[#D9D9D9]"></div>;
}

export default function SkeletonProduct({ count }) {
  return (
    <div className="mx-4 mb-20 mt-5 grid animate-pulse grid-cols-2 justify-items-center gap-5">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonItem key={i} />
      ))}
    </div>
  );
}
