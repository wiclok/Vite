import React from 'react';
import { Header } from './components/Header';
import { Filtros } from './components/filtros';
import { Tarjetas } from './components/Tarjetas';
import { Footer } from './components/Footer';
import './App.css';
function App() {
  return (
    <div className="wrapper">
      {/* Encabezado */}
      <Header />

      {/* Contenido principal */}
      <Filtros />

      {/* Sección de tarjetas */}
      <Tarjetas />

      {/* Pie de página */}
      <Footer />
    </div>
  );
}

export default App;
