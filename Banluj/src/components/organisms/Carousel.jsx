import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // <- Importa useNavigate
import Button from '../atoms/Button';
import Typography from '../atoms/Typography';

const Carousel = ({ items, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate(); // <- Hook para navegación

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, interval);
    return () => clearInterval(timer);
  }, [items.length, interval]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative mt-16 h-[70vh] min-h-[850px] max-h-[800px] w-full overflow-hidden">
      {items.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
        >
          <img 
            src={item.image} 
            alt={item.alt} 
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20 flex items-end pb-16 md:pb-24 lg:items-center lg:justify-center lg:pb-0">
            <div className="container px-6 mx-auto text-center">
              <Typography 
                variant="h1" 
                className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              >
                {item.title}
              </Typography>

              {/* Botón con color crema más bajito y navegación */}
              <Button 
                variant="primary" 
                size="lg"
                className="bg-stone-100 text-black font-bold shadow-lg hover:shadow-xl hover:bg-stone-50 transition-all duration-300"
                onClick={() => navigate('/productos')}
              >
                Ver productos
              </Button>

            </div>
          </div>
        </div>
      ))}

      {/* Indicadores */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/70'}`}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;