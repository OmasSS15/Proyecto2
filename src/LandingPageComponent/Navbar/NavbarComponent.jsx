/*import '../components_css/navbar.css'*/
import './NavbarComponent.css'

import React from 'react'

const NavbarComponent = () => {
  return (
    <div>
      <nav className="navbar">
        {/* Logo como imagen */}
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-image" />
        </div>

        {/* Links de navegación */}
        <ul className="pestañas">
          <li><a href="#Inicio">Inicio</a></li>
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

export default NavbarComponent

