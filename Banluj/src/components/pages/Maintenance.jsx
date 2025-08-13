// components/pages/Maintenance.js
import React from 'react';
import Typography from '../atoms/Typography';
import logoImage from '../../assets/imagenes/logo.jpg'; // Asegúrate de tener esta ruta correcta

const Maintenance = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-100 p-4 sm:p-6">
      <div className="w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl shadow-orange-200/60">
        {/* Encabezado con logo */}
        <div className="relative h-48 w-full bg-orange-200">
          <img 
            src={logoImage} 
            alt="BANLUJ" 
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white drop-shadow-md sm:text-5xl">BANLUJ</h1>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="p-8">
          {/* Icono animado */}
          <div className="mb-6 flex justify-center">
            <div className="relative h-16 w-16 animate-pulse">
              <div className="absolute inset-0 rounded-full bg-orange-500 opacity-20"></div>
              <svg 
                className="absolute inset-0 h-full w-full text-orange-600" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              </svg>
            </div>
          </div>

          {/* Título */}
          <Typography 
            variant="h1" 
            className="mb-4 text-center text-3xl font-bold text-gray-900 sm:text-4xl"
          >
            Estamos mejorando para ti
          </Typography>

          {/* Descripción */}
          <Typography 
            variant="p" 
            className="mb-6 text-center text-gray-600 sm:text-lg"
          >
            Estamos realizando actualizaciones para ofrecerte una mejor experiencia de compra.
            <br />
            Disculpa las molestias y gracias por tu paciencia.
          </Typography>

          {/* Barra de progreso animada */}
          <div className="mb-8 h-2 w-full rounded-full bg-gray-200">
            <div 
              className="h-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-600" 
              style={{ width: '45%', animation: 'progress 2s ease-in-out infinite alternate' }}
            ></div>
          </div>

          {/* Contacto de emergencia */}
          <div className="rounded-lg bg-amber-50 p-4">
            <Typography variant="p" className="mb-2 text-center text-sm font-medium text-amber-800">
              ¿Necesitas asistencia inmediata?
            </Typography>
            <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center">
              <a 
                href="mailto:banluj.inform@gmail.com" 
                className="text-sm font-semibold text-amber-600 underline hover:text-amber-700"
              >
                banluj.inform@gmail.com
              </a>
              <span className="hidden text-gray-400 sm:block">|</span>
              <a 
                href="tel:8144384806" 
                className="text-sm font-semibold text-amber-600 underline hover:text-amber-700"
              >
                814 438 4806
              </a>
            </div>
          </div>

          {/* Redes sociales */}
          <div className="mt-8 flex justify-center space-x-4">
            {[
              { name: 'Facebook', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
              { name: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
              { name: 'WhatsApp', icon: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z' }
            ].map((social) => (
              <a 
                key={social.name}
                href="#" 
                className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-600 transition hover:bg-amber-200 hover:text-amber-700"
                aria-label={social.name}
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d={social.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Estilos de animación inline */}
      <style jsx>{`
        @keyframes progress {
          0% { width: 45%; }
          100% { width: 65%; }
        }
      `}</style>
    </div>
  );
};

export default Maintenance;