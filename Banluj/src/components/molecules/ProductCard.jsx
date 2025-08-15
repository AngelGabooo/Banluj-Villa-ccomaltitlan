import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '../atoms/Typography';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';
import { useFavorites } from '../../context/FavoritesContext';

const ProductCard = ({ id, name, description, price, image }) => {
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const isFav = isFavorite(id);

  const handleFavoriteToggle = () => {
    if (isFav) {
      removeFromFavorites(id);
    } else {
      addToFavorites({ id, name, description, price, image });
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 relative">
      <div className="aspect-w-4 aspect-h-3">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = '/path/to/fallback-image.jpg'; // Imagen de respaldo si falla
              console.error(`Error loading image for ${name}`);
            }}
          />
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
            <Typography variant="p" className="text-gray-500">
              Imagen no disponible
            </Typography>
          </div>
        )}
      </div>
      <div className="p-4">
        <Typography variant="h3" className="text-lg font-semibold text-gray-800 mb-2">
          {name}
        </Typography>
        <Typography variant="p" className="text-gray-600 text-sm mb-3 line-clamp-2">
          {description}
        </Typography>
        <div className="flex justify-between items-center mb-3">
          <Typography variant="h4" className="text-amber-600 font-bold">
            ${price.toFixed(2)}
          </Typography>
        </div>
        <div className="flex justify-between items-center gap-2">
          <Link to={`/productos/${id}`} className="flex-1">
            <Button variant="primary" className="w-full flex items-center justify-center">
              <Icon name="eye" className="mr-2" />
              Ver más
            </Button>
          </Link>
          <Button
            variant="secondary"
            className="flex-1 flex items-center justify-center"
            onClick={() => window.open(`https://wa.me/+529181186354?text=Hola, estoy interesado en: ${name} - $${price.toFixed(2)} - BANLUJ`, '_blank')}
          >
            <Icon name="whatsapp" className="mr-2" />
            Comprar
          </Button>
         <Button
  variant="outline"
  className="absolute top-2 right-2 p-2"
  onClick={handleFavoriteToggle}
>
  <Icon name={isFav ? "heart-filled" : "add"} className="text-red-500" />
</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;