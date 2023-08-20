import React from "react";

function Home() {
  return (
    <div className="flex-col items-center justify-center ">
      <div className="relative  space-y-3 overflow-hidden rounded-xl  p-3 before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20  before:animate-[shimmer_1.5s_infinite]">
        <div className=" h-4 w-24 md:mx-10  rounded-lg bg-neutral-400"></div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 py-6 gap-4  ">
          <div className=" h-20 w-24 sm:w-36 sm:h-36  mx-auto rounded-lg bg-neutral-400"></div>
          <div className=" h-20 w-24 sm:w-36 sm:h-36  mx-auto rounded-lg bg-neutral-400"></div>
          <div className=" h-20 w-24 sm:w-36 sm:h-36   mx-auto rounded-lg bg-neutral-400"></div>
          <div className=" h-20 w-24 sm:w-36 sm:h-36 hidden sm:flex mx-auto rounded-lg bg-neutral-400"></div>
          <div className=" h-20 w-24 sm:w-36 sm:h-36  hidden md:flex mx-auto rounded-lg bg-neutral-400"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2   gap-4 mx-2 ">
          <div className=" h-40 w-full flex items-center mx-auto rounded-lg bg-neutral-400"></div>
          <div className=" h-40 w-full  mx-auto rounded-lg bg-neutral-400"></div>
          <div className=" h-40 w-full  mx-auto rounded-lg bg-neutral-400"></div>
          <div className=" h-40 w-full  mx-auto rounded-lg bg-neutral-400"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
