import React from 'react';

export const Header = () => {
  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 border-bottom bg-danger">
      <div className="col-md-3 mb-2 mb-md-0r d-flex">
        <div className="contimgtitu rounded d-flex">
          <img src="../logo.png" alt="Logo" />
          <div className="d-flex align-items-center">
            <p className="titulo">Cines Formosa</p>
          </div>
        </div>
      </div>

      <form className="d-flex" role="search">
        <input
          className="form-control me-2 bg-secondary"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button
          className="btn btn-outline-secondary bg-dark text-white"
          type="submit"
        >
          Search
        </button>
      </form>

      <div className="col-md-3 text-end">
        <button type="button" className="btn bg-dark text-white me-2">
          Registrarse
        </button>
        <button type="button" className="btn bg-dark text-white">
          Iniciar sesión
        </button>
      </div>
    </header>
  );
};
