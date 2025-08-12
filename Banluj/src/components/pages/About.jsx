import React from 'react';
import Typography from '../atoms/Typography';
import Button from '../atoms/Button';

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
                  src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Producto terminado" 
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
               <img 
                  src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Producto terminado" 
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Producto terminado" 
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Producto terminado" 
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
              Desde 2025, 
            </Typography>
            
            <Typography variant="p" className="text-gray-600">
              Hoy, mantenemos esa misma artesanía tradicional combinada con técnicas modernas para 
              ofrecer productos que no solo son hermosos, sino también duraderos y funcionales. Cada 
              cama que fabricamos lleva consigo nuestra herencia de calidad y dedicación.
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
                  Materiales 100% naturales y sostenibles
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
                  Hecho a mano por artesanos expertos
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
                  Diseños personalizados según tus necesidades
                </Typography>
              </div>
            </div>
            
            <Button variant="primary" className="mt-6">
              Conoce nuestro proceso
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;