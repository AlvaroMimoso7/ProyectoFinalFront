import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import NavbarC from "../Components/NavbarC";
import FooterC from "../Components/FooterC";
import RegisterPage from "../pages/RegisterPage";
import Contacto from "../pages/Contacto";
import SobreNosotros from "../pages/SobreNosotros";
import ProductPage from "../pages/ProductPage";
import LoginPage from "../pages/LoginPage";
import UserPage from "../pages/UserPage";
import AdminPage from "../pages/AdminPage";
import AdminUserPage from "../pages/AdminUserPage";
import AdminProductPage from "../pages/AdminProductPage";
import FavPages from "../pages/FavPages";
import CartPage from "../pages/CartPage";
import PrivatesRoutes from "../Components/PrivatesRoutes";

const RoutesViews = () => {
  return (
    <>
      <NavbarC />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user" element={
          <PrivatesRoutes role='user'>
            <UserPage />
          </PrivatesRoutes>
        } />
        <Route path="/admin" element={
          <PrivatesRoutes role='admin'>
            <AdminPage />
          </PrivatesRoutes>
        } />
        <Route
          path="/admin-users"
          element={
            <PrivatesRoutes role='admin'>
              <AdminUserPage />
            </PrivatesRoutes>
          }
        />
        <Route path="/admin-products" element={
          <PrivatesRoutes role='admin'>
            <AdminProductPage />
          </PrivatesRoutes>
        } />
        <Route path="/fav" element={
          <PrivatesRoutes role='user'>
            <FavPages />
          </PrivatesRoutes>
        } />
        <Route path="/cart" element={
          <PrivatesRoutes role='user'>
            <CartPage />
          </PrivatesRoutes>
        } />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <FooterC />
    </>
  );
};

export default RoutesViews;
