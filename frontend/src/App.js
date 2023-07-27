//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Componentes
import MostrarTerapeutas from './components/MostrarTerapeutas';
import EditarTerapeuta from './components/EditarTerapeuta';
import CrearTerapeuta from './components/CrearTerapetura';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<MostrarTerapeutas/>} />
         {/* <Route path='/crear' element={<CrearTerapeuta/>} /> */}
         {/* <Route path='/editar/:id' element={<EditarTerapeuta/>} /> */}
          

        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
