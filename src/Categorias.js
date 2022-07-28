import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';






function Categorias(props) {
  return (
          <Card style={{ width: '18rem' }} className="card-cate">
            <Card.Img  className='card-img' variant="top" src={props.src} />
            <Card.Body>
              <Card.Title>{props.name}</Card.Title>
             
            </Card.Body>
            
          </Card>
  );
}

export default Categorias;