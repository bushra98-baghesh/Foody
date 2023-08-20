import React from "react";
import CartItem from "../components/cart/CartItem";
import { RiArrowLeftSFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsMinecart } from "react-icons/bs";

function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  console.log(cartItems, "items");
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
      <div className=" pt-6  gap-3 pb-24 grid grid-cols-1 sm:grid-cols-2">
        {cartItems.map((item, index) => (
          <CartItem item={item} key={index} />
        ))}
      </div>
      {cartItems.length > 0 ? (
        <>
          <div className="bg-white font-medium   pb-24 text-[#C4C4C4]   items-center border-t-2  rounded-lg flex-col space-y-4  px-6 mx-auto py-6 my-6">
            <div className="flex items-center w-full justify-between px-10">
              <h1 className="text-lg font-medium ">Subtotal </h1>
              <p>{totalAmount} USD</p>
            </div>
            <div className="flex items-center w-full justify-between px-10">
              <h1 className="text-lg font-medium ">Tax</h1>
              <p>2 USD</p>
            </div>
            <div className="flex items-center w-full justify-between px-10">
              <h1 className="text-lg font-medium ">Total Price</h1>
              <p className="text-[#DC0D28]">{totalAmount + 2} USD</p>
            </div>
          </div>
          <div className="bg-white w-full absolute bottom-0 text-clip  shadow-inner  max-w-4xl items-center border-2 rounded-lg flex gap-10  px-6 mx-auto py-6 my-6">
            <Link
              to="rating"
              className="bg-black rounded-lg px-1 py-2 w-full text-white font-medium text-lg"
            >
              Check out
            </Link>
          </div>
        </>
      ) : (
        <div className="flex-col  items-center justify-center mx-auto text-stone-400">
          <BsMinecart size={70} className="mx-auto" />
          <h1 className="text-lg font-bold py-4">No Orders Yet !</h1>
        </div>
      )}
    </div>
  );
}

export default Cart;
