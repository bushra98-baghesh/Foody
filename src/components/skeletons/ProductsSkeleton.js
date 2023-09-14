import React from "react";

function ProductsSkeleton() {
  return (
    <div className="flex-col items-center justify-center ">
      <div className="relative  space-y-3 overflow-hidden   p-3 before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20  before:animate-[shimmer_1.5s_infinite]">
        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-md lg:max-w-full mx-auto   gap-4  ">
          <div className=" h-40 w-full flex items-center mx-auto  bg-neutral-400"></div>
          <div className=" h-40 w-full  mx-auto rounded-lg bg-neutral-400"></div>
          <div className=" h-40 w-full  mx-auto rounded-lg bg-neutral-400"></div>
          <div className=" h-40 w-full  mx-auto rounded-lg bg-neutral-400"></div>
        </div>
      </div>
    </div>
  );
}

export default ProductsSkeleton;
