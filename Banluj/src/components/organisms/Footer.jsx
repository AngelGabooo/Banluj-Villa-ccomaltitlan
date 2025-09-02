import React from 'react';
import Typography from '../atoms/Typography';
import Icon from '../atoms/Icon';
import logoImage from '../../assets/imagenes/logo.jpg';

const Footer = () => {
  return (
    <footer className="w-full" style={{ backgroundColor: '#e6e4de' }}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src={logoImage} 
                alt="Logo BANLUJ" 
                className="h-12 w-auto mr-3 rounded-lg" 
              />
              <Typography variant="h4" className="text-2xl font-bold text-gray-900">
                BANLUJ
              </Typography>
            </div>
            <Typography variant="p" className="text-gray-700">
              Muebles artesanales de la más alta calidad, diseñados para durar generaciones.
            </Typography>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
                <Icon name="facebook" size="lg" />
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
                <Icon name="instagram" size="lg" />
              </a>
              <a 
                href={`https://wa.me/5291811262599`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                <Icon name="whatsapp" size="lg" />
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <Typography variant="h4" className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">
              Explorar
            </Typography>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors flex items-center">
                  <Icon name="chevron-right" size="sm" className="mr-2 text-amber-600" />
                  Inicio
                </a>
              </li>
              <li>
                <a href="/productos" className="text-gray-700 hover:text-gray-900 transition-colors flex items-center">
                  <Icon name="chevron-right" size="sm" className="mr-2 text-amber-600" />
                  Productos
                </a>
              </li>
              <li>
                <a href="/contacto" className="text-gray-700 hover:text-gray-900 transition-colors flex items-center">
                  <Icon name="chevron-right" size="sm" className="mr-2 text-amber-600" />
                  Contacto
                </a>
              </li>
              <li>
                <a href="/favoritos" className="text-gray-700 hover:text-gray-900 transition-colors flex items-center">
                  <Icon name="chevron-right" size="sm" className="mr-2 text-amber-600" />
                  Favoritos
                </a>
              </li>
            </ul>
          </div>

          {/* Información de contacto */}
          <div>
            <Typography variant="h4" className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">
              Contacto
            </Typography>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Icon name="map-pin" size="sm" className="text-amber-600 mr-3 mt-1" />
                <span className="text-gray-700">Villa Comaltitlán, Chiapas, México</span>
              </li>
              <li className="flex items-center">
                <Icon name="phone" size="sm" className="text-amber-600 mr-3" />
                <a href="tel:+529181186354" className="text-gray-700 hover:text-gray-900 transition-colors">
                  +52 918 126 2599                </a>
              </li>
              <li className="flex items-center">
                <Icon name="mail" size="sm" className="text-amber-600 mr-3" />
                <a href="mailto:banluj.inform@gmail.com" className="text-gray-700 hover:text-gray-900 transition-colors">
                  banluj.inform@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Horario de atención */}
          <div>
            <Typography variant="h4" className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">
              Horario
            </Typography>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span className="text-gray-700">Lunes - Viernes</span>
                <span className="font-medium text-gray-900">7:00 AM - 7:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-700">Sábado</span>
                <span className="font-medium text-gray-900">7:00 AM - 7:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-700">Domingo</span>
                <span className="font-medium text-red-600">Cerrado</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider y copyright */}
        <div className="border-t border-gray-300 mt-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Typography variant="p" className="text-gray-700 text-center md:text-left mb-4 md:mb-0">
              © {new Date().getFullYear()} BANLUJ. Todos los derechos reservados.
            </Typography>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors text-sm">
                Términos y condiciones
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors text-sm">
                Política de privacidad
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors text-sm">
                Aviso legal
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;