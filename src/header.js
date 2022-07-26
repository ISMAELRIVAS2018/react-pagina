import Card from 'react-bootstrap/Card';
import img from './img/heder.png'

function ImageAndTextExample() {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={img} />
      </Card>
    </>
  );
}

export default ImageAndTextExample;