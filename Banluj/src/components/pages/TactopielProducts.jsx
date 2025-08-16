import React, { useState, useEffect } from 'react';
import MainTemplate from '../templates/MainTemplate';
import ProductGrid from '../organisms/ProductGrid';
import Typography from '../atoms/Typography';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';
import negroImage from '../../assets/imagenes/negro.webp';
import negro1Image from '../../assets/imagenes/negro1.png';

import negro2Image from '../../assets/imagenes/negro2.png';

import chocoImage from '../../assets/imagenes/chocholayte.webp';
import pielImage from '../../assets/imagenes/camapiel.png';
import logoImage3 from '../../assets/imagenes/logo1.png';
import dormirImage from '../../assets/imagenes/dormir.png';
import patasImage from '../../assets/imagenes/patas.png';
import piel1Image from '../../assets/imagenes/tactopiel1.png';
import piel2Image from '../../assets/imagenes/tactopiel.png';
import piel3Image from '../../assets/imagenes/tactopielnegro.png';

import piel4Image from '../../assets/imagenes/tactopielchoco.webp';
import { useFavorites } from '../../context/FavoritesContext';
import cabeceraImage from '../../assets/imagenes/cabeceratacto.png';
import cabeceratela2Image from '../../assets/imagenes/cabeceratelagris1.png';
import capitoImage from '../../assets/imagenes/capitonadacafe.png';
import tac1Image from '../../assets/imagenes/tactogris.webp';
import tacImage from '../../assets/imagenes/tactogris2.webp';

const shippingZones = [
  { id: 1, name: 'Mapastepec - Tapachula', price: 0 },
  { id: 2, name: 'Mapastepec - Tonalá', price: 300 },
  { id: 3, name: 'Fuera de región', price: 500 },
];

export const tactopielProducts = [
  {
    id: "base_tactopiel_individual_001",
    name: "Base Individual en Tacto Piel",
    description: "Base de cama individual en tactopiel, elegante y duradera.",
    longDescription: "Fabricada en madera de pino de alta calidad, tapizada en tactopiel con opciones de colores chocolate, gris, negra y beige. Soporta hasta 500 kg, incluye 6 patas (4 de plástico y 2 de metal cromado). Garantía de 1 año.",
    price: 1800,
    category: "camas",
    material: "tactopiel",
    colors: ["Chocolate", "Gris", "Negra", "Beige"],
    loadCapacity: 500,
    warranty: "1 año",
    legs: { count: 6, types: { plastic: 4, metal: 2 } },
    sizes: ["Individual"],
    pricesBySize: { Individual: 1800 },
    images: [piel3Image, negro2Image, chocoImage, pielImage],
    rating: 4.5,
    style: "moderno"
  },
  {
    id: "base_tactopiel_matrimonial_001",
    name: "Base Matrimonial en Tacto Piel",
    description: "Base de cama matrimonial en tactopiel, perfecta para parejas.",
    longDescription: "Fabricada en madera de pino de alta calidad, tapizada en tactopiel con opciones de colores chocolate, gris, negra y beige. Soporta hasta 500 kg, incluye 6 patas (4 de plástico y 2 de metal cromado). Garantía de 1 año.",
    price: 1900,
    category: "camas",
    material: "tactopiel",
    colors: ["Chocolate", "Gris", "Negra", "Beige"],
    loadCapacity: 500,
    warranty: "1 año",
    legs: { count: 6, types: { plastic: 4, metal: 2 } },
    sizes: ["Matrimonial"],
    pricesBySize: { Matrimonial: 1900 },
    images: [piel1Image, negro1Image, negro2Image, piel2Image],
    rating: 4.7,
    style: "moderno"
  },
  {
    id: "base_tactopiel_queen_size_001",
    name: "Base Queen Size en Tacto Piel",
    description: "Base de cama Queen Size en tactopiel, ideal para un descanso espacioso.",
    longDescription: "Fabricada en madera de pino de alta calidad, tapizada en tactopiel con opciones de colores chocolate, gris, negra y beige. Soporta hasta 500 kg, incluye 6 patas (4 de plástico y 2 de metal cromado). Garantía de 1 año.",
    price: 1950,
    category: "camas",
    material: "tactopiel",
    colors: ["Chocolate", "Gris", "Negra", "Beige"],
    loadCapacity: 500,
    warranty: "1 año",
    legs: { count: 6, types: { plastic: 4, metal: 2 } },
    sizes: ["Queen Size"],
    pricesBySize: { "Queen Size":   1950 },
    images: [piel4Image, negro1Image, negro2Image, chocoImage, pielImage],
    rating: 4.8,
    style: "moderno"
    
  },
  {
      id: "cabecera_capitonada_005",
      name: "Cabecera en Tacto Piel",
      description: "Cabecera elegante con diseño capitonado, disponible en varios tamaños.",
      description: "Base de cama matrimonial, perfecta para parejas, con diseño funcional y acabado en tacto piel.",
      price: 1200,
      category: "cabeceras",
      material: "tela",
      colors: [],
      loadCapacity: null,
      warranty: "1 año",
      legs: null,
      sizes: ["Individual", "Matrimonial", "Queen Size", "King Size"],
      pricesBySize: {
        Individual: 1200,
        Matrimonial: 1350,
        "Queen Size": 1450,
        "King Size": 1800
      },
      images: [cabeceraImage],
      rating: 4.6,
      style: "moderno"
    },
     {
      id: "cabecera_capitonada_006",
      name: "Cabecera en Tacto Piel",
      description: "Cabecera elegante con diseño capitonado, disponible en varios tamaños.",
      description: "Base de cama king Size, perfecta para parejas, con diseño funcional y acabado en tacto piel.",
      price: 1800,
      category: "cabeceras",
      material: "tela",
      colors: [],
      loadCapacity: null,
      warranty: "1 año",
      legs: null,
      sizes: ["Individual", "Matrimonial", "Queen Size", "King Size"],
      pricesBySize: {
          Individual: 1200,
        Matrimonial: 1350,
        "Queen Size": 1450,
        "King Size": 1800
      },
      images: [capitoImage],
      rating: 4.6,
      style: "moderno"
    },
      {
      id: "cabecera_capitonada_007",
      name: "Cabecera en Tacto Piel",
      description: "Cabecera elegante con diseño capitonado, disponible en varios tamaños.",
      description: "Base de cama matrimonial, perfecta para parejas, con diseño funcional y acabado en tacto piel.",
      price: 1350,
      category: "cabeceras",
      material: "tela",
      colors: [],
      loadCapacity: null,
      warranty: "1 año",
      legs: null,
      sizes: ["Individual", "Matrimonial", "Queen Size", "King Size"],
      pricesBySize: {
          Individual: 1200,
        Matrimonial: 1350,
        "Queen Size": 1450,
        "King Size": 1800
      },
      images: [tac1Image],
      rating: 4.6,
      style: "moderno"
    },
   
];

const TactopielProducts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [isLoading, setIsLoading] = useState(true);
  const [allProducts, setAllProducts] = useState([]);
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  useEffect(() => {
    setAllProducts(tactopielProducts);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, [searchTerm, sortBy, selectedColor]);

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
      !searchTerm || 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesColor = !selectedColor || product.colors.includes(selectedColor);
    return matchesSearch && matchesColor;
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
              COLECCIÓN TACTOPIEL
            </span>
          </div>
          <Typography variant="h1" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Camas Tactopiel BANLUJ
          </Typography>
          <Typography variant="p" className="text-xl text-amber-100 max-w-2xl mx-auto">
            Elegancia y durabilidad en cada diseño
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
              placeholder="Buscar camas Tactopiel..."
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
            
            <div className="px-6 pb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Color
                </label>
                <select
                  value={selectedColor}
                  onChange={(e) => setSelectedColor(e.target.value)}
                  className="block w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="">Todos los colores</option>
                  {tactopielProducts[0].colors.map((color) => (
                    <option key={color} value={color}>
                      {color}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </details>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
          <Typography variant="p" className="text-gray-600">
            Mostrando {filteredProducts.length} camas Tactopiel
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
                  No encontramos camas Tactopiel
                </Typography>
                <Typography variant="p" className="text-gray-500 mb-6">
                  Prueba ajustando tus filtros o términos de búsqueda
                </Typography>
                <Button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedColor('');
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

export default TactopielProducts;

const TactopielProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedZone, setSelectedZone] = useState(shippingZones[0].id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState('Individual');
  const [selectedColor, setSelectedColor] = useState('Chocolate');
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  useEffect(() => {
    const loadProduct = () => {
      setIsLoading(true);
      const foundProduct = tactopielProducts.find(p => p.id === id);
      if (foundProduct) {
        setProduct(foundProduct);
        setSelectedColor(foundProduct.colors ? foundProduct.colors[0] : '');
      } else {
        setProduct(null);
      }
      setIsLoading(false);
    };

    loadProduct();
  }, [id]);

  if (isLoading) {
    return (
      <MainTemplate>
        <div className="container mx-auto px-4 py-12 text-center">
          <Typography variant="h2">Cargando producto...</Typography>
        </div>
      </MainTemplate>
    );
  }

  if (!product) {
    return (
      <MainTemplate>
        <div className="container mx-auto px-4 py-12 text-center">
          <Typography variant="h2">Producto no encontrado</Typography>
          <Button onClick={() => navigate('/tactopiel')} className="mt-4">
            Volver a Tactopiel
          </Button>
        </div>
      </MainTemplate>
    );
  }

  if (!product.images || product.images.length === 0) {
    return (
      <MainTemplate>
        <div className="container mx-auto px-4 py-12 text-center">
          <Typography variant="h2">{product.name}</Typography>
          <div className="mt-6 max-w-2xl mx-auto">
            <div className="bg-gray-100 p-8 rounded-lg">
              <Icon name="maintenance" className="text-4xl text-amber-600 mx-auto mb-4" />
              <Typography variant="h3" className="text-xl font-medium mb-2">
                Estamos trabajando en mejorar tu experiencia
              </Typography>
              <Typography variant="p" className="text-gray-600 mb-4">
                Actualmente estamos en mantenimiento y pronto agregaremos las imágenes de este producto.
              </Typography>
              <Typography variant="p" className="text-gray-600">
                Disculpa las molestias. ¡Vuelve pronto para ver las fotos actualizadas!
              </Typography>
            </div>
          </div>
          <div className="mt-8">
            <Button onClick={() => navigate(-1)} className="mr-4">
              <Icon name="arrow-left" className="mr-2" />
              Volver atrás
            </Button>
            <Button
              variant="secondary"
              onClick={() => window.open(`https://wa.me/528144384806?text=Hola, estoy interesado en: ${product.name} - BANLUJ`, '_blank')}
              className="mt-4 md:mt-0"
            >
              <Icon name="whatsapp" className="mr-2" />
              Consultar por WhatsApp
            </Button>
          </div>
        </div>
      </MainTemplate>
    );
  }

  const getPrice = () => {
    if (product.pricesBySize && selectedSize) {
      return product.pricesBySize[selectedSize] || product.price;
    }
    return product.price;
  };

  const selectedShipping = shippingZones.find((z) => z.id === selectedZone);
  const totalPrice = getPrice() + selectedShipping.price;

  const getColorImage = () => {
    switch (selectedColor) {
      case 'Chocolate':
        return chocoImage;
      case 'Gris':
        return negro1Image;
      case 'Negra':
        return negro2Image;
      case 'Beige':
        return pielImage;
      default:
        return negroImage;
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
  };

  const handleFavoriteToggle = () => {
    if (isFavorite(product.id)) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites({ ...product, image: product.images[0] });
    }
  };

  return (
    <MainTemplate>
      <div className="container mx-auto px-4 py-12 mt-24">
        <div className="flex justify-between items-start mb-6">
          <Button variant="text" onClick={() => navigate(-1)} className="flex items-center">
            <Icon name="arrow-left" className="mr-2" />
            Volver atrás
          </Button>
          <Button
            variant="outline"
            className="p-2"
            onClick={handleFavoriteToggle}
          >
            <Icon name={isFavorite(product.id) ? "favorite" : "favorite_border"} className="text-red-500" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative">
            <div className="aspect-w-1 aspect-h-1 rounded-xl overflow-hidden bg-gray-100">
              <img
                src={getColorImage()}
                alt={`${product.name} - ${selectedColor}`}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid grid-cols-4 gap-2 mt-4">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`aspect-square rounded-md overflow-hidden ${
                    currentImageIndex === index ? 'ring-2 ring-amber-500' : ''
                  }`}
                >
                  <img
                    src={img}
                    alt={`Vista ${index + 1} de ${product.name}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md"
            >
              <Icon name="chevron-left" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md"
            >
              <Icon name="chevron-right" />
            </button>
          </div>

          <div>
            <div className="flex justify-between items-start mb-4">
              <Typography variant="h1" className="text-3xl font-bold">
                {product.name}
              </Typography>
              <span className="text-sm font-medium text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                BANLUJ
              </span>
            </div>

            <div className="flex items-center mb-4">
              <div className="flex items-center text-amber-500 mr-4">
                <Icon name="star" className="mr-1" />
                <span>{product.rating}</span>
              </div>
              <span className="text-gray-500">{product.category}</span>
            </div>

            <Typography variant="h2" className="text-2xl font-bold text-amber-600 mb-6">
              ${getPrice().toFixed(2)}
            </Typography>

            <Typography variant="p" className="text-gray-700 mb-6">
              {product.longDescription}
            </Typography>

            <div className="mb-6">
              <Typography variant="h3" className="font-medium mb-2">
                Especificaciones:
              </Typography>
              <ul className="space-y-1 text-gray-600">
                <li className="flex">
                  <span className="font-medium w-24">Material:</span>
                  <span>{product.material}</span>
                </li>
                {product.colors && product.colors.length > 0 && (
                  <li className="flex">
                    <span className="font-medium w-24">Colores:</span>
                    <span>{product.colors.join(', ')}</span>
                  </li>
                )}
                {product.loadCapacity && (
                  <li className="flex">
                    <span className="font-medium w-24">Capacidad:</span>
                    <span>{product.loadCapacity} kg</span>
                  </li>
                )}
                {product.warranty && (
                  <li className="flex">
                    <span className="font-medium w-24">Garantía:</span>
                    <span>{product.warranty}</span>
                  </li>
                )}
                {product.legs && (
                  <li className="flex">
                    <span className="font-medium w-24">Patas:</span>
                    <span>{product.legs.count} ({product.legs.types.plastic} de plástico, {product.legs.types.metal} de metal cromado)</span>
                  </li>
                )}
                <li className="flex">
                  <span className="font-medium w-24">Estilo:</span>
                  <span>{product.style}</span>
                </li>
                <li className="flex">
                  <span className="font-medium w-24">Marca:</span>
                  <span className="font-medium text-amber-600">BANLUJ</span>
                </li>
              </ul>
            </div>

            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-6">
                <Typography variant="h3" className="font-medium mb-2">
                  Tamaño:
                </Typography>
                <select
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className="block w-full p-2 border border-gray-300 rounded-md"
                >
                  {product.sizes.map((size) => (
                    <option key={size} value={size}>
                      {size} - ${(product.pricesBySize && product.pricesBySize[size]) ? product.pricesBySize[size].toFixed(2) : product.price.toFixed(2)}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {product.colors && product.colors.length > 0 && (
              <div className="mb-6">
                <Typography variant="h3" className="font-medium mb-2">
                  Color:
                </Typography>
                <select
                  value={selectedColor}
                  onChange={(e) => {
                    setSelectedColor(e.target.value);
                  }}
                  className="block w-full p-2 border border-gray-300 rounded-md"
                >
                  {product.colors.map((color) => (
                    <option key={color} value={color}>
                      {color}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div className="mb-6">
              <Typography variant="h3" className="font-medium mb-2">
                Zona de envío:
              </Typography>
              <select
                value={selectedZone}
                onChange={(e) => setSelectedZone(parseInt(e.target.value))}
                className="block w-full p-2 border border-gray-300 rounded-md"
              >
                {shippingZones.map((zone) => (
                  <option key={zone.id} value={zone.id}>
                    {zone.name} - {zone.price === 0 ? 'GRATIS' : `$${zone.price}`}
                  </option>
                ))}
              </select>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <div className="flex justify-between items-center">
                <Typography variant="h3" className="font-medium">
                  Total:
                </Typography>
                <Typography variant="h2" className="text-2xl font-bold text-amber-600">
                  ${totalPrice.toFixed(2)}
                </Typography>
              </div>
              {selectedShipping.price > 0 && (
                <Typography variant="p" className="text-sm text-gray-500 mt-1">
                  (Incluye ${getPrice().toFixed(2)} del producto + ${selectedShipping.price} de envío)
                </Typography>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button
                variant="primary"
                className="w-full flex items-center justify-center"
                onClick={() =>
                  window.open(
                    `https://wa.me/528144384806?text=Hola, estoy interesado en: ${product.name} (${totalPrice}) - Material: ${product.material} - Tamaño: ${selectedSize || 'N/A'} - Color: ${selectedColor} - Zona: ${shippingZones.find((z) => z.id === selectedZone).name} - BANLUJ`,
                    '_blank'
                  )
                }
              >
                <Icon name="whatsapp" className="mr-2" />
                Consultar por WhatsApp o por llamada
              </Button>
            </div>
          </div>
        </div>
      </div>
    </MainTemplate>
  );
};

export { TactopielProductDetail };