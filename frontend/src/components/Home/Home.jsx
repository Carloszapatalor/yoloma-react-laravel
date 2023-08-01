import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css'; // Importamos App.css para usar estilos desde allí

const Home = () => {
  const buttonStyle = {
    marginRight: '10px',
  };

  return (
    <div className="home-container background-image"> {/* Aplicamos la clase background-image directamente al componente Home */}
      <h1>Bienvenido</h1>
      <div className="mt-4">
        <button className="btn btn-secondary">Iniciar sesión</button>
      </div>
    </div>
  );
};

export default Home;
