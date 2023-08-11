
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import  Home  from "./components/Home/Home";
import CrearDepartamentos from "./components/Views/Departamentos/Create";
import EditarDepartamentos from "./components/Views/Departamentos/Edit";
import Departamentos from "./components/Views/Departamentos/index";
import Empleados from "./components/Views/Empleados/Index";
import Login from "./components/Views/Login";
import Register from "./components/Views/Register";
import ProtecteRoutes from "./components/ProtecteRoutes"
import EditarTerapeuta from './components/Terapeutas/EditarTerapeuta';
import CrearTerapeuta from './components/Terapeutas/CrearTerapeuta';
import MostrarTerapeutas from './components/Terapeutas/MostrarTerapeutas';


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
