import React from 'react';
import MainTemplate from '../templates/MainTemplate';
import Carousel from '../organisms/Carousel';
import ProductGrid from '../organisms/ProductGrid';
import Typography from '../atoms/Typography';
import WhereWeAre from '../organisms/WhereWeAre';
import About from './About';
import logoImage from '../../assets/imagenes/logo.jpg';
import logoImage3 from '../../assets/imagenes/logo1.png';
import tela1Image from '../../assets/imagenes/madera.webp';
import piel1Image from '../../assets/imagenes/tactopiel1.png';
import piel3Image from '../../assets/imagenes/tactopielnegro.webp';
import cabeImage from '../../assets/imagenes/cabe.webp';
import cabeceraImage from '../../assets/imagenes/cabeceratacto.png';

const carouselItems = [
  {
    image: logoImage,
    alt: 'Calidad BANLUJ',
    title: 'Garantía de hasta 1 Año'
  },
  {
    image: logoImage3,
    alt: 'Confort garantizado',
    title: 'Diseñados para tu Comodidad'
  },
  {
    image: tela1Image,
    alt: 'Atención personalizada',
    title: 'Trato Directo con el Cliente'
  }
];

const featuredProducts = [
  {
    id: "base_individual_001",
    name: "Base Individual en Tela",
    description: "Base de cama individual, robusta y elegante, tapizada en tela, ideal para espacios pequeños.",
    price: 1900,
    image: logoImage3
  },
  {
    id: "base_tactopiel_individual_001",
    name: "Base Matrimonial en Tacto Piel",
    description: "Base de cama matrimonial, perfecta para parejas, con diseño funcional y acabado en tacto piel.",
    price: 1800,
    image: piel3Image
  },
  {
    id: "cabecera_capitonada_005",
    name: "Cabecera Capitonada en Tacto Piel",
    description: "Perfecta para mejorar tu hogar, con diseño funcional y acabado en tacto piel.",
    price: 1200,
    image: cabeceraImage
  },
  {
    id: "cabecera_capitonada_001",
    name: "Cabecera Capitonada en Tela",
    description: "Cabecera elegante con diseño capitonado, disponible en varios tamaños y acabado en tela.",
    price: 2400,
    image: cabeImage
  }
];

const Home = () => {
  return (
    <MainTemplate>
      {/* Sección del carrusel */}
      <section className="relative">
        <Carousel items={carouselItems} />
      </section>
      
      {/* Sección de bienvenida */}
      <section className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="text-center mb-12 md:mb-16">
          <Typography variant="h2" className="mb-4 text-3xl md:text-4xl font-bold">
            Bienvenido a Muebles BANLUJ
          </Typography>
          <Typography variant="p" className="max-w-2xl mx-auto text-gray-600 text-lg">
            <a href="tel:+521234567890" className="text-blue-600 hover:underline">
            </a>{' '}
          </Typography>
        </div>
        
        {/* Sección de productos */}
        <Typography variant="h2" className="mb-8 text-2xl md:text-3xl font-bold text-center">
          Nuestros Productos
        </Typography>
        <ProductGrid products={featuredProducts} />
      </section>

      {/* Sección "Sobre Nosotros" */}
      <About />
      {/* Sección "En Donde Nos Encontramos" con mapas */}
      <WhereWeAre />
    </MainTemplate>
  );
};

export default Home;