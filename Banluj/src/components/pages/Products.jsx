import React, { useState, useEffect } from 'react';
import MainTemplate from '../templates/MainTemplate';
import ProductGrid from '../organisms/ProductGrid';
import Typography from '../atoms/Typography';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';
import { useAuth } from '../../context/AuthContext';

const categories = [
  { id: 'all', name: 'Todos', icon: 'all_inclusive' },
  { id: 'camas', name: 'Camas', icon: 'bed' },
  { id: 'cabeceras', name: 'Cabeceras', icon: 'headset' },
  { id: 'conjuntos', name: 'Conjuntos', icon: 'layers' }
];

const materials = [
  { id: 'all', name: 'Todos' },
  { id: 'madera', name: 'Madera' },
  { id: 'metal', name: 'Metal' },
  { id: 'tela', name: 'Tela' },
  { id: 'cuero', name: 'Cuero' }
];

const styles = [
  { id: 'all', name: 'Todos' },
  { id: 'moderno', name: 'Moderno' },
  { id: 'clasico', name: 'Clásico' },
  { id: 'rustico', name: 'Rústico' },
  { id: 'industrial', name: 'Industrial' }
];

const sortOptions = [
  { value: 'name', label: 'Nombre A-Z' },
  { value: 'price-low', label: 'Precio: Menor a Mayor' },
  { value: 'price-high', label: 'Precio: Mayor a Menor' },
  { value: 'rating', label: 'Mejor Valorados' }
];

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [selectedStyle, setSelectedStyle] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [isLoading, setIsLoading] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const { isAdmin } = useAuth();

  useEffect(() => {
    const loadProducts = () => {
      setIsLoading(true);
      const savedProducts = JSON.parse(localStorage.getItem('admin-products'));
      const defaultProducts = [
        {
          id: 1,
          name: 'Cama King Size Deluxe',
          description: 'Madera de roble macizo con acabado natural, estructura reforzada',
          brand: 'BANLUJ',
          price: 1299.99,
          images: [
            'https://images.unsplash.com/photo-1567538096631-e0c55bd6374c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1583845112206-5e7b0d6d7b9f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
          ],
          category: 'camas',
          material: 'madera',
          style: 'moderno',
          rating: 4.8,
          discount: 15,
          dimensions: '200x180 cm'
        },
        {
          id: 2,
          name: 'Cabecera Moderna en Nogal',
          description: 'Diseño contemporáneo con detalles en metal cepillado',
          brand: 'BANLUJ',
          price: 599.99,
          images: [
            'https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
          ],
          category: 'cabeceras',
          material: 'madera',
          style: 'moderno',
          rating: 4.7,
          discount: null,
          dimensions: '180x120 cm'
        },
        {
          id: 3,
          name: 'Juego de Dormitorio Completo',
          description: 'Incluye cama queen size, cabecera y 2 mesitas de noche',
          brand: 'BANLUJ',
          price: 2499.99,
          images: [
            'https://images.unsplash.com/photo-1583845112206-5e7b0d6d7b9f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
          ],
          category: 'conjuntos',
          material: 'madera',
          style: 'clasico',
          rating: 4.9,
          discount: 10,
          dimensions: 'Variadas'
        }
      ];
      
      setAllProducts(savedProducts || defaultProducts);
      setIsLoading(false);
    };

    loadProducts();
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