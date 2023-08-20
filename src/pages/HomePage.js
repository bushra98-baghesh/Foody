import React from "react";
import Header from "../components/Home/Header";
import TopOffers from "../components/Home/TopOffers";

import Products from "../components/Home/Products";

function HomePage() {
  return (
    <div className=" mx-auto max-w-5xl py-6 bg-white dark:bg-[#171717]">
      <Header />
      <TopOffers />
      <Products />
    </div>
  );
}

export default HomePage;
