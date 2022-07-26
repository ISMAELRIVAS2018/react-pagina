import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// imagenes
import AccesoriosCard from './img/accesorios.png'


function GridExample() {
  return (
    <Row xs={1} md={3} className="g-4">
      {Array.from({ length: 5 }).map((_, idx) => (
        <Col>
          <Card>
          <Card.Img variant="top" src={AccesoriosCard} />
            <Card.Body>
             
             
            </Card.Body>
            <Card.Title>Card title</Card.Title>

          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default GridExample;