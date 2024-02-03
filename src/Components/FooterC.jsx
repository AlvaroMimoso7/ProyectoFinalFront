import React from "react";
import { Col, Container, Row, Nav } from "react-bootstrap";
import ImagenesC from "./ImagenesC";
import "../css/FooterC.css";
import { NavLink } from "react-router-dom";

const FooterC = () => {
  return (
    <>
      
        <div className="footer">
          <footer className="bg-navbar-propio p-5">
            <Container>
              <Row>
                <Col>
                  <ImagenesC
                    url={
                      "https://i.pinimg.com/736x/53/cb/f9/53cbf95ad6cfa854e4f1bbee0ed43536.jpg"
                    }
                    alt={"imagen footer"}
                    width={`100`}
                  />
                </Col>
                <Col>
                  <NavLink to="#home" className={"nav-link"}>
                    Facebook
                  </NavLink>
                  <NavLink to="#link" className={"nav-link"}>
                    Instagram
                  </NavLink>
                  <NavLink to="#link" className={"nav-link"}>
                    Youtube
                  </NavLink>
                </Col>
                <Col>
                  <NavLink to="#home" className={"nav-link"}>
                    Trabaja con nosotros
                  </NavLink>
                  <NavLink to="#link" className={"nav-link"}>
                    Terminos y Condiciones
                  </NavLink>
                  <NavLink to="#link" className={"nav-link"}>
                    Whats App
                  </NavLink>
                </Col>
                <Col>
                  <iframe src="" frameBorder="0"></iframe>
                </Col>
              </Row>
            </Container>
          </footer>
        </div>
      
    </>
  );
};

export default FooterC;
