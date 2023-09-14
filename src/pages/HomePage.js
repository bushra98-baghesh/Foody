import React from "react";
import Header from "../components/Home/Header";
import TopOffers from "../components/Home/TopOffers";
import Products from "../components/Home/Products";
import { useThemeHook } from "../components/ThemeProvider";
import { useLocation, useNavigate } from "react-router-dom";
function HomePage() {
  const navigate = useNavigate();
  const [theme] = useThemeHook();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const waiter = searchParams.get("waiter");
  console.log(waiter);
  return (
    <div
      className={`${
        theme ? "bg-[#171717]" : " bg-white"
      } mx-auto max-w-5xl py-6 min-h-screen`}
    >
      {waiter == 1 ? (
        <button
          onClick={() => navigate(-1)}
          className="text-white font-medium px-3 py-2 rounded-sm bg-gradient-to-r from-[#DC0D28] to-[#bd0b23]  my-2"
        >
          Back to Dachboard
        </button>
      ) : null}
      <Header />
      <TopOffers />
      <Products />
    </div>
  );
}

export default HomePage;
