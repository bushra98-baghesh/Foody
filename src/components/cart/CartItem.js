import React, { useRef } from "react";
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import { HiOutlineTrash } from "react-icons/hi";
import { useThemeHook } from "../ThemeProvider";

import {
  deleteItem,
  setIncreaseItemQTY,
  setDecreaseItemQTY,
} from "../../redux/slices/cartSlice";
import { useLang } from "../LangProvider";
function CartItem({ item }) {
  const [theme] = useThemeHook();
  const { lan } = useLang();
  const dispatch = useDispatch();
  const deletProduct = () => {
    dispatch(deleteItem(item));
  };
  const increase = () => {
    dispatch(setIncreaseItemQTY(item));
  };
  const decrease = () => {
    dispatch(setDecreaseItemQTY(item));
  };
  const ref = useRef(0);
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
  if (item.quantity === 0) {
    deletProduct();
  }

  const name =
    lan === "en"
      ? item?.name
        ? item?.name
        : "No Data..."
      : item?.name_ar
      ? item?.name_ar
      : "لا يوجد معلومات...";
  return (
    <div className="flex-col mx-auto">
      <div className=" overflow-hidden w-80   mx-auto  border-2 border-[#d3cfcf] rounded-xl  shadow-lg ">
        <div
          onPointerDown={onPointerDown}
          onPointerUp={onPointerup}
          ref={ref}
          className="flex max-h-30 mx-auto gap-1  w-96 transition-transform duration-500"
        >
          <Link
            to={`/${item?.id}`}
            className="rounded-sm h-28 hover:scale-110 transition-all duration-300 ease-in-out  overflow-hidden"
          >
            <img
              src={item?.image}
              alt="img"
              className="min-h-full  w-28  object-cover object-center"
            />
          </Link>
          <div className=" flex flex-1 flex-col items-start p-1 text-start justify-between py-4 sm:mx-2 mx-0 ">
            <h1
              className={`${
                theme ? "text-[#F1F1F1]" : " text-gray-700"
              } font-bold text-base`}
            >
              {name}
            </h1>
            <div className="flex space-x-1">
              {item.extraIngredients.map((extra, index) => (
                <span
                  key={index}
                  className={`${
                    theme ? "text-[#cbcaca]" : " text-gray-700"
                  } font-normal text-xs block`}
                >
                  {extra.name}
                </span>
              ))}
            </div>

            <div className="flex   items-center gap-4 justify-between ">
              <h1 className="font-bold text-base  text-[#DC0D28]">
                ${item.totalPrice}
              </h1>
              <div className="flex items-center justify-between gap-1 ">
                <button
                  onClick={decrease}
                  className="bg-[#F1F1F1] rounded-full px-2 font-medium"
                >
                  -
                </button>
                <div className="bg-[#DC0D28] text-white rounded-full text-base text-center font-medium px-3 py-1">
                  {item.quantity}
                </div>
                <button
                  onClick={increase}
                  className="bg-[#F1F1F1] rounded-full px-1.5 font-medium "
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div
            onClick={deletProduct}
            className="bg-[#DC0D28] text-white   flex p-3 items-center"
          >
            <HiOutlineTrash size={25} />
          </div>
        </div>
      </div>
      {item.note.length > 0 ? (
        <>
          {" "}
          <h1
            className={`${
              theme ? "text-[#cbcbcb]" : " text-gray-500"
            } text-start w-80 text-sm py-1`}
          >
            note : {item.note}
          </h1>
        </>
      ) : null}
    </div>
  );
}

export default CartItem;
