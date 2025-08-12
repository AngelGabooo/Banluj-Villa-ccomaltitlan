import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Typography from '../atoms/Typography';
import Icon from '../atoms/Icon';
import Button from '../atoms/Button';
import { useFavorites } from '../../context/FavoritesContext';
import { useAuth } from '../../context/AuthContext';
// Importa tu imagen de logo
import logoImage from '../../assets/imagenes/logo.jpg'; // Asegúrate de tener esta ruta correcta

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const { favorites } = useFavorites();
  const { isAdmin, logout } = useAuth();
  const navigate = useNavigate();

  const tabs = [
    { name: 'Inicio', path: '/' },
    { name: 'Productos', path: '/productos' },
    { name: 'Contacto', path: '/contacto' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Detectar si está scrolleado
      setIsScrolled(currentScrollY > 10);
      
      // Mostrar/ocultar header basado en dirección del scroll
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        // Scrolleando hacia arriba o cerca del top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolleando hacia abajo y lejos del top
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header 
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out
        ${isVisible ? 'translate-y-0' : '-translate-y-full'}
        ${isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-0' 
          : 'bg-[#e6e4de] py-3' // Color de fondo solicitado
        }
      `}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className={`flex justify-between items-center ${isScrolled ? 'h-16' : 'h-20'} transition-all duration-300`}>
          {/* Logo - Versión mejorada con imagen más grande */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-4 group">
            <div className="flex items-center">
              {/* Imagen del logo más grande */}
              <div className="relative">
                <img 
                  src={logoImage} 
                  alt="BANLUJ Logo" 
                  className={`
                    object-contain transition-all duration-300
                    ${isScrolled ? 'h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12' : 'h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16'}
                    rounded-full shadow-lg group-hover:shadow-xl
                    border-2 border-amber-200 group-hover:border-amber-300
                  `}
                />
                {/* Efecto de brillo */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Texto del logo - BANLUJ con efectos */}
              <div className="ml-2 sm:ml-4">
                <Typography 
                  variant="h2" 
                  className={`
                    font-bold tracking-tight transition-all duration-300 select-none
                    ${isScrolled ? 'text-xl sm:text-2xl md:text-3xl' : 'text-2xl sm:text-3xl md:text-4xl'}
                    bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-600 
                    bg-clip-text text-transparent
                    group-hover:from-amber-700 group-hover:via-amber-600 group-hover:to-yellow-700
                    drop-shadow-sm
                  `}
                  style={{
                    fontFamily: '"Playfair Display", serif',
                    textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}
                >
                  BANLUJ
                </Typography>
                {/* Línea decorativa debajo del texto */}
                <div className={`
                  h-0.5 bg-gradient-to-r from-amber-600 to-yellow-600 
                  transition-all duration-300 group-hover:h-1
                  ${isScrolled ? 'w-8 sm:w-10 md:w-12' : 'w-10 sm:w-12 md:w-16'}
                  group-hover:w-full
                `}></div>
              </div>
            </div>
          </Link>
          
          {/* Navegación Central - Desktop */}
          <nav className="hidden lg:flex items-center justify-center flex-1 mx-8">
            <ul className="flex items-center space-x-8">
              {tabs.map((tab) => (
                <li key={tab.name}>
                  <Link 
                    to={tab.path}
                    className={`
                      relative py-3 px-5 rounded-xl font-semibold transition-all duration-300
                      ${isScrolled 
                        ? 'text-gray-700 hover:text-amber-600 hover:bg-amber-50/70' 
                        : 'text-gray-800 hover:text-amber-700 hover:bg-white/40'
                      }
                      after:content-[''] after:absolute after:bottom-1 after:left-1/2 
                      after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-amber-500 after:to-yellow-500
                      after:transition-all after:duration-300 after:transform after:-translate-x-1/2
                      hover:after:w-3/4
                      transform hover:scale-105
                    `}
                  >
                    {tab.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  to="/favoritos"
                  className={`
                    relative py-3 px-5 rounded-xl font-semibold transition-all duration-300
                    ${isScrolled 
                      ? 'text-gray-700 hover:text-red-600 hover:bg-red-50/70' 
                      : 'text-gray-800 hover:text-red-600 hover:bg-white/40'
                    }
                    after:content-[''] after:absolute after:bottom-1 after:left-1/2 
                    after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-red-500 after:to-pink-500
                    after:transition-all after:duration-300 after:transform after:-translate-x-1/2
                    hover:after:w-3/4
                    transform hover:scale-105
                  `}
                >
                  <div className="flex items-center">
                    <span>Favoritos</span>
                    {favorites.length > 0 && (
                      <span className={`
                        ml-2 px-2 py-1 text-xs rounded-full font-bold
                        bg-gradient-to-r from-red-500 to-pink-500 text-white
                        shadow-md animate-pulse
                      `}>
                        {favorites.length}
                      </span>
                    )}
                  </div>
                </Link>
              </li>
              {isAdmin && (
                <li>
                  <Link 
                    to="/admin"
                    className={`
                      relative py-3 px-5 rounded-xl font-semibold transition-all duration-300
                      ${isScrolled 
                        ? 'text-gray-700 hover:text-green-600 hover:bg-green-50/70' 
                        : 'text-gray-800 hover:text-green-700 hover:bg-white/40'
                      }
                      after:content-[''] after:absolute after:bottom-1 after:left-1/2 
                      after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-green-500 after:to-emerald-500
                      after:transition-all after:duration-300 after:transform after:-translate-x-1/2
                      hover:after:w-3/4
                      transform hover:scale-105
                    `}
                  >
                    Admin
                  </Link>
                </li>
              )}
            </ul>
          </nav>
          
          {/* Acciones del Header - Desktop y Mobile */}
          <div className="flex items-center space-x-1 sm:space-x-2">
            {/* Botón de favoritos con contador - Solo desktop */}
            <Link to="/favoritos" className="hidden sm:block">
              <Button 
                variant="ghost" 
                className={`
                  relative p-2 sm:p-3 rounded-xl transition-all duration-300 transform hover:scale-110
                  ${isScrolled 
                    ? 'hover:bg-gray-100/80 text-gray-700' 
                    : 'hover:bg-white/40 text-gray-800'
                  }
                  shadow-sm hover:shadow-md
                `}
              >
                <Icon 
                  name={favorites.length > 0 ? "heart-filled" : "heart"} 
                  size="lg" 
                  className={favorites.length > 0 ? "text-red-500" : "text-gray-600"}
                />
                {favorites.length > 0 && (
                  <span className={`
                    absolute -top-1 -right-1 w-5 h-5 rounded-full text-xs font-bold
                    flex items-center justify-center 
                    bg-gradient-to-r from-red-500 to-pink-500 text-white 
                    shadow-lg animate-bounce
                  `}>
                    {favorites.length}
                  </span>
                )}
              </Button>
            </Link>
            
            {/* Botón de login/logout - Solo desktop */}
            <div className="hidden sm:block">
              {isAdmin ? (
                <Button 
                  variant="ghost" 
                  onClick={logout}
                  className={`
                    p-2 sm:p-3 rounded-xl transition-all duration-300 transform hover:scale-110
                    ${isScrolled 
                      ? 'hover:bg-gray-100/80 text-gray-700' 
                      : 'hover:bg-white/40 text-gray-800'
                    }
                    shadow-sm hover:shadow-md
                  `}
                >
                  <Icon name="logout" size="lg" className="text-gray-600" />
                </Button>
              ) : (
                <Link to="/login">
                  <Button 
                    variant="ghost" 
                    className={`
                      p-2 sm:p-3 rounded-xl transition-all duration-300 transform hover:scale-110
                      ${isScrolled 
                        ? 'hover:bg-gray-100/80 text-gray-700' 
                        : 'hover:bg-white/40 text-gray-800'
                      }
                      shadow-sm hover:shadow-md
                    `}
                  >
                    <Icon name="login" size="lg" className="text-gray-600" />
                  </Button>
                </Link>
              )}
            </div>

            {/* Botón de menú hamburguesa para móvil */}
            <Button 
              variant="ghost" 
              className={`
                sm:hidden p-2 rounded-lg transition-all duration-300 transform hover:scale-110
                ${isScrolled 
                  ? 'hover:bg-gray-100/80 text-gray-700' 
                  : 'hover:bg-white/40 text-gray-800'
                }
                shadow-sm hover:shadow-md
              `}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Icon 
                name={isMenuOpen ? "x" : "menu"} 
                size="md" 
                className="text-gray-600" 
              />
            </Button>
          </div>
        </div>
        
        {/* Menú móvil */}
        <div className={`
          lg:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${isMenuOpen ? 'max-h-screen' : 'max-h-0'}
        `}>
          <nav className={`
            py-4 border-t
            ${isScrolled 
              ? 'border-gray-200/50 bg-white/95 backdrop-blur-sm' 
              : 'border-gray-200/50 bg-[#e6e4de]'
            }
          `}>
            <ul className="space-y-2 px-2">
              {tabs.map((tab) => (
                <li key={tab.name}>
                  <Link 
                    to={tab.path}
                    className={`
                      flex items-center py-3 px-4 rounded-xl font-semibold transition-all duration-300
                      ${isScrolled 
                        ? 'text-gray-700 hover:bg-gray-100/80' 
                        : 'text-gray-800 hover:bg-white/40'
                      }
                      transform hover:scale-105 active:scale-95
                    `}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon name="home" size="md" className="mr-3 text-amber-600" />
                    {tab.name}
                  </Link>
                </li>
              ))}
              
              {/* Favoritos en menú móvil */}
              <li>
                <Link 
                  to="/favoritos"
                  className={`
                    flex items-center justify-between py-3 px-4 rounded-xl font-semibold transition-all duration-300
                    ${isScrolled 
                      ? 'text-gray-700 hover:bg-gray-100/80' 
                      : 'text-gray-800 hover:bg-white/40'
                    }
                    transform hover:scale-105 active:scale-95
                  `}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex items-center">
                    <Icon 
                      name={favorites.length > 0 ? "heart-filled" : "heart"} 
                      size="md" 
                      className={`mr-3 ${favorites.length > 0 ? "text-red-500" : "text-red-400"}`}
                    />
                    <span>Favoritos</span>
                  </div>
                  {favorites.length > 0 && (
                    <span className="px-2 py-1 text-xs rounded-full font-bold bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-md">
                      {favorites.length}
                    </span>
                  )}
                </Link>
              </li>
              
              {/* Admin en menú móvil */}
              {isAdmin && (
                <li>
                  <Link 
                    to="/admin"
                    className={`
                      flex items-center py-3 px-4 rounded-xl font-semibold transition-all duration-300
                      ${isScrolled 
                        ? 'text-gray-700 hover:bg-gray-100/80' 
                        : 'text-gray-800 hover:bg-white/40'
                      }
                      transform hover:scale-105 active:scale-95
                    `}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon name="user" size="md" className="mr-3 text-green-600" />
                    Admin
                  </Link>
                </li>
              )}
              
              {/* Login/Logout en menú móvil */}
              <li className="sm:hidden border-t border-gray-200/50 pt-2 mt-4">
                {isAdmin ? (
                  <button 
                    onClick={() => {
                      logout();
                      setIsMenuOpen(false);
                    }}
                    className={`
                      w-full flex items-center py-3 px-4 rounded-xl font-semibold transition-all duration-300
                      ${isScrolled 
                        ? 'text-gray-700 hover:bg-red-50/80' 
                        : 'text-gray-800 hover:bg-red-100/40'
                      }
                      transform hover:scale-105 active:scale-95
                    `}
                  >
                    <Icon name="logout" size="md" className="mr-3 text-red-500" />
                    Cerrar Sesión
                  </button>
                ) : (
                  <Link 
                    to="/login"
                    className={`
                      flex items-center py-3 px-4 rounded-xl font-semibold transition-all duration-300
                      ${isScrolled 
                        ? 'text-gray-700 hover:bg-green-50/80' 
                        : 'text-gray-800 hover:bg-green-100/40'
                      }
                      transform hover:scale-105 active:scale-95
                    `}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon name="login" size="md" className="mr-3 text-green-600" />
                    Iniciar Sesión
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;