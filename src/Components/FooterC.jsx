import { Col, Container, Nav, Row } from "react-bootstrap"
import ImagenesC from "./ImagenesC"
import '../css/FooterC.css'


const FooterC = () => {
  return (
    <>
      <footer className="bg-navbar-propio py-5">
        <Container>
          <Row>
            <Col>
              <ImagenesC
                url={
                  "https://i.pinimg.com/736x/53/cb/f9/53cbf95ad6cfa854e4f1bbee0ed43536.jpg"
                }
                alt={"imagen principal"}
                width={`75`}
              />
            </Col>
            <Col>
              <Nav.Link>Facebook</Nav.Link>
              <Nav.Link>Instagram</Nav.Link>
              <Nav.Link>Youtube</Nav.Link>
            </Col>
            <Col>
              <Nav.Link>Trabaja con nosotors</Nav.Link>
              <Nav.Link>Terminos y condiciones</Nav.Link>
              <Nav.Link>Contactanos</Nav.Link>
            </Col>
            <Col>
            <iframe src="" frameBorder="0"></iframe>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}

export default FooterC