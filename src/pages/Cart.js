import React from "react";
import CartItem from "../components/cart/CartItem";
import { RiArrowLeftSFill } from "react-icons/ri";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <div className=" mx-auto relative max-w-3xl min-h-screen py-10">
      <div className="flex items-center gap-6 px-4 ">
        <Link
          to="/"
          className="bg-white p-2 border-2 border-[#d3cfcf] shadow-lg rounded-lg"
        >
          <RiArrowLeftSFill size={25} />
        </Link>
        <h1 className="text-lg tracking-wide  font-bold">My Orders</h1>
      </div>
      <div className=" mx-6 pt-6  gap-3 pb-24 grid grid-cols-1 sm:grid-cols-2">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div className="bg-white font-medium   pb-24 text-[#C4C4C4]    max-w-4xl items-center border-t-2  rounded-lg flex-col space-y-4  px-6 mx-auto py-6 my-6">
        <div className="flex items-center w-full justify-between px-10">
          <h1 className="text-lg font-medium ">Subtotal Price</h1>
          <p>200$</p>
        </div>
        <div className="flex items-center w-full justify-between px-10">
          <h1 className="text-lg font-medium ">Tax</h1>
          <p>2$</p>
        </div>
        <div className="flex items-center w-full justify-between px-10">
          <h1 className="text-lg font-medium ">Total Price</h1>
          <p className="text-[#DC0D28]">202$</p>
        </div>
      </div>
      <div className="bg-white w-full absolute bottom-0 text-clip  shadow-inner  max-w-4xl items-center border-2 rounded-lg flex gap-10  px-6 mx-auto py-6 my-6">
        <Link to="rating" className="bg-black rounded-lg px-1 py-2 w-full text-white font-medium text-lg">
          Check out
        </Link>
      </div>
    </div>
  );
}

export default Cart;
