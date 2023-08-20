import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Spinner from "../components/skeletons/Spinner";
const HomePage = lazy(() => import("../pages/HomePage"));
const Cart = lazy(() => import("../pages/Cart"));
const ProductDetails = lazy(() => import("../pages/ProductDetails"));
const RatingPage = lazy(() => import("../pages/RatingPage"));
const SuccessfullOrder = lazy(() => import("../pages/SuccessfullOrder"));

function Routers() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense>
            <HomePage />
          </Suspense>
        }
      />
      <Route
        path="cart/rating"
        element={
          <Suspense fallback={<Spinner />}>
            <RatingPage />
          </Suspense>
        }
      />
      <Route
        path="cart/rating/successfully"
        element={
          <Suspense fallback={<Spinner />}>
            <SuccessfullOrder />
          </Suspense>
        }
      />
      <Route
        path="cart"
        element={
          <Suspense fallback={<Spinner />}>
            <Cart />
          </Suspense>
        }
      />
      <Route
        path="products/:id"
        element={
          <Suspense fallback={<Spinner />}>
            <ProductDetails />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default Routers;
