import React from "react";
import Photo from "../../assets/Pizza.jfif";
import ProductCard from "../product/ProductCard";
function Popular() {
  return (
    <div className="px-6  py-6 ">
      <div className="grid  gap-4 lg:grid-cols-2 space-y-4 md:space-y-0  items-center justify-center  ">
       <ProductCard/>
       <ProductCard/>
        <ProductCard/>
       <ProductCard/>
        <ProductCard/>
      
      </div>
    </div>
  );
}

export default Popular;
