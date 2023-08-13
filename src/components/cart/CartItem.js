import React, { useRef } from "react";
import { RiArrowRightSFill } from "react-icons/ri";
import { HiPlus, HiMinus, HiOutlineTrash } from "react-icons/hi";
import Photo from "../../assets/Rectangle 41888.png";
function CartItem() {
  const ref = useRef();
  let downX;
  const onPointerMove = (e) => {
    const newX = e.clientX;
    if (newX - downX > -30) {
      ref.current.style.transform = "translate(-65px)";
      setTimeout(() => {
        ref.current.style.transform = "translate(0px)";
      }, 4000);
    } else {
      ref.current.style.transform = "translate(0px)";
    }
  };
  const onPointerDown = (e) => {
    downX = e.clientX;
    ref.current.addEventListener("pointermove", onPointerMove);
  };
  const onPointerup = () => {
    ref.current.removeEventListener("pointermove", onPointerMove);
  };

  return (
    <div className=" overflow-hidden w-80  mx-auto  border-2 border-[#d3cfcf] rounded-xl">
      <div
        onPointerDown={onPointerDown}
        onPointerUp={onPointerup}
        ref={ref}
        className="flex w-96  transition-transform duration-500  shadow-lg       bg-white "
      >
        <div className="rounded-xl hover:scale-110 transition-all duration-300 ease-in-out  overflow-hidden">
          <img
            src={Photo}
            alt="img"
            className=" h-full w-28  object-cover object-center"
          />
        </div>
        <div className=" flex flex-1 flex-col items-start p-3 text-start justify-between py-4 sm:mx-4 mx-0 ">
          <h1 className="font-bold sm:text-base md:text-lg text-base  text-black mb-2">
            Mac Cheese Burger
          </h1>

          <div className="flex md:flex-row flex-col  gap-4 md:gap-6 justify-between ">
            <h1 className="font-bold text-base md:text-lg  text-[#DC0D28]">
              20.00$
            </h1>
            <div className="flex items-center justify-between gap-1 ">
              <button className="bg-[#F1F1F1] rounded-full px-2 font-medium">
                -
              </button>
              <div className="bg-[#DC0D28] text-white rounded-full text-base text-center font-medium px-3 py-1">
                2
              </div>
              <button className="bg-[#F1F1F1] rounded-full px-1.5 font-medium ">
                +
              </button>
            </div>
          </div>
        </div>
        <div className="bg-[#DC0D28] text-white  flex p-3 items-center">
          <HiOutlineTrash size={25} />
        </div>
      </div>
    </div>
  );
}

export default CartItem;
