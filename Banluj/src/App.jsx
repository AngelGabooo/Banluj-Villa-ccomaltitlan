// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FavoritesProvider } from './context/FavoritesContext';
import { AuthProvider } from './context/AuthContext';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Contact from './components/pages/Contact';
import Favorites from './components/pages/Favorites';
import ProductDetail from './components/pages/ProductDetail';
import Login from './components/pages/Login';
import Admin from './components/pages/Admin';
import Maintenance from './components/pages/Maintenance';

// Variable de control para el modo mantenimiento
const MAINTENANCE_MODE = true;

const App = () => {
  // Si está en modo mantenimiento, mostrar solo la página de mantenimiento
  if (MAINTENANCE_MODE) {
    return (
      <AuthProvider>
        <FavoritesProvider>
          <Router>
            <Routes>
              {/* Sobrescribe todas las rutas con la página de mantenimiento */}
              <Route path="*" element={<Maintenance />} />
            </Routes>
          </Router>
        </FavoritesProvider>
      </AuthProvider>
    );
  }

  // Código original cuando no está en mantenimiento
  return (
    <AuthProvider>
      <FavoritesProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Products />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/favoritos" element={<Favorites />} />
            <Route path="/productos/:id" element={<ProductDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </Router>
      </FavoritesProvider>
    </AuthProvider>
  );
};

export default App;