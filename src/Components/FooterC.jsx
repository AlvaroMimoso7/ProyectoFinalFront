import React from "react";
import { Col, Container, Row, Nav } from "react-bootstrap";
import ImagenesC from "./ImagenesC";
import "../css/FooterC.css";
import { NavLink } from "react-router-dom";

const FooterC = () => {
  return (
    <>
      <div className="footer-principal">
        <footer className="bg-navbar-propio">
            <div className="container">
              <hr />
              <div className="text-center mt-3">
               <a href="" className=""><img src="https://images.vexels.com/media/users/3/223136/isolated/preview/984f500cf9de4519b02b354346eb72e0-icono-de-facebook-redes-sociales.png" alt="" width={30} /></a>
               <a href=""><img src="https://static.vecteezy.com/system/resources/previews/017/743/717/non_2x/instagram-icon-logo-free-png.png" alt="" width={30} /></a>
               <a href=""><img src="https://static.vecteezy.com/system/resources/previews/016/716/452/non_2x/youtube-icon-free-png.png" alt="" width={30} /></a>
               <a href=""><img src="https://cdn.icon-icons.com/icons2/1906/PNG/512/iconfinder-linkedin-4550875_121338.png" alt="" width={30} /></a>
               
              
              </div>
             
              <div className="row">
                <div className="col">
                  <img src="https://i.pinimg.com/736x/53/cb/f9/53cbf95ad6cfa854e4f1bbee0ed43536.jpg" alt="" width={100} />
                </div>
                <div className="col">
                 <ul>
                    <li><a href="" className="text-decoration-none">Mi cuenta</a></li>
                    <li><a href="">Favoritos</a></li>
                    <li><a href="">Ayuda</a></li>
                  </ul>
                </div>
                <div className="col">
                <ul>
                    <li>Geneal Paz 576</li>
                    <li>0381-5783030</li>
                    <li>info@powergym.com.ar</li>
                  </ul>
                </div>
                <div className="col">
                   <img src="https://assets.specialized.com/i/specialized/DATAWEB2?$footer-logo$&fmt=auto" alt="" width={120} />
                </div>
              </div>
               <div className="text-end"><p>Copyright @todos los derechos reservados</p></div>
            </div>
        </footer>
      </div>
    
    </>
   

   
  );
};

export default FooterC
