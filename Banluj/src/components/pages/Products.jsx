import React, { useState, useEffect } from 'react';
import MainTemplate from '../templates/MainTemplate';
import ProductGrid from '../organisms/ProductGrid';
import Typography from '../atoms/Typography';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';
import logoImage3 from '../../assets/imagenes/logo1.png';
import dormirImage from '../../assets/imagenes/dormir.png';
import patasImage from '../../assets/imagenes/patas.png';
import negroImage from '../../assets/imagenes/negro.webp';
import { tactopielProducts } from '../pages/TactopielProducts';
import telaImage from '../../assets/imagenes/telacafe.webp';
import cabeImage from '../../assets/imagenes/cabe.webp';
import cabeI1mage from '../../assets/imagenes/cabenegro.webp';
import cabeI2mage from '../../assets/imagenes/cabechoco.webp';
import cabeI3mage from '../../assets/imagenes/cabebeige.webp';
import cabecera3mage from '../../assets/imagenes/cabeceranegra1.png';
import cabeceratelabeigeImage from '../../assets/imagenes/cabeceratelabeige.png';

const categories = [
  { id: 'all', name: 'Todos', icon: 'all_inclusive' },
  { id: 'camas', name: 'Camas', icon: 'bed' },
  { id: 'cabeceras', name: 'Cabeceras', icon: 'headset' }
];

const materials = [
  { id: 'all', name: 'Todos' },
  { id: 'tela', name: 'Tela' },
  { id: 'tactopiel', name: 'Tactopiel' }
];

const styles = [
  { id: 'all', name: 'Todos' }
];

const sortOptions = [
  { value: 'name', label: 'Nombre A-Z' },
  { value: 'price-low', label: 'Precio: Menor a Mayor' },
  { value: 'price-high', label: 'Precio: Mayor a Menor' },
  { value: 'rating', label: 'Mejor Valorados' }
];

const newProducts = [
  {
    id: "base_individual_001",
    name: "Base Individual Tapizada en Tela",
    description: "Base de cama individual, robusta y elegante, ideal para espacios pequeños.",
    longDescription: "Fabricada en madera de pino de alta calidad, tapizada en tela con opciones de colores chocolate y gris. Soporta hasta 500 kg, incluye 6 patas (4 de plástico y 2 de metal cromado). Garantía de 1 año.",
    price: 1900,
    category: "camas",
    material: "Tela",
    colors: ["Chocolate", "Gris"],
    loadCapacity: 500,
    warranty: "1 año",
    legs: { count: 6, types: { plastic: 4, metal: 2 } },
    sizes: ["Individual"],
pricesBySize: {
     Individual: 1900,
      Matrimonial: 2000,
      "Queen Size": 2100,
    },    images: [logoImage3, dormirImage, patasImage],
    rating: 4.5,
    style: "moderno"
  },
  {
    id: "base_matrimonial_001",
    name: "Base Matrimonial Tapizada en Tela",
    description: "Base de cama matrimonial, perfecta para parejas con diseño funcional.",
    longDescription: "Fabricada en madera de pino, tapizada en tela con opciones de colores chocolate y gris. Soporta hasta 500 kg, incluye 6 patas (4 de plástico y 2 de metal cromado). Garantía de 1 año.",
    price: 2000,
    category: "camas",
    material: "Tela",
    colors: ["Chocolate", "Gris"],
    loadCapacity: 500,
    warranty: "1 año",
    legs: { count: 6, types: { plastic: 4, metal: 2 } },
    sizes: ["Matrimonial"],
    pricesBySize: {
     Individual: 1900,
      Matrimonial: 2000,
      "Queen Size": 2100,
    },
        images: [logoImage3, dormirImage, patasImage],
    rating: 4.7,
    style: "moderno"
  },
  {
    id: "base_queen_size_001",
    name: "Base Queen Size Tapizada en Tela",
    description: "Base de cama Queen Size, ideal para un descanso espacioso y cómodo.",
    longDescription: "Fabricada en madera de pino, tapizada en tela con opciones de colores chocolate y gris. Soporta hasta 500 kg, incluye 6 patas (4 de plástico y 2 de metal cromado). Garantía de 1 año.",
    price: 2100,
    category: "camas",
    material: "Tela",
    colors: ["Chocolate", "Gris"],
    loadCapacity: 500,
    warranty: "1 año",
    legs: { count: 6, types: { plastic: 4, metal: 2 } },
    sizes: ["Queen Size"],
pricesBySize: {
     Individual: 1900,
      Matrimonial: 2000,
      "Queen Size": 2100,
    },
        images: [logoImage3, dormirImage, patasImage],
    rating: 4.8,
    style: "moderno"
  },
  {
    id: "cabecera_capitonada_001",
    name: "Cabecera Tapizada en Tela",
    description: "Cabecera elegante con diseño capitonado, disponible en varios tamaños.",
    longDescription: "Fabricada en madera de pino, tapizada en tela de alta calidad. Disponible en tamaños Individual, Matrimonial, Queen Size y King Size. Añade un toque sofisticado a cualquier dormitorio.",
    price: 2400,
    category: "cabeceras",
    material: "Tela",
    colors: [],
    loadCapacity: null,
    warranty: "1 año",
    legs: null,
    sizes: ["Individual", "Matrimonial", "Queen Size", "King Size"],
    pricesBySize: {
      Individual: 2400,
      Matrimonial: 2600,
      "Queen Size": 2850,
      "King Size": 3900
    },
    images: [cabeImage],
    rating: 4.6,
    style: "moderno"
  },
  {
    id: "cabecera_capitonada_002",
    name: "Cabecera Tapizada en Tela",
    description: "Cabecera elegante con diseño capitonado, disponible en varios tamaños.",
    longDescription: "Fabricada en madera de pino, tapizada en tela de alta calidad. Disponible en tamaños Individual, Matrimonial, Queen Size y King Size. Añade un toque sofisticado a cualquier dormitorio.",
    price: 2400,
    category: "cabeceras",
    material: "tela",
    colors: [],
    loadCapacity: null,
    warranty: "1 año",
    legs: null,
    sizes: ["Individual", "Matrimonial", "Queen Size", "King Size"],
    pricesBySize: {
      Individual: 2400,
      Matrimonial: 2600,
      "Queen Size": 2850,
      "King Size": 3900
    },
    images: [cabecera3mage],
    rating: 4.6,
    style: "moderno"
  },
  {
    id: "cabecera_capitonada_003",
    name: "Cabecera Tapizada en Tela",
    description: "Cabecera elegante con diseño capitonado, disponible en varios tamaños.",
    longDescription: "Fabricada en madera de pino, tapizada en tela de alta calidad. Disponible en tamaños Individual, Matrimonial, Queen Size y King Size. Añade un toque sofisticado a cualquier dormitorio.",
    price: 2400,
    category: "cabeceras",
    material: "Tela",
    colors: [],
    loadCapacity: null,
    warranty: "1 año",
    legs: null,
    sizes: ["Individual", "Matrimonial", "Queen Size", "King Size"],
    pricesBySize: {
     Individual: 2400,
      Matrimonial: 2600,
      "Queen Size": 2850,
      "King Size": 3900
    },
    images: [cabeI2mage],
    rating: 4.6,
    style: "moderno"
  },
  {
    id: "cabecera_capitonada_004",
    name: "Cabecera Tapizada en Tela",
    description: "Cabecera elegante con diseño capitonado, disponible en varios tamaños.",
    longDescription: "Fabricada en madera de pino, tapizada en tela de alta calidad. Disponible en tamaños Individual, Matrimonial, Queen Size y King Size. Añade un toque sofisticado a cualquier dormitorio.",
    price: 2400,
    category: "cabeceras",
    material: "tela",
    colors: [],
    loadCapacity: null,
    warranty: "1 año",
    legs: null,
    sizes: ["Individual", "Matrimonial", "Queen Size", "King Size"],
    pricesBySize: {
        Individual: 2400,
      Matrimonial: 2600,
      "Queen Size": 2850,
      "King Size": 3900
    },
    images: [cabeceratelabeigeImage],
    rating: 4.6,
    style: "moderno"
  },
  
];

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [selectedStyle, setSelectedStyle] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [isLoading, setIsLoading] = useState(true);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    // Combinamos newProducts con tactopielProducts
    setAllProducts([...newProducts, ...tactopielProducts]);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, [selectedCategory, searchTerm, sortBy, selectedMaterial, selectedStyle]);

  const sortProducts = (products) => {
    return [...products].sort((a, b) => {
      switch (sortBy) {
        case 'price-low': return a.price - b.price;
        case 'price-high': return b.price - a.price;
        case 'rating': return b.rating - a.rating;
        case 'name':
        default: return a.name.localeCompare(b.name);
      }
    });
  };

  const filteredProducts = sortProducts(allProducts.filter(product => {
    const matchesSearch = 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = 
      selectedCategory === 'all' || product.category === selectedCategory;
    
    const matchesMaterial = 
      selectedMaterial === 'all' || product.material === selectedMaterial;
    
    const matchesStyle = 
      selectedStyle === 'all' || product.style === selectedStyle;
    
    return matchesSearch && matchesCategory && matchesMaterial && matchesStyle;
  })).map(product => ({
    ...product,
    image: product.images && product.images.length > 0 ? product.images[0] : null
  }));

  return (
    <MainTemplate>
      <div className="relative bg-gradient-to-br from-amber-800 to-amber-900 py-20 px-4 text-white mt-24">
        <div className="container mx-auto text-center">
          <div className="mb-4">
            <span className="inline-block bg-white text-amber-800 px-4 py-1 rounded-full text-sm font-bold mb-2">
              COLECCIÓN EXCLUSIVA
            </span>
          </div>
          <Typography variant="h1" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Muebles BANLUJ
          </Typography>
          <Typography variant="p" className="text-xl text-amber-100 max-w-2xl mx-auto">
            Calidad artesanal y diseño excepcional en cada pieza
          </Typography>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 bg-white rounded-xl shadow-md p-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Icon name="search" className="text-gray-400" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar productos BANLUJ..."
              className="block w-full pl-10 pr-3 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-lg"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                <Icon name="x" className="text-gray-400 hover:text-gray-600" />
              </button>
            )}
          </div>
        </div>

        <div className="mb-8 bg-white rounded-xl shadow-md overflow-hidden">
          <details open className="group">
            <summary className="list-none flex justify-between items-center p-6 cursor-pointer">
              <Typography variant="h3" className="text-xl font-semibold text-gray-800">
                Filtros
              </Typography>
              <Icon 
                name="chevron-down" 
                className="transform group-open:rotate-180 transition-transform text-gray-500" 
              />
            </summary>
            
            <div className="px-6 pb-6 grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Categoría
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-amber-100 text-amber-800 border border-amber-300'
                          : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      <Icon name={category.icon} className="text-lg" />
                      <span>{category.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Material
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {materials.map((material) => (
                    <button
                      key={material.id}
                      onClick={() => setSelectedMaterial(material.id)}
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        selectedMaterial === material.id
                          ? 'bg-amber-100 text-amber-800 border border-amber-300'
                          : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      {material.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Estilo
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {styles.map((style) => (
                    <button
                      key={style.id}
                      onClick={() => setSelectedStyle(style.id)}
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        selectedStyle === style.id
                          ? 'bg-amber-100 text-amber-800 border border-amber-300'
                          : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      {style.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </details>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
          <Typography variant="p" className="text-gray-600">
            Mostrando {filteredProducts.length} productos BANLUJ
          </Typography>
          
          <div className="flex items-center space-x-4">
            <label className="text-sm font-medium text-gray-700">Ordenar por:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="block w-full md:w-auto pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-amber-500 focus:border-amber-500 rounded-lg"
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
          </div>
        ) : (
          <>
            {filteredProducts.length > 0 ? (
              <ProductGrid products={filteredProducts} />
            ) : (
              <div className="text-center py-16 bg-white rounded-xl shadow-sm">
                <Icon name="search-off" className="mx-auto text-4xl text-gray-400 mb-4" />
                <Typography variant="h3" className="text-xl font-medium text-gray-700 mb-2">
                  No encontramos productos BANLUJ
                </Typography>
                <Typography variant="p" className="text-gray-500 mb-6">
                  Prueba ajustando tus filtros o términos de búsqueda
                </Typography>
                <Button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setSelectedMaterial('all');
                    setSelectedStyle('all');
                  }}
                  variant="primary"
                >
                  Limpiar filtros
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </MainTemplate>
  );
};

export default Products;