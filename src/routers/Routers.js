import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import Cart from "../pages/Cart";
import ProductDetails from "../pages/ProductDetails";
import CostomizeBurger from "../pages/CostomizeBurger";
import RatingPage from "../pages/RatingPage";
import SuccessfullOrder from "../pages/SuccessfullOrder";
function Routers() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="cart/rating" element={<RatingPage />} />
      <Route path="cart/rating/successfully" element={<SuccessfullOrder />} />
      <Route path="productpage" element={<ProductPage />} />
      <Route path="cart" element={<Cart />} />
      <Route path="productdetails" element={<ProductDetails />} />
      <Route path="customburger" element={<CostomizeBurger />} />
    </Routes>
  );
}

export default Routers;
