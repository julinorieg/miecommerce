import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <NavLink to="/">
          <h3>Super Online!</h3>
        </NavLink>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Ofertas
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Sin tacc
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Verduleria
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Panificacion
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Todas las categorias
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Refrigerados
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Lacteos
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Golosinas
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <CartWidget />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
