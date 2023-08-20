import React from "react";

function Spinner() {
  return (
    <div class="min-h-screen flex flex-col   ">
      <div class="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
        <div class="flex justify-center">
          <div
            class="animate-spin inline-block w-8 h-8 border-[3px] border-current border-t-transparent text-[#DC0D28] rounded-full"
            role="status"
            aria-label="loading"
          >
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Spinner;
