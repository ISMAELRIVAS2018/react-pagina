import './App.css';



// import Componente1 from  './primerComponente'

// css
import 'bootstrap/dist/css/bootstrap.min.css';
import Componente2 from './Navbar';
import ImageAndTextExample from './header';
import GridExample from './main';
import Carrusel from './carrusel';



function App() {
  return (
    <div className="App">
<Componente2></Componente2> 
<ImageAndTextExample></ImageAndTextExample> 
<h2 className='titulo'>Categorias</h2>  
<GridExample></GridExample>
<Carrusel></Carrusel>
    </div>
  );
}

export default App;
