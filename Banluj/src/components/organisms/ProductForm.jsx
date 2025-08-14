// components/organisms/ProductForm.js
import React, { useState, useEffect } from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import Typography from '../atoms/Typography';
import Icon from '../atoms/Icon';
import { db } from '../../firebase';
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore';

const categories = [
  { value: 'camas', label: 'Camas' },
  { value: 'cabeceras', label: 'Cabeceras' },
  { value: 'conjuntos', label: 'Conjuntos' },
];

const materials = [
  { value: 'madera', label: 'Madera' },
  { value: 'metal', label: 'Metal' },
  { value: 'tela', label: 'Tela' },
  { value: 'cuero', label: 'Cuero' },
];

const styles = [
  { value: 'moderno', label: 'Moderno' },
  { value: 'clasico', label: 'Clásico' },
  { value: 'rustico', label: 'Rústico' },
  { value: 'industrial', label: 'Industrial' },
];

const ProductForm = ({ product, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    longDescription: '',
    price: '',
    brand: 'BANLUJ',
    category: 'camas',
    material: 'madera',
    style: 'moderno',
    dimensions: '',
    images: [],
    rating: '4.5',
    discount: '',
    shippingZones: [
      { zone: 'Mapastepec - Tapachula', price: 0 },
      { zone: 'Mapastepec - Tonalá', price: 300 },
      { zone: 'Fuera de región', price: 500 },
    ],
  });

  const [previewImages, setPreviewImages] = useState([]);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (product) {
      setFormData(product);
      setPreviewImages(product.images || []);
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleMultipleImagesUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      const newPreviews = files.map((file) => URL.createObjectURL(file));
      setPreviewImages((prev) => [...prev, ...newPreviews]);
      const newImages = files.map((file) => ({ file, isNew: true }));
      setFormData((prev) => ({ ...prev, images: [...prev.images, ...newImages] }));
    }
  };

  const removeImage = (index) => {
    const newImages = [...formData.images];
    const newPreviews = [...previewImages];
    newImages.splice(index, 1);
    newPreviews.splice(index, 1);
    setFormData((prev) => ({ ...prev, images: newImages }));
    setPreviewImages(newPreviews);
  };

 const uploadImages = async () => {
  const uploadedUrls = [];
  for (const image of formData.images) {
    if (typeof image === 'string') {
      uploadedUrls.push(image);
    } else if (image.isNew) {
      const formDataUpload = new FormData();
      formDataUpload.append('image', image.file);

      try {
        const response = await fetch('/api/upload-image', {
          method: 'POST',
          body: formDataUpload,
        });
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status} ${response.statusText}`);
        }
        const result = await response.json();
        if (result.url) {
          uploadedUrls.push(result.url);
        } else {
          throw new Error('No se recibió una URL válida');
        }
      } catch (error) {
        console.error('Error al subir la imagen:', error.message);
        throw error;
      }
    }
  }
  return uploadedUrls;
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);

    try {
      const imageUrls = await uploadImages();

      const productData = {
        ...formData,
        images: imageUrls,
        brand: 'BANLUJ',
        price: parseFloat(formData.price) || 0,
        rating: parseFloat(formData.rating) || 4.5,
        discount: formData.discount ? parseInt(formData.discount) : null,
        createdAt: new Date().toISOString(),
      };

      if (product) {
        await updateDoc(doc(db, 'products', product.id), productData);
      } else {
        await addDoc(collection(db, 'products'), productData);
      }

      onSubmit(productData);
    } catch (error) {
      console.error('Error al guardar el producto:', error.message);
      alert(`Error al guardar el producto: ${error.message}`);
    } finally {
      setUploading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Typography variant="h3" className="text-lg font-medium mb-2">
          Nombre del Producto
        </Typography>
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Ej: Cama King Size Deluxe"
          required
        />
      </div>

      <div>
        <Typography variant="h3" className="text-lg font-medium mb-2">
          Descripción Corta
        </Typography>
        <Input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Ej: Madera de roble macizo con acabado natural"
          required
        />
      </div>

      <div>
        <Typography variant="h3" className="text-lg font-medium mb-2">
          Descripción Larga
        </Typography>
        <textarea
          name="longDescription"
          value={formData.longDescription}
          onChange={handleChange}
          placeholder="Ej: Esta cama king size está fabricada con los más altos estándares..."
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
          rows="5"
          required
        />
      </div>

      <div>
        <Typography variant="h3" className="text-lg font-medium mb-2">
          Precio (MXN)
        </Typography>
        <Input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Ej: 1299.99"
          step="0.01"
          required
        />
      </div>

      <div>
        <Typography variant="h3" className="text-lg font-medium mb-2">
          Descuento (%)
        </Typography>
        <Input
          type="number"
          name="discount"
          value={formData.discount}
          onChange={handleChange}
          placeholder="Ej: 15"
          min="0"
          max="100"
        />
      </div>

      <div>
        <Typography variant="h3" className="text-lg font-medium mb-2">
          Categoría
        </Typography>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
        >
          {categories.map((category) => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <Typography variant="h3" className="text-lg font-medium mb-2">
          Material
        </Typography>
        <select
          name="material"
          value={formData.material}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
        >
          {materials.map((material) => (
            <option key={material.value} value={material.value}>
              {material.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <Typography variant="h3" className="text-lg font-medium mb-2">
          Estilo
        </Typography>
        <select
          name="style"
          value={formData.style}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
        >
          {styles.map((style) => (
            <option key={style.value} value={style.value}>
              {style.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <Typography variant="h3" className="text-lg font-medium mb-2">
          Dimensiones
        </Typography>
        <Input
          type="text"
          name="dimensions"
          value={formData.dimensions}
          onChange={handleChange}
          placeholder="Ej: 200x180 cm"
          required
        />
      </div>

      <div>
        <Typography variant="h3" className="text-lg font-medium mb-2">
          Calificación
        </Typography>
        <Input
          type="number"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          placeholder="Ej: 4.5"
          step="0.1"
          min="0"
          max="5"
          required
        />
      </div>

      <div>
        <Typography variant="h3" className="text-lg font-medium mb-2">
          Imágenes
        </Typography>
        <div className="flex items-center justify-between mb-2">
          <label className="block">
            <span className="sr-only">Seleccionar imágenes</span>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleMultipleImagesUpload}
              className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-amber-50 file:text-amber-700
                hover:file:bg-amber-100"
            />
          </label>
        </div>
        {previewImages.length > 0 && (
          <div className="grid grid-cols-3 gap-2">
            {previewImages.map((img, index) => (
              <div key={index} className="relative">
                <img
                  src={typeof img === 'string' ? img : img}
                  alt={`Previsualización ${index + 1}`}
                  className="w-full h-24 object-cover rounded-md"
                />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                >
                  <Icon name="x" size="sm" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex justify-end space-x-4 pt-4">
        <Button type="button" variant="secondary" onClick={onCancel} disabled={uploading}>
          Cancelar
        </Button>
        <Button type="submit" variant="primary" disabled={uploading}>
          {uploading ? 'Guardando...' : product ? 'Guardar cambios' : 'Añadir producto'}
        </Button>
      </div>
    </form>
  );
};

export default ProductForm;