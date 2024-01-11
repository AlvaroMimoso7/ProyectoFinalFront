import {Routes, Route} from "react-router-dom";
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

const RoutesViews = () => {
  return (
    <>
    <NavbarC />
    <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/register" element={<RegisterPage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/user" element={<UserPage />}/>
        <Route path="/admin" element={<AdminPage />}/>
        <Route path="/contacto" element={<Contacto />}/>
        <Route path="/product/:id" element={<ProductPage />}/>
        <Route path="/sobre nosotros" element={<SobreNosotros />}/>
       <Route path="*" element={<ErrorPage />}/>
    </Routes>
    <FooterC />
    </>

  );
};

export default RoutesViews;