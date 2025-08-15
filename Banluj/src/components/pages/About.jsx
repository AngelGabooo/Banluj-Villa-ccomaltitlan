import React from 'react';
import Typography from '../atoms/Typography';
import Button from '../atoms/Button';

// Importar imágenes locales
import tela1Image from '../../assets/imagenes/madera.webp';
import negroImage from '../../assets/imagenes/negro.webp';
import cabeImage from '../../assets/imagenes/cabenegro.webp';
import negro1Image from '../../assets/imagenes/negro1.webp';

const About = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Columna de imágenes */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={tela1Image} 
                  alt="Base de cama en madera" 
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={negroImage} 
                  alt="Base de cama color negro" 
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={cabeImage} 
                  alt="Cabecera color negro" 
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={negro1Image} 
                  alt="Base de cama negro diseño 2" 
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Columna de texto */}
          <div className="w-full lg:w-1/2 space-y-6">
            <Typography variant="h2" className="text-3xl md:text-4xl font-bold text-gray-900">
              Nuestra Historia
            </Typography>
            
            <Typography variant="p" className="text-gray-600">
              En BANLUJ nos hemos dedicado a transformar espacios con muebles que combinan tradición y modernidad. 
              Mantenemos viva la artesanía de siempre, sumando técnicas innovadoras para crear piezas que no solo destacan por su belleza, sino también por su resistencia y funcionalidad. 
              Cada cama y cabecera que fabricamos lleva impresa nuestra herencia de calidad y compromiso.
            </Typography>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <Typography variant="p" className="text-gray-600">
                  Materiales 100% naturales
                </Typography>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <Typography variant="p" className="text-gray-600">
                  Hecho a mano por artesanos
                </Typography>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
