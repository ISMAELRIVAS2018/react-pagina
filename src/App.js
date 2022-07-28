import './App.css';



// import Componente1 from  './primerComponente'

// css
import 'bootstrap/dist/css/bootstrap.min.css';
import Componente2 from './Navbar';
import ImageAndTextExample from './header';
import Carrusel from './carrusel';
import Categorias from './Categorias';
import ImageSucribete from './Sucribete';
import GridExample from './Surcusales';
import ImageAndTextExample1 from './Surcusales';


// main
import acesorios from './img/accesorios.png'
import balon from './img/balones.png'
import calzado from './img/calzado.png'
import guantes from './img/guantes.png'
import mochila from './img/mochila.png'
import ropa from './img/ropa.png'


import Row from 'react-bootstrap/Row';


import React, { useState} from 'react'
 

 
  const categoriasCard = [
    {name : 'acesorios',  src : acesorios },
    {name : 'balon',  src : balon },
    {name : 'calzado',  src : calzado},
    {name : 'guantes',  src : guantes },
    {name : 'mochila',  src : mochila  },
    {name : 'ropa',  src : ropa  },
  ] 


function App() {

  return (
    <>
      <div className="App">
        <Componente2></Componente2>
        <ImageAndTextExample></ImageAndTextExample>
        <h2 className='titulo'>Categorias</h2>


        <Row className='cards justify-content-center'>
          {
             categoriasCard.map (elemento => (
              <Categorias 
                name={elemento.name}
                src={elemento.src}
              />
             ) )
          }
        </Row>


        <h2 className='titulo'>Categorias</h2>
        <Carrusel></Carrusel>
      </div>

      <div >
      <h2 className='titulo'>Categorias</h2>

        <ImageSucribete className = 'img' ></ImageSucribete>
      </div>
      <di>
      <GridExample></GridExample>
      </di>
      <ImageAndTextExample1></ImageAndTextExample1>
      
     
      
    </>
  );
}

export default App;
