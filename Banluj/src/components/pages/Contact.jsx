import React from 'react';
import emailjs from '@emailjs/browser';
import MainTemplate from '../templates/MainTemplate';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import Typography from '../atoms/Typography';
import Icon from '../atoms/Icon';

const Contact = () => {
  const form = React.useRef(); 

  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const YOUR_PUBLIC_KEY = 'aGQ8lNrJDGdnlKJXO'; 

    try {
      await emailjs.sendForm('service_act4u87', 'template_3j668jb', form.current, YOUR_PUBLIC_KEY);
      await emailjs.sendForm('service_act4u87', 'template_p7h0b1u', form.current, YOUR_PUBLIC_KEY);

      console.log('Mensajes enviados exitosamente');
      setIsSubmitted(true);
      setIsLoading(false);

    } catch (error) {
      console.log('Error al enviar el mensaje:', error.text);
      setIsLoading(false);
      alert('Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <MainTemplate>
      {/* Hero Section con nuevo color de fondo */}
      <div className="relative" style={{ backgroundColor: '#e6e4de' }}>
        <div className="relative container mx-auto px-4 py-32 text-center">
          <div className="animate-fade-in-up">
            <Typography variant="h1" className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">
              Hablemos
            </Typography>
            <Typography variant="p" className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-700 leading-relaxed">
              ¿Tienes una idea increíble? Nos encantaría escucharla y ayudarte a hacerla realidad.
            </Typography>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Formulario de contacto */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <Typography variant="h2" className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Envíanos un mensaje
              </Typography>
              <Typography variant="p" className="text-gray-600 text-lg">
                Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas.
              </Typography>
            </div>
            
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-1">
              {isSubmitted ? (
                <div className="text-center py-12 animate-fade-in-up">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in">
                    <Icon name="check" size="xl" className="text-white" />
                  </div>
                  <Typography variant="h3" className="text-2xl font-bold mb-4 text-gray-900">
                    ¡Mensaje enviado exitosamente! 🎉
                  </Typography>
                  <Typography variant="p" className="text-gray-600 mb-8 text-lg">
                    Gracias por contactarnos. Nuestro equipo revisará tu mensaje y te responderá pronto.
                  </Typography>
                  <Button 
                    variant="primary" 
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
                    onClick={() => setIsSubmitted(false)}
                  >
                    <Icon name="edit" size="sm" className="mr-2" />
                    Enviar otro mensaje
                  </Button>
                </div>
              ) : (
                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Input
                      label="Nombre completo"
                      name="name" 
                      required
                      className="transition-all duration-300 focus:transform focus:scale-105"
                    />
                    
                    <Input
                      label="Correo electrónico"
                      name="email" 
                      type="email"
                      required
                      className="transition-all duration-300 focus:transform focus:scale-105"
                    />
                  </div>
                  <Input
                      label="Número de celular"
                      name="phone" 
                      type="tel"
                      className="transition-all duration-300 focus:transform focus:scale-105"
                    />
                  
                  <Input
                    label="¿En qué podemos ayudarte?"
                    name="message" 
                    multiline
                    rows={5}
                    required
                    className="transition-all duration-300 focus:transform focus:scale-105"
                  />
                  
                  <Button 
                    type="submit" 
                    variant="primary" 
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg text-lg py-4"
                  >
                    {isLoading ? (
                      <>
                        <Icon name="loader" size="sm" className="mr-2 animate-spin" />
                        Enviando mensaje...
                      </>
                    ) : (
                      <>
                        <Icon name="send" size="sm" className="mr-2" />
                        Enviar Mensaje
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
          
          {/* Información de contacto */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <Typography variant="h2" className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Información de contacto
              </Typography>
              <Typography variant="p" className="text-gray-600 text-lg">
                También puedes contactarnos directamente a través de estos medios.
              </Typography>
            </div>
            
            {/* Tarjetas de contacto */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl border border-blue-200/50 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon name="mail" size="lg" className="text-white" />
                  </div>
                  <div>
                    <Typography variant="h4" className="text-xl font-semibold mb-1 text-gray-900">
                      Correo Electrónico
                    </Typography>
                    <Typography variant="p" className="text-blue-600 font-medium hover:text-blue-800 cursor-pointer transition-colors">
                      banluj.inform@gmail.com
                    </Typography>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-2xl border border-green-200/50 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon name="phone" size="lg" className="text-white" />
                  </div>
                  <div>
                    <Typography variant="h4" className="text-xl font-semibold mb-1 text-gray-900">
                      Teléfono
                    </Typography>
                    <Typography variant="p" className="text-green-600 font-medium hover:text-green-800 cursor-pointer transition-colors">
                      +52 918 118 6354
                    </Typography>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-8 rounded-2xl border border-purple-200/50 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon name="whatsapp" size="lg" className="text-white" />
                  </div>
                  <div>
                    <Typography variant="h4" className="text-xl font-semibold mb-1 text-gray-900">
                      WhatsApp
                    </Typography>
                    <Typography variant="p" className="text-purple-600 font-medium hover:text-purple-800 cursor-pointer transition-colors">
                      +52 918 118 6354
                    </Typography>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-red-50 to-orange-100 p-8 rounded-2xl border border-red-200/50 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-red-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon name="map-pin" size="lg" className="text-white" />
                  </div>
                  <div>
                    <Typography variant="h4" className="text-xl font-semibold mb-1 text-gray-900">
                      Ubicación
                    </Typography>
                    <Typography variant="p" className="text-red-600 font-medium">
                      Villa Comaltitlán, Chiapas<br />
                      México
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Horarios */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <Icon name="clock" size="lg" className="text-white" />
                </div>
                <Typography variant="h3" className="text-2xl font-bold text-gray-900">
                  Horarios de Atención
                </Typography>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <Typography variant="p" className="font-medium text-gray-700">Lunes - Viernes</Typography>
                  <Typography variant="p" className="font-bold text-indigo-600">7:00 AM - 7:00 PM</Typography>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <Typography variant="p" className="font-medium text-gray-700">Sábado</Typography> 
                  <Typography variant="p" className="font-bold text-indigo-600">7:00 AM - 7:00 PM</Typography>
                </div>
                <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg">
                  <Typography variant="p" className="font-medium text-gray-700">Domingo</Typography>
                  <Typography variant="p" className="font-bold text-red-600">Cerrado</Typography>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sección de Mapas Moderna */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <Typography variant="h2" className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Nuestras Ubicaciones
            </Typography>
            <Typography variant="p" className="text-gray-600 text-lg max-w-2xl mx-auto">
              Visítanos en cualquiera de nuestras dos ubicaciones estratégicamente ubicadas para tu comodidad.
            </Typography>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="group">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white">
                  <div className="flex items-center">
                    <Icon name="store" size="lg" className="mr-3" />
                    <Typography variant="h3" className="text-2xl font-bold">Sucursal Principal</Typography>
                  </div>
                  <Typography variant="p" className="mt-2 opacity-90">
                    Nuestra ubicación principal con el inventario más completo
                  </Typography>
                </div>
                <div className="relative">
                  <iframe 
                     src="https://maps.google.com/maps?q=15.2179090,-92.5767516&z=15&output=embed"
                    width="100%" 
                    height="350" 
                    frameBorder="0" 
                    style={{border:0}}
                    allowFullScreen
                    aria-hidden="false"
                    tabIndex="0"
                    title="Mapa de Villa Comaltitlán - Sucursal Principal"
                    className="transition-all duration-300 group-hover:saturate-110"
                  ></iframe>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full">
                    <Icon name="navigation" size="sm" className="text-indigo-600" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-6 text-white">
                  <div className="flex items-center">
                    <Icon name="store" size="lg" className="mr-3" />
                    <Typography variant="h3" className="text-2xl font-bold">Sucursal Secundaria</Typography>
                  </div>
                  <Typography variant="p" className="mt-2 opacity-90">
                    Ubicación conveniente para servicio rápido y asesoría
                  </Typography>
                </div>
                <div className="relative">
                  <iframe 
                    src="https://maps.google.com/maps?q=15.22940284191848,-92.5807688999473&z=15&output=embed"
                    width="100%" 
                    height="350" 
                    frameBorder="0" 
                    style={{border:0}}
                    allowFullScreen
                    aria-hidden="false"
                    tabIndex="0"
                    title="Mapa de Villa Comaltitlán - Sucursal Secundaria"
                    className="transition-all duration-300 group-hover:saturate-110"
                  ></iframe>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full">
                    <Icon name="navigation" size="sm" className="text-emerald-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Estilos CSS adicionales */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scale-in {
          from {
            transform: scale(0);
          }
          to {
            transform: scale(1);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-scale-in {
          animation: scale-in 0.5s ease-out forwards;
        }
        
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </MainTemplate>
  );
};

export default Contact;