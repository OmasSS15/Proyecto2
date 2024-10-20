import React from 'react'
import '../components_css/navbar.css';
import logo from '../assets/Imagen/LOGO.png';
/*import './Navbar.css'; Cuando no estan en ninguna carpeta*/ 
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        {/* Logo como imagen */}
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-image" />
        </div>

        

        {/* Links de navegación */}
        <ul className="pestañas">
          <li><a href="#Inicio">
            {/* Cuando presiones el link te va rediccionar a la url que quieres ir */}
            <Link to="/prueba">
            Inicio
            </Link>
            </a></li>
          <li><a href="#Productos">Productos</a></li>
          <li><a href="#Contactos">Contactos</a></li>
        </ul>

        {/* Botones de registro e inicio de sesión */}
        <div className="botones">
          <button className="btn">Regístrate</button>
          <button className="btn">Iniciar Sesión</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
