import React from "react";

function SkeletonItem() {
  return <div className="h-16 w-16 rounded-full bg-[#D9D9D9]"></div>;
}

export default function SkeletonCategory({ count }) {
  return (
    <div className="mx-4 mt-5 grid animate-pulse grid-cols-5 gap-x-3 gap-y-5 overflow-x-scroll">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonItem key={i} />
      ))}
    </div>
  );
}
