const { MongoClient, GridFSBucket } = require('mongodb');
const multer = require('multer');
const { Readable } = require('stream');

let client;
let db;
let gfs;

async function connectToMongo() {
  if (!client || !client.topology || !client.topology.isConnected()) {
    client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    db = client.db('banluj_images');
    gfs = new GridFSBucket(db, { bucketName: 'images' });
  }
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    await connectToMongo();

    const upload = multer({ storage: multer.memoryStorage() }).single('image');

    await new Promise((resolve, reject) => {
      upload(req, res, (err) => {
        if (err) reject(err);
        else resolve();
      });
    });

    if (!req.file) {
      return res.status(400).json({ error: 'No se proporcionó ninguna imagen' });
    }

    const readableStream = new Readable();
    readableStream.push(req.file.buffer);
    readableStream.push(null);

    const uploadStream = gfs.openUploadStream(req.file.originalname);
    readableStream.pipe(uploadStream);

    await new Promise((resolve, reject) => {
      uploadStream.on('finish', resolve);
      uploadStream.on('error', reject);
    });

    res.json({ fileId: uploadStream.id.toString() });
  } catch (error) {
    console.error('Error en upload-image:', error);
    res.status(500).json({ error: 'Error del servidor' });
  }
};