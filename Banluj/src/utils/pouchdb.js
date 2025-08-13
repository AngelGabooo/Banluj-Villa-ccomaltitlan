import PouchDB from 'pouchdb-browser';

// Configurar la base de datos PouchDB en el navegador
const db = new PouchDB('banluj_images');

// Función para subir una imagen a PouchDB y obtener su ID
export const uploadImageToPouchDB = async (file) => {
  try {
    // Convertir la imagen a Base64
    const base64 = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(file);
    });

    // Crear un documento en PouchDB
    const doc = {
      _id: `image_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      data: base64,
      createdAt: new Date().toISOString(),
      type: file.type,
      name: file.name,
    };

    const response = await db.put(doc);
    return response.id;
  } catch (error) {
    console.error('Error al subir imagen a PouchDB:', error);
    throw error;
  }
};

// Función para obtener una imagen desde PouchDB por su ID
export const getImageFromPouchDB = async (imageId) => {
  try {
    const doc = await db.get(imageId);
    return doc.data; // Retorna la imagen en formato Base64
  } catch (error) {
    console.error('Error al obtener imagen de PouchDB:', error);
    return null;
  }
};

// Función para eliminar una imagen de PouchDB
export const deleteImageFromPouchDB = async (imageId) => {
  try {
    const doc = await db.get(imageId);
    await db.remove(doc);
  } catch (error) {
    console.error('Error al eliminar imagen de PouchDB:', error);
    throw error;
  }
};