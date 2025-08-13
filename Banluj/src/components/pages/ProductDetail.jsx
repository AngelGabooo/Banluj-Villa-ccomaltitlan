import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainTemplate from '../templates/MainTemplate';
import Typography from '../atoms/Typography';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';
import Modal from '../molecules/Modal';
import ProductForm from '../organisms/ProductForm';
import { useAuth } from '../../context/AuthContext';
import { db } from '../../firebase';
import { doc, getDoc } from "firebase/firestore";

const shippingZones = [
  { id: 1, name: 'Mapastepec - Tapachula', price: 0 },
  { id: 2, name: 'Mapastepec - Tonalá', price: 300 },
  { id: 3, name: 'Fuera de región', price: 500 }
];

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isAdmin } = useAuth();
  const [selectedZone, setSelectedZone] = useState(shippingZones[0].id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      setIsLoading(true);
      try {
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProduct({ id: docSnap.id, ...docSnap.data() });
        } else {
          setProduct(null);
        }
      } catch (error) {
        console.error("Error loading product:", error);
      }
      setIsLoading(false);
    };

    loadProduct();
  }, [id]);

  const handleSaveProduct = () => {
    // Recargar el producto después de la edición (onSubmit en ProductForm ya maneja la actualización)
    // Aquí solo cerramos el modal y recargamos si es necesario
    setIsEditModalOpen(false);
    window.location.reload(); // Opcional: recarga la página para ver cambios
  };

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

  const selectedShipping = shippingZones.find(z => z.id === selectedZone);
  const totalPrice = product.price + selectedShipping.price;

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  return (
    <MainTemplate>
      <div className="container mx-auto px-4 py-12 mt-24">
        <div className="flex justify-between items-start mb-6">
          <Button 
            variant="text" 
            onClick={() => navigate(-1)} 
            className="flex items-center"
          >
            <Icon name="arrow-left" className="mr-2" />
            Volver atrás
          </Button>
          
          {isAdmin && (
            <Button 
              variant="secondary" 
              onClick={() => setIsEditModalOpen(true)}
              className="flex items-center"
            >
              <Icon name="edit" className="mr-2" />
              Editar Producto
            </Button>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative">
            <div className="aspect-w-1 aspect-h-1 rounded-xl overflow-hidden bg-gray-100">
              <img 
                src={product.images[currentImageIndex]} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="grid grid-cols-4 gap-2 mt-4">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`aspect-square rounded-md overflow-hidden ${currentImageIndex === index ? 'ring-2 ring-amber-500' : ''}`}
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

            {product.discount && (
              <div className="flex items-center mb-4">
                <span className="text-gray-500 line-through mr-2">
                  ${(product.price / (1 - product.discount/100)).toFixed(2)}
                </span>
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded-md text-sm">
                  {product.discount}% OFF
                </span>
              </div>
            )}

            <Typography variant="h2" className="text-2xl font-bold text-amber-600 mb-6">
              ${product.price.toFixed(2)}
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
                <li className="flex">
                  <span className="font-medium w-24">Estilo:</span>
                  <span>{product.style}</span>
                </li>
                <li className="flex">
                  <span className="font-medium w-24">Dimensiones:</span>
                  <span>{product.dimensions}</span>
                </li>
                <li className="flex">
                  <span className="font-medium w-24">Marca:</span>
                  <span className="font-medium text-amber-600">BANLUJ</span>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <Typography variant="h3" className="font-medium mb-2">
                Zona de envío:
              </Typography>
              <select
                value={selectedZone}
                onChange={(e) => setSelectedZone(parseInt(e.target.value))}
                className="block w-full p-2 border border-gray-300 rounded-md"
              >
                {shippingZones.map(zone => (
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
                  (Incluye ${product.price.toFixed(2)} del producto + ${selectedShipping.price} de envío)
                </Typography>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button 
                variant="primary" 
                className="w-full flex items-center justify-center"
                onClick={() => window.open(`https://wa.me/528144384806?text=Hola, estoy interesado en: ${product.name} (${totalPrice}) - BANLUJ - Zona: ${shippingZones.find(z => z.id === selectedZone).name}`, '_blank')}
              >
                <Icon name="whatsapp" className="mr-2" />
                Consultar por WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Modal 
        isOpen={isEditModalOpen} 
        onClose={() => setIsEditModalOpen(false)}
        title={`Editar ${product.name} - BANLUJ`}
      >
        <ProductForm 
          product={product} 
          onSubmit={handleSaveProduct}
          onCancel={() => setIsEditModalOpen(false)}
        />
      </Modal>
    </MainTemplate>
  );
};

export default ProductDetail;