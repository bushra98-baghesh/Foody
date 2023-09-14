import { useEffect, useState } from "react";
import "./App.css";
import { useThemeHook } from "./components/ThemeProvider";
import PreLoader from "./components/preloader/PreLoader";
import Routers from "./routers/Routers";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { setAddItemToCart } from "./redux/slices/cartSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const [theme] = useThemeHook();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const table = searchParams.get("table_num");
  console.log(table, "table");
  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await axios.post(
          "https://api.foody.gomaplus.tech/api/order/getOrderForEdit",
          { table_id: table }
        );
        localStorage.setItem("status", response.data.data.status);
        if (response.data.data.status === 1) {
          console.log(response.data.data.products, "bgbogbggggg");
          response.data.data.products.map((item) => {
            const cartItem = {
              id: item.id,
              name: item.name,
              name_ar: item.name_ar,
              image: item.image,
              price: item.price,
              extraIngredients: item.extra_ingredients,
              note: item.note,
            };
            console.log(item);
            // dispatch(setAddItemToCart(item));
          });
        }
        console.log(response.data.data);
      } catch (error) {
        console.error("Error fetching data from the API:", error);
      }
    };
    fetchStatus();
  }, []);
  return (
    <>
      {/* <PreLoader /> */}
      <div className={`${theme ? "bg-[#171717]" : " bg-white"} App`}>
        <Routers />
      </div>
    </>
  );
}

export default App;
