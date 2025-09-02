import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '../atoms/Typography';
import Icon from '../atoms/Icon';

const WhereWeAre = () => {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16 lg:py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="inline-block p-3 bg-amber-100 rounded-full mb-4">
          <Icon name="map-pin" size="md" className="text-amber-700" />
        </div>
        <Typography variant="h2" className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
          En Donde Nos Encontramos
        </Typography>
        <Typography variant="p" className="max-w-2xl mx-auto text-amber-700 text-lg">
          Visítanos o contáctanos para descubrir más sobre nuestros productos.
        </Typography>
        <div className="w-16 h-1 bg-amber-400 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Maps Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Mapa 1 - Información */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-amber-100 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <div className="p-2 bg-amber-500 rounded-full mr-3">
              <Icon name="info" size="sm" className="text-white" />
            </div>
            <Typography variant="h3" className="text-xl font-bold text-amber-900">
              Información
            </Typography>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-md mb-4">
            <iframe
              src="https://maps.google.com/maps?q=15.2179090,-92.5767516&z=15&output=embed"
              width="100%"
              height="250"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen
              aria-hidden="false"
              tabIndex="0"
              title="Mapa de Villa Comaltitlán - Oficina de Información"
            ></iframe>
          </div>

          <div className="p-3 bg-amber-50 rounded-lg border-l-4 border-amber-500">
            <Typography variant="p" className="font-medium text-amber-800">
              Donde te podremos brindar toda la información sobre nuestros productos.
            </Typography>
          </div>
        </div>

        {/* Mapa 2 - Tienda */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-amber-100 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <div className="p-2 bg-orange-500 rounded-full mr-3">
              <Icon name="shopping-bag" size="sm" className="text-white" />
            </div>
            <Typography variant="h3" className="text-xl font-bold text-amber-900">
              Tienda Principal
            </Typography>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-md mb-4">
            <iframe
              src="https://maps.google.com/maps?q=15.22940284191848,-92.5807688999473&z=15&output=embed"
              width="100%"
              height="250"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen
              aria-hidden="false"
              tabIndex="0"
              title="Mapa de Villa Comaltitlán - Sucursal Principal"
            ></iframe>
          </div>

          <div className="p-3 bg-orange-50 rounded-lg border-l-4 border-orange-500">
            <Typography variant="p" className="font-medium text-orange-800">
              Nuestra tienda principal donde podrás ver y comprar nuestros productos.
            </Typography>
          </div>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="bg-white p-8 rounded-xl shadow-lg border border-amber-100">
        <div className="text-center mb-8">
          <div className="inline-block p-3 bg-amber-500 rounded-full mb-4">
            <Icon name="phone" size="md" className="text-white" />
          </div>
          <Typography variant="h2" className="text-2xl md:text-3xl font-bold text-amber-900 mb-3">
            Información de Contacto
          </Typography>
          <Typography variant="p" className="text-amber-700 max-w-2xl mx-auto">
            También puedes contactarnos directamente a través de estos medios.
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Correo Electrónico */}
          <div className="bg-gray-50 p-4 rounded-lg border border-amber-100">
            <div className="flex items-center mb-3">
              <div className="p-2 bg-blue-500 rounded-full mr-3">
                <Icon name="mail" size="sm" className="text-white" />
              </div>
              <Typography variant="h3" className="text-lg font-bold text-amber-900">
                Correo Electrónico
              </Typography>
            </div>
            <Typography variant="p" className="text-amber-800 font-medium">
              banluj.inform@gmail.com
            </Typography>
          </div>

          {/* Teléfono */}
          <div className="bg-gray-50 p-4 rounded-lg border border-amber-100">
            <div className="flex items-center mb-3">
              <div className="p-2 bg-green-500 rounded-full mr-3">
                <Icon name="phone" size="sm" className="text-white" />
              </div>
              <Typography variant="h3" className="text-lg font-bold text-amber-900">
                Teléfono
              </Typography>
            </div>
            <Typography variant="p" className="text-amber-800 font-medium">
              +52 918 126 2599
            </Typography>
          </div>

          {/* WhatsApp */}
          <div className="bg-gray-50 p-4 rounded-lg border border-amber-100">
            <div className="flex items-center mb-3">
              <div className="p-2 bg-green-600 rounded-full mr-3">
                <Icon name="message-circle" size="sm" className="text-white" />
              </div>
              <Typography variant="h3" className="text-lg font-bold text-amber-900">
                WhatsApp
              </Typography>
            </div>
            <Typography variant="p" className="text-amber-800 font-medium">
              +52 918 126 2599
            </Typography>
          </div>

          {/* Ubicación */}
          <div className="bg-gray-50 p-4 rounded-lg border border-amber-100">
            <div className="flex items-center mb-3">
              <div className="p-2 bg-red-500 rounded-full mr-3">
                <Icon name="map-pin" size="sm" className="text-white" />
              </div>
              <Typography variant="h3" className="text-lg font-bold text-amber-900">
                Ubicación
              </Typography>
            </div>
            <Typography variant="p" className="text-amber-800 font-medium">
              Villa Comaltitlán, Chiapas, México
            </Typography>
          </div>
        </div>

        {/* Horarios de Atención */}
        <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
          <div className="flex items-center mb-4">
            <div className="p-2 bg-amber-600 rounded-full mr-3">
              <Icon name="clock" size="sm" className="text-white" />
            </div>
            <Typography variant="h3" className="text-xl font-bold text-amber-900">
              Horarios de Atención
            </Typography>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-3 rounded-lg">
              <Typography variant="p" className="text-amber-900 font-bold mb-1">
                Lunes - Viernes
              </Typography>
              <Typography variant="p" className="text-amber-700 text-sm">
                7:00 AM - 7:00 PM
              </Typography>
            </div>
            
            <div className="bg-white p-3 rounded-lg">
              <Typography variant="p" className="text-amber-900 font-bold mb-1">
                Sábado
              </Typography>
              <Typography variant="p" className="text-amber-700 text-sm">
                7:00 AM - 7:00 PM
              </Typography>
            </div>
            
            <div className="bg-white p-3 rounded-lg">
              <Typography variant="p" className="text-amber-900 font-bold mb-1">
                Domingo
              </Typography>
              <Typography variant="p" className="text-red-600 font-semibold text-sm">
                Cerrado
              </Typography>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Button Section */}
      <div className="text-center mt-12">
        <Link 
          to="/contacto"
          className="inline-flex items-center px-6 py-3 bg-amber-500 text-white font-semibold rounded-lg shadow-md hover:bg-amber-600 hover:shadow-lg transition-all duration-300"
        >
          <Icon name="send" size="sm" className="text-white mr-2" />
          Contáctanos Directo
        </Link>
        
        <Typography variant="p" className="mt-3 text-amber-600 text-sm">
          ¿Tienes alguna pregunta específica? ¡Estamos aquí para ayudarte!
        </Typography>
      </div>
    </section>
  );
};

export default WhereWeAre;