import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css'; 
import { Link, Route } from 'react-router-dom';

const Home = () => {


  return (
    <div className="home-container background-image"> {/* Aplicamos la clase background-image directamente al componente Home */}
      <h1>Bienvenido</h1>
      <div className="mt-4">
        <Link to={'/login'} className='btn btn-primary'>Iniciar Sesión</Link>
      </div>
    </div>
  );
};

export default Home;
