const express = require('express');
const { MongoClient, GridFSBucket } = require('mongodb');
const cors = require('cors');
const dotenv = require('dotenv');
const multer = require('multer');
const mongodb = require('mongodb'); // Añadido explícitamente para ObjectId

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

let db, gfs;

async function connectToMongo() {
  try {
    await client.connect();
    db = client.db('banluj_images');
    gfs = new GridFSBucket(db, { bucketName: 'images' });
    console.log('Conectado a MongoDB Atlas');
  } catch (error) {
    console.error('Error conectando a MongoDB:', error);
    process.exit(1); // Salir si no se puede conectar
  }
}

connectToMongo();

// Configurar Multer para manejar la carga de archivos
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Endpoint para subir imágenes
app.post('/upload-image', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No se proporcionó ninguna imagen' });
    }

    const uploadStream = gfs.openUploadStream(req.file.originalname);
    uploadStream.end(req.file.buffer);

    uploadStream.on('finish', () => {
      res.json({ fileId: uploadStream.id });
    });

    uploadStream.on('error', (error) => {
      res.status(500).json({ error: 'Error al subir la imagen' });
    });
  } catch (error) {
    res.status(500).json({ error: 'Error del servidor' });
  }
});

// Endpoint para recuperar imágenes
app.get('/image/:fileId', async (req, res) => {
  try {
    const fileId = new mongodb.ObjectId(req.params.fileId);
    const downloadStream = gfs.openDownloadStream(fileId);

    downloadStream.on('data', (chunk) => res.write(chunk));
    downloadStream.on('end', () => res.end());
    downloadStream.on('error', () => res.status(404).json({ error: 'Imagen no encontrada' }));
  } catch (error) {
    res.status(500).json({ error: 'Error del servidor' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));