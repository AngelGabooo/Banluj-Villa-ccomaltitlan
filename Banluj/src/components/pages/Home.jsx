import React from 'react';
import MainTemplate from '../templates/MainTemplate';
import Carousel from '../organisms/Carousel';
import ProductGrid from '../organisms/ProductGrid';
import Typography from '../atoms/Typography'; // Solo una vez, como átomo
import WhereWeAre from '../organisms/WhereWeAre'; // Importamos WhereWeAre como organismo
import About from './About';
import logoImage from '../../assets/imagenes/logo.jpg';
import logoImage3 from '../../assets/imagenes/logo1.png';
import cabeI1mage from '../../assets/imagenes/cabenegro.webp';
import tela1Image from '../../assets/imagenes/madera.webp';

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
    name: "Base Individual",
    description: "Base de cama individual, robusta y elegante, ideal para espacios pequeños.",
    price: 1850,
    image: logoImage3
  },
  {
    id: "base_matrimonial_001",
    name: "Base Matrimonial",
    description: "Base de cama matrimonial, perfecta para parejas con diseño funcional.",
    price: 1950,
    image: logoImage3
  },
  {
    id: "base_queen_size_001",
    name: "Base Queen Size",
    description: "Base de cama Queen Size, ideal para un descanso espacioso y cómodo.",
    price: 2000,
    image: logoImage3
  },
  {
    id: "cabecera_capitonada_001",
    name: "Cabecera Capitonada",
    description: "Cabecera elegante con diseño capitonado, disponible en varios tamaños.",
    price: 2400,
    image: cabeI1mage
  }
];

const Home = () => {
  return (
    <MainTemplate>
      {/* Sección del carrusel */}
      <section className="relative">
        <Carousel items={carouselItems} />
      </section>
      
      {/* Sección de productos */}
      <section className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="text-center mb-12 md:mb-16">
          <Typography variant="h2" className="mb-4 text-3xl md:text-4xl font-bold">
            Bienvenido a Muebles BANLUJ
          </Typography>
          <Typography variant="p" className="max-w-2xl mx-auto text-gray-600 text-lg">
          </Typography>
        </div>
        
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