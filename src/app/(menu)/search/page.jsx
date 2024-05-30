import React from "react";

export default function Search() {
  return (
    <div className="px-5 pt-5">
      <h1 className="text-center text-lg font-semibold">
        Find Your Needs Here
      </h1>
      <div className="form-group mt-6">
        <input
          type="text"
          name=""
          className="w-full rounded-full border-2 border-[#D9D9D9] px-5 py-2.5 text-sm"
          placeholder="Cari disini"
        />
      </div>
    </div>
  );
}
