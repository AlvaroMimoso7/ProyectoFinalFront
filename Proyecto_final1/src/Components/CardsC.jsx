import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cards = ({url, titulo, descripcion }) => {
  return (
    <>
    <Card>
      <Card.Img variant="top" src={url} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>
          {descripcion}
        </Card.Text>
        <Button variant="primary">Ver mas</Button>
      </Card.Body>
    </Card>
    </>
  );
};

export default Cards;
