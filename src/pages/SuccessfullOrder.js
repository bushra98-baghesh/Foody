import React from "react";
import Photo from "../assets/OBJECTS.png";
function SuccessfullOrder() {
  return (
    <div className="mx-auto flex items-center justify-center   max-w-3xl  min-h-screen py-10 px-6">
      <div className="flex-col   items-center space-y-10 justify-center">
        <img
          src={Photo}
          alt=""
          className="object-center object-cover w-2/3  mx-auto"
        />
        <h1 className="text-lg sm:text-xl font-semibold ">
          Successfully Ordered
        </h1>
      </div>
    </div>
  );
}

export default SuccessfullOrder;
