import React, { useState, useEffect } from 'react';
import MainTemplate from '../templates/MainTemplate';
import Typography from '../atoms/Typography';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';
import Modal from '../molecules/Modal';
import ProductForm from '../organisms/ProductForm';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { db } from '../../firebase';
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { isAdmin, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdmin) {
      navigate('/login');
    } else {
      loadProducts();
    }
  }, [isAdmin, navigate]);

  const loadProducts = async () => {
    setIsLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "products"));
      const productsList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setProducts(productsList);
    } catch (error) {
      console.error("Error loading products:", error);
    }
    setIsLoading(false);
  };

  const handleAddProduct = () => {
    setCurrentProduct(null);
    setIsModalOpen(true);
  };

  const handleEditProduct = (product) => {
    setCurrentProduct(product);
    setIsModalOpen(true);
  };

  const handleDeleteProduct = async (productId) => {
    if (window.confirm('¿Estás seguro de eliminar este producto?')) {
      try {
        await deleteDoc(doc(db, "products", productId));
        loadProducts();
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    }
  };

  const handleSubmit = async () => {
    await loadProducts();
    setIsModalOpen(false);
  };

  if (isLoading) {
    return (
      <MainTemplate>
        <div className="container mx-auto px-4 py-12 text-center">
          <Typography variant="h2">Cargando productos...</Typography>
        </div>
      </MainTemplate>
    );
  }

  return (
    <MainTemplate>
      <div className="container mx-auto px-4 py-8 mt-24">
        <div className="flex justify-between items-center mb-8">
          <Typography variant="h1">Panel de Administración BANLUJ</Typography>
          <div className="flex space-x-4">
            <Button 
              variant="primary" 
              onClick={handleAddProduct}
              className="flex items-center"
            >
              <Icon name="plus" className="mr-2" />
              Añadir Producto
            </Button>
            <Button 
              variant="secondary" 
              onClick={logout}
              className="flex items-center"
            >
              <Icon name="logout" className="mr-2" />
              Cerrar sesión
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Imagen
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Nombre
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Precio
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Marca
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Categoría
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {products.map((product) => (
                  <tr key={product.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <img 
                        src={product.images?.[0] ? `/api/image/${product.images[0]}` : ''} 
                        alt={product.name} 
                        className="h-12 w-12 rounded-md object-cover"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{product.name}</div>
                      <div className="text-xs text-gray-500">
                        {new Date(product.createdAt).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">${product.price.toFixed(2)}</div>
                      {product.discount && (
                        <div className="text-xs text-red-500">
                          {product.discount}% OFF
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-amber-600">BANLUJ</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{product.category}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex space-x-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleEditProduct(product)}
                        >
                          <Icon name="edit" size="sm" />
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="text-red-500 border-red-300 hover:bg-red-50"
                          onClick={() => handleDeleteProduct(product.id)}
                        >
                          <Icon name="trash" size="sm" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <Modal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)}
          title={currentProduct ? 'Editar Producto BANLUJ' : 'Añadir Producto BANLUJ'}
        >
          <ProductForm 
            product={currentProduct} 
            onSubmit={handleSubmit} 
            onCancel={() => setIsModalOpen(false)}
          />
        </Modal>
      </div>
    </MainTemplate>
  );
};

export default Admin;