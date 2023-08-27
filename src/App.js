import { Routes, Route, useLocation } from "react-router-dom";
import MainNavigation from "./components/MainNavigation";
import HomePage from "./pages/Home";
import Footer from "./components/Footer/Footer";
import { AnimatePresence } from "framer-motion";
import Shop from "./pages/Shop";
import ProductDetailPage from "./pages/ProductDetails";
import CartPage from "./pages/Cart";
import AuthPage from "./pages/Auth";
import PrivateRoute from "./pages/PrivateRoute";
import ProfilePage from "./pages/Profile";
import useAuth from "./hooks/auth-hook";
import Loading from "./components/EmptyLoading/Loading";

function App() {
  const location = useLocation();
  const { loading } = useAuth();

  return (
    <>
      <MainNavigation />
      <AnimatePresence mode="wait">
        {!loading ? (
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/furniture" element={<Shop />} />
            <Route path="/rugs" element={<Shop />} />
            <Route path="/lighting" element={<Shop />} />
            <Route
              path="/product-page/:proId"
              element={<ProductDetailPage />}
            />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route element={<PrivateRoute />}>
              <Route path="/profile" element={<ProfilePage />} />
            </Route>
          </Routes>
        ) : (
          <Loading />
        )}
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
