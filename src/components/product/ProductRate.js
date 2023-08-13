import React from 'react'
import StarRatings from "react-star-ratings";
import Photo from "../../assets/Rectangle 41888.png";
function ProductRate() {
  return (
    
       
       <div className=" flex flex-1  items-center justify-center p-3 text-start gap-6 ">
          <div className="rounded-xl hover:scale-110 transition-all duration-300 ease-in-out  overflow-hidden">
        <img
          src={Photo}
          alt="img"
          className=" w-20 object-cover object-center"
        />
      </div>
        <h1 className="font-bold  text-base  text-black ">
          Mac Cheese Burger
        </h1>
       
       
            <StarRatings
              rating={2.403}
              numberOfStars={5}
              starDimension="20px"
              starSpacing="1px"
              starRatedColor="#FFC700"
            />
         
        </div>
      
    
  )
}

export default ProductRate