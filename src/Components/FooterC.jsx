import { Col, Container, Nav, NavLink, Row } from "react-bootstrap"
import ImagenesC from "./ImagenesC"
import '../css/FooterC.css'


const FooterC = () => {
  return (
    <>
      <footer className="bg-navbar-propio py-2">
        <Container fluid  className="">
          <div className="d-flex flex-row mt-3 mb-3 justify-content-center">
          
              <NavLink href="*" className="mx-2"><ImagenesC
               url={
               "https://cdn.icon-icons.com/icons2/2429/PNG/512/facebook_logo_icon_147291.png"
               }
               alt={"facebook"}
               width={"30"}
              /></NavLink>
             <NavLink href="*" className="mx-2"><ImagenesC
              url={
              "https://png.pngtree.com/png-clipart/20230401/original/pngtree-three-dimensional-instagram-icon-png-image_9015419.png"
              }
              alt={"instagram"}
              width={"30"}
              /></NavLink>
             <NavLink href="*" className="mx-2"><ImagenesC
              url={
              "https://static.vecteezy.com/system/resources/previews/016/716/452/non_2x/youtube-icon-free-png.png"
              }
              alt={"youtube"}
              width={"30"}
              /></NavLink>
             <NavLink href="*" className="mx-2"><ImagenesC
              url={
              "https://cdn.icon-icons.com/icons2/1906/PNG/512/iconfinder-linkedin-4550875_121338.png"
              }
              alt={"linkedin"}
              width={"30"}
              /></NavLink>
              <hr />
              <br />
           
          </div>
          <Row className="justify-content-center text-dark">
            <Col sm={12} md={2} lg={2}>
              <ImagenesC 
                url={
                  "https://i.pinimg.com/736x/53/cb/f9/53cbf95ad6cfa854e4f1bbee0ed43536.jpg"
                }
                alt={"imagen principal"}
                width={`75`}
                
              />
            </Col>
            <Col sm={12}md={2} lg={2}>
              <NavLink href="*">Trabaja con nosotros</NavLink>
              <NavLink href="*">Terminos y Condiciones</NavLink>
              <NavLink href="/contacto">Contactanos</NavLink>
            </Col>
            <Col sm={12} md={2} lg={2}>
              <NavLink href="sobre-nosotros">Nuestro staff</NavLink>
              <NavLink href="*">Nuestros clientes</NavLink>
              <NavLink href="/contacto">Ayuda</NavLink>
            </Col>
            <Col sm={12} md={2} lg={2} >
              <NavLink>General Paz 576</NavLink>
              <NavLink>0381-5783030</NavLink>
              <NavLink>info@powergym.com.ar</NavLink>
            </Col>
            <Col sm={12} md={2} lg={2} className="d-none d-lg-block">
              <ImagenesC
                url={
                  "https://play-lh.googleusercontent.com/le3s-_gKL2hVVlshaopT-oxv1HCxwmnQgjIRzw7y69Zr_3DoCzQFSc6hcLn8byz1mu_A=w240-h480-rw"
                }
                alt={"imagen afip"}
                width={`100`}
              />
            </Col>
            
           
          
          </Row>
          <div className="text-lg-end">
             <p>Copyright @powergym, todos los derechos reservados.</p>
          </div>
        </Container>
      </footer>
    </>
  )
}

export default FooterC