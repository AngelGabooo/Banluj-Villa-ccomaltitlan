import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Typography from '../atoms/Typography';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';
import { useFavorites } from '../../context/FavoritesContext';
import Modal from '../molecules/Modal';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const favorite = isFavorite(product.id);
  const [showInfoModal, setShowInfoModal] = useState(false);

  const toggleFavorite = () => {
    if (favorite) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  const hasDetails = product.longDescription && product.dimensions && product.material && product.style;

  const handleViewDetails = () => {
    if (hasDetails) {
      navigate(`/productos/${product.id}`);
    } else {
      setShowInfoModal(true);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-amber-50">
      <div className="relative h-64">
        <img
          src={
            product.images?.[0]?.startsWith('http')
              ? product.images[0]
              : product.images?.[0]
              ? `/api/image/${product.images[0]}`
              : ''
          }
          alt={product.name}
          className="w-full h-full object-cover"
        />
        
        <div className="absolute top-3 left-3 flex space-x-2">
          {product.discount && (
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              -{product.discount}%
            </span>
          )}
          <span className="bg-amber-600 text-white text-xs font-bold px-2 py-1 rounded">
            {product.rating}★
          </span>
        </div>
        
        <button
          onClick={toggleFavorite}
          className="absolute top-3 right-3 p-2 bg-white/90 rounded-full shadow-md hover:bg-red-100 transition-colors"
        >
          <Icon
            name={favorite ? "heart-filled" : "heart"}
            className={favorite ? "text-red-500" : "text-gray-400"}
          />
        </button>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <div>
            <Typography variant="h3" className="text-lg font-bold text-gray-800">
              {product.name}
            </Typography>
            <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-1 rounded">
              BANLUJ
            </span>
          </div>
          <Typography variant="p" className="text-lg font-bold text-amber-600">
            ${product.price.toFixed(2)}
          </Typography>
        </div>
        
        <Typography variant="p" className="text-gray-600 mt-1 mb-3">
          {product.description}
        </Typography>
        
        <div className="flex items-center text-sm text-gray-500 space-x-4 mb-4">
          {product.dimensions && (
            <span className="flex items-center">
              <Icon name="ruler" className="mr-1" />
              {product.dimensions}
            </span>
          )}
          {product.material && (
            <span className="flex items-center">
              <Icon name="layers" className="mr-1" />
              {product.material}
            </span>
          )}
        </div>
        
        <div className="space-y-2">
          <Button
            variant="primary"
            className="w-full flex items-center justify-center space-x-2"
            onClick={handleViewDetails}
          >
            <Icon name="eye" className="text-white" />
            <span>Ver detalles</span>
          </Button>
          
          <Button
            variant="outline"
            className="w-full flex items-center justify-center space-x-2"
            onClick={() => window.open(`https://wa.me/528144384806?text=Hola, estoy interesado en: ${product.name} (${product.price}) - BANLUJ`, '_blank')}
          >
            <Icon name="whatsapp" className="text-green-500" />
            <span>Consultar por WhatsApp</span>
          </Button>
        </div>
      </div>

      <Modal
        isOpen={showInfoModal}
        onClose={() => setShowInfoModal(false)}
        title={product.name}
        hideCloseButton
        transparentOverlay
        className="max-w-md"
      >
        <div className="text-center px-8 py-6">
          <div className="mx-auto mb-6">
            <div className="relative inline-flex">
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full blur opacity-75 animate-pulse"></div>
              <div className="relative inline-flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 text-white">
                <Icon name="clock" className="text-2xl" />
              </div>
            </div>
          </div>
          
          <Typography variant="h3" className="text-2xl font-bold text-gray-800 mb-3">
            Próximamente más detalles
          </Typography>
          
          <Typography variant="p" className="text-gray-600 mb-6 mx-auto leading-relaxed">
            Estamos preparando una descripción completa con imágenes detalladas de{' '}
            <span className="font-semibold text-amber-600">{product.name}</span>{' '}
            para que puedas conocerlo mejor.
          </Typography>
          
          <div className="flex flex-col sm:flex-row justify-center gap-3 mt-8">
            <Button
              variant="primary"
              onClick={() => setShowInfoModal(false)}
              className="px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              Entendido
            </Button>
            
            <Button
              variant="outline"
              onClick={() => {
                setShowInfoModal(false);
                window.open(
                  `https://wa.me/528144384806?text=Hola, tengo dudas sobre: ${product.name} (${product.price}) - BANLUJ`,
                  '_blank'
                );
              }}
              className="px-6 py-3 rounded-lg border-amber-300 text-amber-600 hover:bg-amber-50 transition-colors"
            >
              <Icon name="whatsapp" className="mr-2 text-green-500" />
              Consultar ahora
            </Button>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-100">
            <p className="text-xs text-gray-400">
              ¿Necesitas ayuda inmediata? Llámanos al{' '}
              <span className="text-amber-600 font-medium">81 4438 4806</span>
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ProductCard;