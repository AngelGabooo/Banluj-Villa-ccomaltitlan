import React from 'react';
import MainTemplate from '../templates/MainTemplate';
import Carousel from '../organisms/Carousel';
import ProductGrid from '../organisms/ProductGrid';
import Typography from '../atoms/Typography';
import About from './About'; // Importa el nuevo componente

const carouselItems = [
  {
    image: 'https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    alt: 'Cama de diseño premiummmmmm',
    title: 'Dormitorios de Ensueño'
  },
  {
    image: 'https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    alt: 'Cabecera artesanal',
    title: 'Cabeceras Hechas a Mano'
  },
  {
    image: 'https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    alt: 'Detalle de madera tallada',
    title: 'Artesanía en Cada Detalle'
  }
];

const featuredProducts = [
  {
    id: 2,
    name: 'Cabecera Moderna',
    description: 'Diseño contemporáneo en nogal americano',
    price: 599.99,
    image: 'https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 2,
    name: 'Cabecera Moderna',
    description: 'Diseño contemporáneo en nogal americano',
    price: 599.99,
    image: 'https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 2,
    name: 'Cabecera Moderna',
    description: 'Diseño contemporáneo en nogal americano',
    price: 599.99,
    image: 'https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 2,
    name: 'Cabecera Moderna',
    description: 'Diseño contemporáneo en nogal americano',
    price: 599.99,
    image: 'https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },

  
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
            Descubre nuestra colección exclusiva de camas y cabeceras artesanales
          </Typography>
        </div>
        
        <Typography variant="h2" className="mb-8 text-2xl md:text-3xl font-bold text-center">
          Nuestros Productos
        </Typography>
        <ProductGrid products={featuredProducts} />
      </section>

      {/* Nueva sección "Sobre Nosotros" */}
      <About />
    </MainTemplate>
  );
};

export default Home;