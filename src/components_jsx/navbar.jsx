import React from 'react'
import '../components_css/navbar.css';
/*import './Navbar.css'; Cuando no estan en ninguna carpeta*/ 

const Navbar = () => {
  return (
    <div>
        <nav className="navbar">
      <div className="logo">Mi Sitio</div>
      <ul className="nav-links">
        <li><a href="#home">Inicio</a></li>
        <li><a href="#about">Acerca</a></li>
        <li><a href="#services">Servicios</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
      
    </div>
  )
}

export default Navbar
