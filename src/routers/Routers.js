import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Spinner from "../components/skeletons/Spinner";
import Language from "../pages/Language";
const HomePage = lazy(() => import("../pages/HomePage"));
const Cart = lazy(() => import("../pages/Cart"));
const ProductDetails = lazy(() => import("../pages/ProductDetails"));
const SuccessfullOrder = lazy(() => import("../pages/SuccessfullOrder"));

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Language />} />
      <Route
        path="/home"
        element={
          <Suspense>
            <HomePage />
          </Suspense>
        }
      />

      <Route
        path="cart/successfully"
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
        path="/:id"
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
