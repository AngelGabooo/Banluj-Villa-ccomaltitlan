import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainTemplate from '../templates/MainTemplate';
import Typography from '../atoms/Typography';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';
import logoImage3 from '../../assets/imagenes/logo1.png';
import dormirImage from '../../assets/imagenes/dormir.png';
import patasImage from '../../assets/imagenes/patas.png';
import negroImage from '../../assets/imagenes/negro.webp';
import negro1Image from '../../assets/imagenes/negro1.png';
import negro2Image from '../../assets/imagenes/negro2.png';
import chocoImage from '../../assets/imagenes/chocholayte.png';
import pielImage from '../../assets/imagenes/camapiel.png';
import piel1Image from '../../assets/imagenes/tactopiel1.png';
import piel2Image from '../../assets/imagenes/tactopiel.png';
import telaImage from '../../assets/imagenes/telacafe.webp';
import tela1Image from '../../assets/imagenes/madera.webp';
import cabeImage from '../../assets/imagenes/cabe.webp';
import cabeI1mage from '../../assets/imagenes/cabenegro.webp';
import cabeI2mage from '../../assets/imagenes/cabechoco.webp';
import cabeI3mage from '../../assets/imagenes/cabebeige.webp';
import { useFavorites } from '../../context/FavoritesContext';
import cabecera3mage from '../../assets/imagenes/cabeceranegra1.png';
import cabeceraImage from '../../assets/imagenes/cabeceratacto.png';
import cabeceratela2Image from '../../assets/imagenes/cabeceratelagris1.png';
import cabeceratelabeigeImage from '../../assets/imagenes/cabeceratelabeige.png';
import cabecera6mage from '../../assets/imagenes/cabeceratact.png';
import capitoImage from '../../assets/imagenes/capitonadacafe.png';
import capito1Image from '../../assets/imagenes/capitonadacafe1.png';
import tac1Image from '../../assets/imagenes/tactogris.webp';
import tacImage from '../../assets/imagenes/tactogris2.webp';

const shippingZones = [
  { id: 1, name: 'Mapastepec - Escuintla - Huixtla - Tapachula', price: 0 },
  { id: 2, name: 'Pijijiapan', price: 400 },
  { id: 3, name: 'Tonala - Tuxtla', price: 800 },
  { id: 4, name: 'Fuera del rango de entregas', price: 0, priceText: 'A tratar al instante' },
];

const newProducts = [
  {
    id: "base_individual_001",
    name: "Base Individual",
    description: "Base de cama individual, robusta y sofisticada, perfecta para optimizar espacios reducidos sin renunciar al estilo.",
    longDescription: "Eleva el confort y la elegancia de tu habitación con nuestra base de cama individual, elaborada en resistente madera de pino de primera calidad. Su fino tapizado está disponible en dos tonos atemporales: chocolate y gris, combinando fácilmente con cualquier decoración. Diseñada para brindar máxima resistencia, soporta hasta 500 kg y cuenta con 6 patas para mayor estabilidad (4 de plástico de alta resistencia y 2 de metal cromado que aportan un toque moderno). Respaldada con 1 año de garantía para tu tranquilidad",
    price: 1900,
    category: "camas",
    material: "Tela",
    colors: ["Chocolate", "Gris"],
    loadCapacity: 500,
    warranty: "1 año",
    sizes: ["Individual", "Matrimonial", "Queen Size"],
    pricesBySize: {
      Individual: 1900,
      Matrimonial: 2000,
      "Queen Size": 2100,
    },
    images: [logoImage3, dormirImage, patasImage, negroImage, telaImage],
    rating: 4.5,
  },
  {
    id: "base_matrimonial_001",
    name: "Base Matrimonial",
    description: "Base de cama matrimonial, robusta y sofisticada, ideal para parejas.",
    longDescription: "Eleva el confort y la elegancia de tu habitación con nuestra base de cama matrimonial, elaborada en resistente madera de pino de primera calidad. Su fino tapizado está disponible en dos tonos atemporales: chocolate y gris, combinando fácilmente con cualquier decoración. Diseñada para brindar máxima resistencia, soporta hasta 500 kg y cuenta con 6 patas para mayor estabilidad (4 de plástico de alta resistencia y 2 de metal cromado que aportan un toque moderno). Respaldada con 1 año de garantía para tu tranquilidad",
    price: 2000,
    category: "camas",
    material: "Tela",
    colors: ["Chocolate", "Gris"],
    loadCapacity: 500,
    warranty: "1 año",
    sizes: ["Individual", "Matrimonial", "Queen Size"],
    pricesBySize: {
      Individual: 1900,
      Matrimonial: 2000,
      "Queen Size": 2100,
    },
    images: [logoImage3, dormirImage, patasImage, negroImage, telaImage],
    rating: 4.7,
  },
  {
    id: "base_queen_size_001",
    name: "Base Queen Size",
    description: "Base de cama Queen Size, robusta y sofisticada, ideal para un descanso espacioso.",
    longDescription: "Eleva el confort y la elegancia de tu habitación con nuestra base de cama Queen Size, elaborada en resistente madera de pino de primera calidad. Su fino tapizado está disponible en dos tonos atemporales: chocolate y gris, combinando fácilmente con cualquier decoración. Diseñada para brindar máxima resistencia, soporta hasta 500 kg y cuenta con 6 patas para mayor estabilidad (4 de plástico de alta resistencia y 2 de metal cromado que aportan un toque moderno). Respaldada con 1 año de garantía para tu tranquilidad",
    price: 2100,
    category: "camas",
    material: "Tela",
    colors: ["Chocolate", "Gris"],
    loadCapacity: 500,
    warranty: "1 año",
    sizes: ["Individual", "Matrimonial", "Queen Size"],
    pricesBySize: {
      Individual: 1900,
      Matrimonial: 2000,
      "Queen Size": 2100,
    },
    images: [logoImage3, dormirImage, patasImage, negroImage, telaImage],
    rating: 4.8,
  },
  {
    id: "base_queen_size_002",
    name: "Base Queen Size",
    description: "Base de cama Queen Size, robusta y sofisticada, ideal para un descanso espacioso.",
    longDescription: "Eleva el confort y la elegancia de tu habitación con nuestra base de cama Queen Size, elaborada en resistente madera de pino de primera calidad. Su fino tapizado está disponible en dos tonos atemporales: chocolate y gris, combinando fácilmente con cualquier decoración. Diseñada para brindar máxima resistencia, soporta hasta 500 kg y cuenta con 6 patas para mayor estabilidad (4 de plástico de alta resistencia y 2 de metal cromado que aportan un toque moderno). Respaldada con 1 año de garantía para tu tranquilidad",
    price: 2100,
    category: "camas",
    material: "Tela",
    colors: ["Chocolate", "Gris"],
    loadCapacity: 500,
    warranty: "1 año",
    sizes: ["Individual", "Matrimonial", "Queen Size"],
    pricesBySize: {
      Individual: 1900,
      Matrimonial: 2000,
      "Queen Size": 2100,
    },
    images: [logoImage3, dormirImage, patasImage, negroImage, telaImage],
    rating: 4.8,
  },
  {
    id: "cabecera_capitonada_001",
    name: "Cabecera Capitonada",
    description: "Cabecera elegante con diseño capitonado, perfecta para realzar el estilo de tu habitación.",
    longDescription: "Transforma tu dormitorio con nuestra cabecera de diseño capitonado, elaborada en resistente madera de pino y finamente tapizada en tela de alta calidad. Su acabado impecable y suave textura aportan un toque sofisticado y acogedor a cualquier espacio. Disponible en tamaños Individual, Matrimonial, Queen Size y King Size, para adaptarse a tus necesidades y brindar el complemento ideal a tu cama. La elección perfecta para quienes buscan elegancia y durabilidad en un solo producto.",
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
  },
  {
    id: "cabecera_capitonada_002",
    name: "Cabecera Capitonada Negra",
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
    images: [cabecera3mage],
    rating: 4.6,
  },
  {
    id: "cabecera_capitonada_003",
    name: "Cabecera Capitonada",
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
  },
  {
    id: "cabecera_capitonada_004",
    name: "Cabecera Capitonada en Tela",
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
    images: [cabeceratelabeigeImage],
    rating: 4.6,
  },
  {
    id: "base_tactopiel_individual_001",
    name: "Base Tactopiel Individual",
    description: "Base de cama individual en tactopiel, elegante y duradera.",
    longDescription: "Fabricada en madera de pino de alta calidad, tapizada en tactopiel con opciones de colores chocolate, gris, negra y beige. Soporta hasta 500 kg, incluye 6 patas (4 de plástico y 2 de metal cromado). Garantía de 1 año.",
    price: 1800,
    category: "camas",
    material: "Tactopiel",
    colors: ["Chocolate", "Gris", "Negro", "Beige"],
    loadCapacity: 500,
    warranty: "1 año",
    sizes: ["Individual", "Matrimonial", "Queen Size"],
    pricesBySize: {
      Individual: 1800,
      Matrimonial: 1900,
      "Queen Size": 1950,
    },
    images: [negro1Image, negroImage, negro2Image, piel1Image, chocoImage, pielImage, patasImage, tela1Image],
    rating: 4.5,
  },
  {
    id: "base_tactopiel_matrimonial_001",
    name: "Base Tactopiel Matrimonial",
    description: "Base de cama matrimonial en tactopiel, perfecta para parejas.",
    longDescription: "Fabricada en madera de pino de alta calidad, tapizada en tactopiel con opciones de colores chocolate, gris, negra y beige. Soporta hasta 500 kg, incluye 6 patas (4 de plástico y 2 de metal cromado). Garantía de 1 año.",
    price: 1900,
    category: "camas",
    material: "Tactopiel",
    colors: ["Chocolate", "Gris", "Negro", "Beige"],
    loadCapacity: 500,
    warranty: "1 año",
    sizes: ["Individual", "Matrimonial", "Queen Size"],
    pricesBySize: {
      Individual: 1800,
      Matrimonial: 1900,
      "Queen Size": 1950,
    },
    images: [negro1Image, negroImage, negro2Image, piel1Image, chocoImage, pielImage, patasImage, tela1Image],
    rating: 4.7,
  },
  {
    id: "base_tactopiel_queen_size_001",
    name: "Base Tactopiel Queen Size",
    description: "Base de cama Queen Size en tactopiel, ideal para un descanso espacioso.",
    longDescription: "Fabricada en madera de pino de alta calidad, tapizada en tactopiel con opciones de colores chocolate, gris, negra y beige. Soporta hasta 500 kg, incluye 6 patas (4 de plástico y 2 de metal cromado). Garantía de 1 año.",
    price: 1950,
    category: "camas",
    material: "Tactopiel",
    colors: ["Chocolate", "Gris", "Negro", "Beige"],
    loadCapacity: 500,
    warranty: "1 año",
    sizes: ["Individual", "Matrimonial", "Queen Size"],
    pricesBySize: {
      Individual: 1800,
      Matrimonial: 1900,
      "Queen Size": 1950,
    },
    images: [negro1Image, negroImage, negro2Image, piel1Image, chocoImage, pielImage, patasImage, tela1Image],
    rating: 4.8,
  },
  {
    id: "cabecera_capitonada_005",
    name: "Cabecera Capitonada Tacto Piel",
    description: "Cabecera elegante con diseño capitonado, disponible en varios tamaños.",
    longDescription: "Fabricada en madera de pino, tapizada en tacto piel de alta calidad. Disponible en tamaños Individual, Matrimonial, Queen Size y King Size. Añade un toque sofisticado a cualquier dormitorio.",
    price: 1200,
    category: "cabeceras",
    material: "Tactopiel",
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
    images: [cabeceraImage, cabecera6mage],
    rating: 4.6,
  },
  {
    id: "cabecera_capitonada_006",
    name: "Cabecera Capitonada Tacto Piel",
    description: "Cabecera elegante con diseño capitonado, disponible en varios tamaños.",
    longDescription: "Fabricada en madera de pino, tapizada en tacto piel de alta calidad. Disponible en tamaños Individual, Matrimonial, Queen Size y King Size. Añade un toque sofisticado a cualquier dormitorio.",
    price: 1200,
    category: "cabeceras",
    material: "Tactopiel",
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
    images: [capitoImage, capito1Image],
    rating: 4.6,
  },
  {
    id: "cabecera_capitonada_007",
    name: "Cabecera Capitonada Tacto Piel",
    description: "Cabecera elegante con diseño capitonado, disponible en varios tamaños.",
    longDescription: "Fabricada en madera de pino, tapizada en tacto piel de alta calidad. Disponible en tamaños Individual, Matrimonial, Queen Size y King Size. Añade un toque sofisticado a cualquier dormitorio.",
    price: 1200,
    category: "cabeceras",
    material: "Tactopiel",
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
    images: [tac1Image, tacImage],
    rating: 4.6,
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedZone, setSelectedZone] = useState(shippingZones[0].id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  const getColorIndex = (color) => {
    switch (color) {
      case 'Chocolate':
        return 4; // Índice de chocoImage
      case 'Gris':
        return 0; // Índice de dormirImage (ajustar si tienes imagen específica para Gris)
      case 'Negro':
        return 3; // Índice de negroImage
      case 'Beige':
        return 5; // Índice de pielImage
      default:
        return 0; // Fallback a logoImage3
    }
  };

  useEffect(() => {
    const loadProduct = () => {
      setIsLoading(true);
      const foundProduct = newProducts.find(p => p.id === id);
      if (foundProduct) {
        setProduct(foundProduct);
        setSelectedSize(foundProduct.sizes[0] || ''); // Establecer el primer tamaño disponible
        setSelectedColor(foundProduct.colors ? foundProduct.colors[0] : '');
        setCurrentImageIndex(foundProduct.colors ? getColorIndex(foundProduct.colors[0]) : 0);
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
          <Button onClick={() => navigate('/productos')} className="mt-4">
            Volver a productos
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
  const totalPrice = selectedShipping.priceText ? null : getPrice() + selectedShipping.price;

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
                src={product.images[currentImageIndex] || ''}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid grid-cols-4 gap-2 mt-4">
              {product.images.map((img, index) => (
                <button
                  key={`${product.id}-image-${index}`}
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
                    const newColor = e.target.value;
                    setSelectedColor(newColor);
                    setCurrentImageIndex(getColorIndex(newColor));
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
                    {zone.name} - {zone.priceText || (zone.price === 0 ? 'GRATIS' : `$${zone.price}`)}
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
                  {totalPrice !== null ? `$${totalPrice.toFixed(2)}` : `$${getPrice().toFixed(2)} + Envío a tratar al instante`}
                </Typography>
              </div>
              {selectedShipping.price > 0 && !selectedShipping.priceText && (
                <Typography variant="p" className="text-sm text-gray-500 mt-1">
                  (Incluye ${getPrice().toFixed(2)} del producto + ${selectedShipping.price} de envío)
                </Typography>
              )}
              {selectedShipping.priceText && (
                <Typography variant="p" className="text-sm text-gray-500 mt-1">
                  (Incluye ${getPrice().toFixed(2)} del producto + Envío a tratar al instante)
                </Typography>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button
                variant="primary"
                className="w-full flex items-center justify-center"
                onClick={() =>
                  window.open(
                    `https://wa.me/528144384806?text=Hola, estoy interesado en: ${product.name} (${getPrice().toFixed(2)}) - Material: ${product.material} - Tamaño: ${selectedSize || 'N/A'} - Color: ${selectedColor || 'N/A'} - Zona: ${shippingZones.find((z) => z.id === selectedZone).name}${selectedShipping.priceText ? ' (Envío a tratar al instante)' : ''} - BANLUJ`,
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

export default ProductDetail;