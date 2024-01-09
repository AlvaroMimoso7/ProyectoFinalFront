import {Routes, Route} from "react-router-dom";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import NavbarC from "../Components/NavbarC";
import FooterC from "../Components/FooterC";
import RegisterPage from "../pages/RegisterPage";
import Contacto from "../pages/Contacto";
import IniciarSesion from "../pages/IniciarSesion";
import SobreNosotros from "../pages/SobreNosotros";

const RoutesViews = () => {
  return (
    <>
    <NavbarC />
    <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/contacto" element={<Contacto />}/>
        <Route path="/sobre nosotros" element={<SobreNosotros />}/>
        <Route path="/iniciar sesion" element={<IniciarSesion />}/>
        <Route path="/register" element={<RegisterPage />}/>
        <Route path="*" element={<ErrorPage />}/>
    </Routes>
    <FooterC />
    </>

  );
};

export default RoutesViews;