import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Nivel1 from './img/metro_primer_nivel-2.png'
// import Nivel2 from './metro_SEGUNDO_NIVEL-1.png'
// import Nivel3 from './img/metro_primer_nivel-2.png'
// import Nivel4 from './soho_cascada-1.png'



// const categoriasCard = [
//     {name : 'acesorios',  src : Nivel1 },
//     {name : 'balon',  src : Nivel2 },
//     {name : 'calzado',  src : Nivel3},
//     {name : 'guantes',  src : Nivel4 },
    
//   ] 

function GridExample() {
  return (
    <Row xs={4} md={4} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={Nivel1 } />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default GridExample;