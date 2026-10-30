
import { useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav className="custom-navbar">
        <div className="nav-container d-flex ">
         <img
        className="logo"
        src="/logo.png"
        alt="Persona entrenando"
      />

          {/* Botón hamburguesa para móviles */}
          <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-label="Abrir o cerrar menú"
          >
            ☰
          </button>

          {/* Lista de navegación */}
          <ul
            className={`nav-list ${menuOpen ? "menu-open" : ""}`}
          >
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#conocenos">Conocenos</a></li>
            <li><a href="#rutinas">Rutinas</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
