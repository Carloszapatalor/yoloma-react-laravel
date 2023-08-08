//import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Home  from "./components/Home/Home";

//Componentes Terapeutas
import MostrarTerapeutas from './components/Terapeutas/MostrarTerapeutas';
import EditarTerapeuta from './components/Terapeutas/EditarTerapeuta';
import CrearTerapeuta from './components/Terapeutas/CrearTerapeuta';

//Componentes Pacientes

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/terapeuta' element={<MostrarTerapeutas/>} />
          <Route path='/terapeuta/crear' element={<CrearTerapeuta/>} />
          <Route path='/terapeuta/editar/:id' element={<EditarTerapeuta/>} />
          

        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
