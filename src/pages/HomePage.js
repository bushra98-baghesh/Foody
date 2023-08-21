import React from "react";
import Header from "../components/Home/Header";
import TopOffers from "../components/Home/TopOffers";

import Products from "../components/Home/Products";
import { useThemeHook } from "../components/ThemeProvider";

function HomePage() {
  const [theme] = useThemeHook();
  return (
    <div
      className={`${
        theme ? "bg-[#171717]" : " bg-white"
      } mx-auto max-w-5xl py-6`}
    >
      <Header />
      <TopOffers />
      <Products />
    </div>
  );
}

export default HomePage;
