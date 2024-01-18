import React from "react";
import { Col, Container, Row, Nav } from "react-bootstrap";
import ImagenesC from "./ImagenesC";
import "../css/FooterC.css";

const FooterC = () => {
  return (
    <>
      <footer className="bg-navbar-propio ">
        <Container fluid>
          <hr />
          <div className="row">
            <div className="col text-center">
              <a href="" class="text-dark p-2">
                <img
                  src="https://cdn.icon-icons.com/icons2/1109/PNG/512/1486053608-facebook_79182.png"
                  alt=""
                  height={30}
                />
              </a>
              <a href="" class="text-dark p-2">
                <img
                  src="https://i.pinimg.com/originals/3b/21/c7/3b21c7efd2ba9c119fb8d361acacc31d.png"
                  alt=""
                  height={30}
                />
              </a>
              <a href="" class="text-dark p-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968852.png"
                  alt=""
                  height={30}
                />
              </a>
              <a href="" class="text-dark p-2">
                <img
                  src="https://cdn.icon-icons.com/icons2/4029/PNG/512/twitter_x_new_logo_x_rounded_icon_256078.png"
                  alt=""
                  height={30}
                />
              </a>
              <a href="" class="text-dark p-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4138/4138151.png"
                  alt=""
                  height={30}
                />
              </a>
            </div>
          </div>
          <hr />
        </Container>

        <div className="container-fluid text-center">
          <Row className="mx-auto">
            <Col className=" mt-3 col-sm-12 col-md-6 col-lg-3">
              <ImagenesC
                url={
                  "https://i.pinimg.com/736x/53/cb/f9/53cbf95ad6cfa854e4f1bbee0ed43536.jpg"
                }
                alt={"imagen footer"}
                width={`100`}
              />
            </Col>

            <Col className=" mt-3 col-sm-12 col-md-6 col-lg-3">
              <Nav.Link href="#home">Trabaja con nosotros</Nav.Link>
              <Nav.Link href="#link">Terminos y Condiciones</Nav.Link>
              <Nav.Link href="#link">Ayuda</Nav.Link>
            </Col>
            <Col className=" mt-3 col-sm-12 col-md-6 col-lg-3">
              <p>General Paz 576</p>
              <p>0381-5783030</p>
              <p>info@powergym.com.ar</p>
            </Col>
            <Col className="mt-3 col-sm-12 col-md-6 col-lg-3">
              <ImagenesC
                url={
                  "https://segurosdl.com.ar/wp-content/uploads/2019/12/data_fiscal.png"
                }
                alt={"imagen footer"}
                width={`100`}
              />
            </Col>
          </Row>
          <div className="row text-end">
            <div className="col">
              <p className="mt-3">
                ©opyright 2024 Power Gym todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterC;
