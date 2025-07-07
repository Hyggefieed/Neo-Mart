// src/routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Products from "../src/pages/Products";
import ProductDetails from "../src/pages/ProductDetails";
import Cart from "../src/pages/Cart";
import Checkout from "../src/pages/Checkout";
import Login from "../src/pages/Login";
import Register from "../src/pages/Register";
import Profile from "../src/pages/Profile";
import Orders from "../src/pages/Orders";
import MainLayout from "../src/layouts/MainLayout";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public & User Routes with Main Layout */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="profile" element={<Profile />} />
        <Route path="orders" element={<Orders />} />
      </Route>

      {/* 404 Fallback */}
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  );
};

export default AppRoutes;
