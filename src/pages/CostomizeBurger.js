import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addIngredient,
  removeIngredient,
  setDecreaseIngredientQTY,
} from "../redux/burgerBuilderSlice";
import TopBun from "../assets/top.png";
import BottomBun from "../assets/bottom.png";
import Meat from "../assets/meat.png";
import Tomato from "../assets/tomatto.png";
import Lettuce from "../assets/lettuce.png";
import Cheese from "../assets/cheese.png";
const burgerIngredients = [
  { id: "0", name: "Meat", price: 8, photo: Meat },
  { id: "1", name: "Tomato", price: 2, photo: Tomato },
  { id: "2", name: "Lettuce", price: 2, photo: Lettuce },
  { id: "3", name: "Cheese", price: 4, photo: Cheese },
];

function CostomizeBurger() {
  const ingredients = useSelector((state) => state.burgerBuilder.ingredients);

  const totalPrice = useSelector((state) => state.burgerBuilder.totalAmount);
  const handleAddIngredient = (ingredient) => {
    dispatch(addIngredient(ingredient));
  };

  const handleRemoveIngredient = (index) => {
    dispatch(removeIngredient(index));
  };
  const handleDecreaseIngredient = (index) => {
    dispatch(setDecreaseIngredientQTY(index));
  };

  const dispatch = useDispatch();

  return (
    <div className="mx-auto max-w-4xl h-screen py-10">
      <h1 className=" text-xl font-bold ">Custom Your Classic Burger</h1>
      <div className="flex bg-white items-center py-6 ">
        <div className="basis-1/2 py-6">
          <div className=" w-60 mx-auto">
            <img src={TopBun} alt="" className=" object-center object-cover" />
          </div>

          {ingredients.map((ingredient, index) => (
            <div key={index}>
              {ingredient.name === "Cheese" ? (
                <div className=" w-52 h-14 mx-auto ">
                  <img
                    src={Cheese}
                    alt=""
                    className=" object-center object-cover"
                  />
                </div>
              ) : ingredient.name === "Lettuce" ? (
                <div className=" w-52 h-14 mx-auto">
                  <img src={Lettuce} alt="" className=" object-center " />
                </div>
              ) : ingredient.name === "Meat" ? (
                <div className=" flex  h-14 items-center justify-center mx-auto">
                  <img
                    src={Meat}
                    alt=""
                    className=" object-center object-cover"
                  />
                </div>
              ) : ingredient.name === "Tomato" ? (
                <div className=" w-52 h-14  mx-auto">
                  <img
                    src={Tomato}
                    alt=""
                    className=" object-center object-cover"
                  />
                </div>
              ) : null}
            </div>
          ))}
          <div className=" w-60 mx-auto">
            <img
              src={BottomBun}
              alt=""
              className=" object-center object-cover"
            />
          </div>
        </div>
        <div className="basis-1/2  flex items-center justify-end mx-4 ">
          <ul>
            <h1 className="text-[#D1D1D1] font-bold text-xl py-2">
              ingredients
            </h1>
            {burgerIngredients.map((ingredient, index) => (
              <li
                key={index}
                className="flex mb-2  shadow-lg  overflow-hidden  border-2 border-[#d3cfcf] rounded-xl justify-between  bg-white "
              >
                <div className="rounded-xl flex items-center justify-center  overflow-hidden p-2">
                  <img
                    src={ingredient.photo}
                    alt="img"
                    className="  w-24  object-cover object-center"
                  />
                </div>
                <div className=" flex  flex-col items-start px-6 text-start justify-between py-4 sm:mx-4 mx-0 ">
                  <h1 className="font-bold  text-base  text-black mb-2">
                    {ingredient.name}
                  </h1>

                  <div className="flex md:flex-row flex-col  justify-between ">
                    <h1 className="font-bold text-base  text-[#DC0D28]">
                      {ingredient.price} $
                    </h1>
                  </div>
                </div>
                <div className="flex-col  border-2 rounded-lg  my-auto  ">
                  <button
                    onClick={() => {
                      handleAddIngredient(ingredient);
                    }}
                    className="text-[#DC0D28] border-2 rounded-lg px-2 font-medium"
                  >
                    +
                  </button>
                  <div className="  text-black h-7  text-center text-sm font-medium  py-1">
                    {ingredients.map((item) =>
                      item.id === ingredient.id ? (
                        <span>{item.quantity}</span>
                      ) : null
                    )}
                  </div>
                  <button
                    onClick={() => {
                      handleRemoveIngredient(ingredient.id);
                    }}
                    className="text-[#DC0D28] border-2 rounded-lg  px-2.5 font-medium "
                  >
                    -
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className=" text-base font-semibold text-black p-2">
        Total Price: {totalPrice} $
      </p>
      <button className=" w-2/3 mx-auto bg-black rounded-lg">
        <p className=" text-lg font-semibold text-white p-2">Add to Cart</p>
      </button>
    </div>
  );
}

export default CostomizeBurger;
