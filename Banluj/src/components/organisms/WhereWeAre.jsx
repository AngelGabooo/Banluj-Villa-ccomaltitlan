import React from 'react';
import Typography from '../atoms/Typography';
import Icon from '../atoms/Icon';

const WhereWeAre = () => {
  return (
    <section className="container mx-auto px-4 py-16 md:py-20 lg:py-24 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Header Section */}
      <div className="text-center mb-16">
        <div className="inline-block p-3 bg-amber-100 rounded-full mb-6">
          <Icon name="map-pin" size="lg" className="text-amber-700" />
        </div>
        <Typography variant="h2" className="text-4xl md:text-5xl font-bold text-amber-900 mb-6 leading-tight">
          En Donde Nos Encontramos
        </Typography>
        <Typography variant="p" className="max-w-3xl mx-auto text-amber-700 text-xl leading-relaxed">
          Visítanos o contáctanos para descubrir más sobre nuestros productos.
        </Typography>
        <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Maps Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
        {/* Mapa 1 - Información */}
        <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-amber-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
          <div className="flex items-center mb-6">
            <div className="p-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mr-4">
              <Icon name="info" size="md" className="text-white" />
            </div>
            <Typography variant="h3" className="text-2xl font-bold text-amber-900">
              Información
            </Typography>
          </div>
          
          <div className="relative overflow-hidden rounded-xl shadow-lg mb-6">
            <iframe
              src="https://maps.google.com/maps?q=15.2179090,-92.5767516&z=15&output=embed"
              width="100%"
              height="300"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen
              aria-hidden="false"
              tabIndex="0"
              title="Mapa de Villa Comaltitlán - Oficina de Información"
              className="transition-all duration-500 group-hover:scale-105 filter sepia-[0.2] contrast-110"
            ></iframe>
            <div className="absolute top-4 right-4 bg-amber-600/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <Icon name="navigation" size="sm" className="text-white" />
            </div>
          </div>

          <div className="space-y-3">
            <div className="p-4 bg-amber-50 rounded-lg border-l-4 border-amber-500">
              <Typography variant="p" className="font-semibold text-amber-800">
                Coordenadas: 15.2179090, -92.5767516
              </Typography>
            </div>
            <Typography variant="p" className="text-amber-700 leading-relaxed">
              Ubicación de nuestra oficina de información donde podrás obtener detalles sobre todos nuestros productos y servicios.
            </Typography>
          </div>
        </div>

        {/* Mapa 2 - Tienda */}
        <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-amber-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
          <div className="flex items-center mb-6">
            <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mr-4">
              <Icon name="shopping-bag" size="md" className="text-white" />
            </div>
            <Typography variant="h3" className="text-2xl font-bold text-amber-900">
              Tienda Principal
            </Typography>
          </div>
          
          <div className="relative overflow-hidden rounded-xl shadow-lg mb-6">
            <iframe
              src="https://maps.google.com/maps?q=15.22940284191848,-92.5807688999473&z=15&output=embed"
              width="100%"
              height="300"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen
              aria-hidden="false"
              tabIndex="0"
              title="Mapa de Villa Comaltitlán - Sucursal Principal"
              className="transition-all duration-500 group-hover:scale-105 filter sepia-[0.2] contrast-110"
            ></iframe>
            <div className="absolute top-4 right-4 bg-orange-600/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <Icon name="navigation" size="sm" className="text-white" />
            </div>
          </div>

          <div className="space-y-3">
            <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
              <Typography variant="p" className="font-semibold text-orange-800">
                Coordenadas: 15.22940284191848, -92.5807688999473
              </Typography>
            </div>
            <Typography variant="p" className="text-amber-700 leading-relaxed">
              Visita nuestra tienda principal donde encontrarás toda nuestra gama de productos disponibles.
            </Typography>
          </div>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="bg-gradient-to-r from-white/90 to-amber-50/90 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-amber-100">
        <div className="text-center mb-10">
          <div className="inline-block p-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-6">
            <Icon name="phone" size="lg" className="text-white" />
          </div>
          <Typography variant="h2" className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
            Información de Contacto
          </Typography>
          <Typography variant="p" className="text-amber-700 text-lg max-w-2xl mx-auto">
            También puedes contactarnos directamente a través de estos medios. Estamos aquí para ayudarte.
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Correo Electrónico */}
          <div className="group bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-amber-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mr-4">
                <Icon name="mail" size="md" className="text-white" />
              </div>
              <Typography variant="h3" className="text-xl font-bold text-amber-900">
                Correo Electrónico
              </Typography>
            </div>
            <div className="p-3 bg-amber-50 rounded-lg">
              <Typography variant="p" className="text-amber-800 font-semibold">
                banluj.inform@gmail.com
              </Typography>
            </div>
          </div>

          {/* Teléfono */}
          <div className="group bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-amber-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-4">
                <Icon name="phone" size="md" className="text-white" />
              </div>
              <Typography variant="h3" className="text-xl font-bold text-amber-900">
                Teléfono
              </Typography>
            </div>
            <div className="p-3 bg-amber-50 rounded-lg">
              <Typography variant="p" className="text-amber-800 font-semibold">
                +52 918 118 6354
              </Typography>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="group bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-amber-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-gradient-to-r from-green-400 to-green-600 rounded-full mr-4">
                <Icon name="message-circle" size="md" className="text-white" />
              </div>
              <Typography variant="h3" className="text-xl font-bold text-amber-900">
                WhatsApp
              </Typography>
            </div>
            <div className="p-3 bg-amber-50 rounded-lg">
              <Typography variant="p" className="text-amber-800 font-semibold">
                +52 918 118 6354
              </Typography>
            </div>
          </div>

          {/* Ubicación */}
          <div className="group bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-amber-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full mr-4">
                <Icon name="map-pin" size="md" className="text-white" />
              </div>
              <Typography variant="h3" className="text-xl font-bold text-amber-900">
                Ubicación
              </Typography>
            </div>
            <div className="p-3 bg-amber-50 rounded-lg">
              <Typography variant="p" className="text-amber-800 font-semibold">
                Villa Comaltitlán, Chiapas, México
              </Typography>
            </div>
          </div>
        </div>

        {/* Horarios de Atención */}
        <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-8 rounded-2xl border border-amber-200">
          <div className="flex items-center mb-6">
            <div className="p-3 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full mr-4">
              <Icon name="clock" size="md" className="text-white" />
            </div>
            <Typography variant="h3" className="text-2xl font-bold text-amber-900">
              Horarios de Atención
            </Typography>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/80 p-4 rounded-xl shadow-md border border-amber-200">
              <Typography variant="p" className="text-amber-900 font-bold mb-2">
                Lunes - Viernes
              </Typography>
              <Typography variant="p" className="text-amber-700">
                7:00 AM - 7:00 PM
              </Typography>
            </div>
            
            <div className="bg-white/80 p-4 rounded-xl shadow-md border border-amber-200">
              <Typography variant="p" className="text-amber-900 font-bold mb-2">
                Sábado
              </Typography>
              <Typography variant="p" className="text-amber-700">
                7:00 AM - 7:00 PM
              </Typography>
            </div>
            
            <div className="bg-white/80 p-4 rounded-xl shadow-md border border-amber-200">
              <Typography variant="p" className="text-amber-900 font-bold mb-2">
                Domingo
              </Typography>
              <Typography variant="p" className="text-red-600 font-semibold">
                Cerrado
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhereWeAre;