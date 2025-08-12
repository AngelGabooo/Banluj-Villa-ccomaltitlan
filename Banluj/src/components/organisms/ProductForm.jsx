import React, { useState, useEffect } from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import Typography from '../atoms/Typography';
import Icon from '../atoms/Icon';

const categories = [
  { value: 'camas', label: 'Camas' },
  { value: 'cabeceras', label: 'Cabeceras' },
  { value: 'conjuntos', label: 'Conjuntos' }
];

const materials = [
  { value: 'madera', label: 'Madera' },
  { value: 'metal', label: 'Metal' },
  { value: 'tela', label: 'Tela' },
  { value: 'cuero', label: 'Cuero' }
];

const styles = [
  { value: 'moderno', label: 'Moderno' },
  { value: 'clasico', label: 'Clásico' },
  { value: 'rustico', label: 'Rústico' },
  { value: 'industrial', label: 'Industrial' }
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
      { zone: 'Fuera de región', price: 500 }
    ]
  });

  const [previewImages, setPreviewImages] = useState([]);

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name || '',
        description: product.description || '',
        longDescription: product.longDescription || '',
        price: product.price || '',
        brand: product.brand || 'BANLUJ',
        category: product.category || 'camas',
        material: product.material || 'madera',
        style: product.style || 'moderno',
        dimensions: product.dimensions || '',
        images: product.images || [],
        rating: product.rating || '4.5',
        discount: product.discount || '',
        shippingZones: product.shippingZones || [
          { zone: 'Mapastepec - Tapachula', price: 0 },
          { zone: 'Mapastepec - Tonalá', price: 300 },
          { zone: 'Fuera de región', price: 500 }
        ]
      });
      setPreviewImages(product.images || []);
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleMultipleImagesUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      const newImages = [];
      
      files.forEach((file, index) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          newImages.push(reader.result);
          if (index === files.length - 1) {
            setFormData(prev => ({ ...prev, images: [...prev.images, ...newImages] }));
            setPreviewImages(prev => [...prev, ...newImages]);
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removeImage = (index) => {
    const newImages = [...formData.images];
    newImages.splice(index, 1);
    setFormData(prev => ({ ...prev, images: newImages }));
    setPreviewImages(newImages);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.description || !formData.price) {
      alert('Por favor completa los campos requeridos');
      return;
    }
    
    const productData = {
      ...formData,
      brand: 'BANLUJ',
      price: parseFloat(formData.price),
      rating: parseFloat(formData.rating),
      discount: formData.discount ? parseInt(formData.discount) : null
    };
    
    onSubmit(productData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Marca</label>
          <div className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 font-medium text-amber-600">
            BANLUJ
          </div>
          <input type="hidden" name="brand" value="BANLUJ" />
        </div>
        
        <Input
          label="Nombre del producto*"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Input
          label="Precio*"
          name="price"
          type="number"
          value={formData.price}
          onChange={handleChange}
          required
          min="0"
          step="0.01"
        />
        
        <Input
          label="Descuento (%)"
          name="discount"
          type="number"
          value={formData.discount}
          onChange={handleChange}
          min="0"
          max="100"
        />
      </div>
      
      <Input
        label="Descripción corta*"
        name="description"
        value={formData.description}
        onChange={handleChange}
        required
      />
      
      <Input
        label="Descripción larga"
        name="longDescription"
        value={formData.longDescription}
        onChange={handleChange}
        multiline
        rows={3}
      />
      
      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Categoría*</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          >
            {categories.map(cat => (
              <option key={cat.value} value={cat.value}>{cat.label}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Material*</label>
          <select
            name="material"
            value={formData.material}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          >
            {materials.map(mat => (
              <option key={mat.value} value={mat.value}>{mat.label}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Estilo*</label>
          <select
            name="style"
            value={formData.style}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          >
            {styles.map(style => (
              <option key={style.value} value={style.value}>{style.label}</option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Input
          label="Dimensiones"
          name="dimensions"
          value={formData.dimensions}
          onChange={handleChange}
          placeholder="Ej: 200x180 cm"
        />
        
        <Input
          label="Rating (0-5)"
          name="rating"
          type="number"
          value={formData.rating}
          onChange={handleChange}
          min="0"
          max="5"
          step="0.1"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Imágenes del producto*</label>
        <div className="flex flex-wrap gap-2 mb-4">
          {previewImages.map((img, index) => (
            <div key={index} className="relative">
              <img 
                src={img} 
                alt={`Preview ${index}`} 
                className="h-24 w-24 rounded-md object-cover"
              />
              <button
                type="button"
                onClick={() => removeImage(index)}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
              >
                <Icon name="x" size="sm" />
              </button>
            </div>
          ))}
          {previewImages.length < 5 && (
            <label className="h-24 w-24 bg-gray-100 rounded-md flex items-center justify-center cursor-pointer">
              <Icon name="plus" className="text-gray-400" />
              <input 
                type="file" 
                className="sr-only" 
                onChange={handleMultipleImagesUpload}
                accept="image/*"
                multiple
              />
            </label>
          )}
        </div>
        <p className="text-xs text-gray-500">Puedes subir hasta 5 imágenes (primera imagen será la principal)</p>
      </div>

      <div>
        <Typography variant="h3" className="font-medium mb-2">
          Zonas de envío:
        </Typography>
        <div className="space-y-4">
          {formData.shippingZones.map((zone, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-4">
              <Input
                label="Nombre de la zona"
                value={zone.zone}
                onChange={(e) => {
                  const newZones = [...formData.shippingZones];
                  newZones[index].zone = e.target.value;
                  setFormData(prev => ({ ...prev, shippingZones: newZones }));
                }}
              />
              <Input
                label="Precio de envío"
                type="number"
                value={zone.price}
                onChange={(e) => {
                  const newZones = [...formData.shippingZones];
                  newZones[index].price = parseFloat(e.target.value) || 0;
                  setFormData(prev => ({ ...prev, shippingZones: newZones }));
                }}
                min="0"
                step="0.01"
              />
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-end space-x-4 pt-4">
        <Button 
          type="button" 
          variant="secondary" 
          onClick={onCancel}
        >
          Cancelar
        </Button>
        <Button 
          type="submit" 
          variant="primary"
        >
          {product ? 'Guardar cambios' : 'Añadir producto'}
        </Button>
      </div>
    </form>
  );
};

export default ProductForm;