
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Nav from './components/Nav';
//import  Home  from "./components/Home/Home";
import CrearDepartamentos from "./components/Views/Departamentos/Create";
import EditarDepartamentos from "./components/Views/Departamentos/Edit";
import Departamentos from "./components/Views/Departamentos/index";
import Empleados from "./components/Views/Empleados/Index";
import Login from "./components/Views/Login";
import Register from "./components/Views/Register";
import ProtecteRoutes from "./components/ProtecteRoutes"

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
       <Nav />
       <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route element={<ProtecteRoutes/>}>
          <Route path='/' element={<Departamentos />} />
          <Route path='/crear' element={<CrearDepartamentos />} />
          <Route path='/edit/:id' element={<EditarDepartamentos />} />
          <Route path='/empleados' element={<Empleados />} />
        </Route>
        
       </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
