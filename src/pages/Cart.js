import React from "react";
import CartItem from "../components/cart/CartItem";
import { RiArrowLeftSFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BsMinecart } from "react-icons/bs";
import { useThemeHook } from "../components/ThemeProvider";
import { useAddToCartMutation } from "../redux/slices/cartApi";

function Cart() {
  const [theme] = useThemeHook();
  const [addToCart, { isLoading, isError, isSuccess }] = useAddToCartMutation();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const cartData = {
    products: cartItems, // Your cart items data
    totalAmount: totalAmount, // Total amount
    totalQuantity: totalQuantity, // Total quantity
  };
  console.log(cartItems);
  const handleAddToCart = () => {
    addToCart(cartData)
      .unwrap()
      .then((response) => {
        console.log("Cart added successfully", response);
        navigate("successfully");
      })
      .catch((error) => {
        console.error(error, "error ya 3alaaaam");
      });
  };
  return (
    <div
      className={`${
        theme ? "bg-[#171717]" : " bg-white"
      } mx-auto relative max-w-3xl min-h-screen py-10`}
    >
      <div className="flex items-center gap-6 mx-4 ">
        <button
          onClick={() => navigate(-1)}
          className=" p-2 border-2 border-[#d3cfcf] shadow-lg rounded-lg"
        >
          <RiArrowLeftSFill
            size={25}
            className={`${theme ? "text-[#d3cfcf]" : ""}`}
          />
        </button>
        <h1
          className={`${
            theme ? "text-[#d3cfcf]" : ""
          } text-lg tracking-wide  font-bold`}
        >
          My Orders
        </h1>
      </div>
      <div className=" pt-6  gap-3 pb-24 grid grid-cols-1 sm:grid-cols-2">
        {cartItems.map((item, index) => (
          <CartItem item={item} key={index} />
        ))}
      </div>
      {isLoading && <p className="text-white">Adding to cart...</p>}
      {isError && <p className="text-red-600">Error adding to cart</p>}

      {cartItems.length > 0 ? (
        <>
          <div
            className={`${
              theme ? "bg-[#242424]" : " "
            } font-medium  bottom-0 relative  w-full  pb-24 text-[#C4C4C4]   items-center shadow-[0px_-16px_15px_-6px_rgba(0,0,0,0.20)]  rounded-lg flex-col space-y-4  px-6 mx-auto py-6 my-6`}
          >
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
          <div
            className={`${
              theme ? "bg-[#242424]" : " bg-white border-2"
            } w-full bottom-0 text-clip  absolute shadow-inner  max-w-4xl items-center  rounded-lg flex gap-10  px-6 mx-auto py-6 my-6`}
          >
            <button
              onClick={handleAddToCart}
              to="rating"
              className="bg-black rounded-lg    px-1 py-2  w-full text-white font-medium text-lg"
            >
              Check out
            </button>
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
