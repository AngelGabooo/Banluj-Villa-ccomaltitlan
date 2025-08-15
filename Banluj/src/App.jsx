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
import TactopielProducts, { TactopielProductDetail } from './components/pages/TactopielProducts';

const App = () => {
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
            <Route path="/tactopiel" element={<TactopielProducts />} />
            <Route path="/tactopiel/:id" element={<TactopielProductDetail />} />
          </Routes>
        </Router>
      </FavoritesProvider>
    </AuthProvider>
  );
};

export default App;