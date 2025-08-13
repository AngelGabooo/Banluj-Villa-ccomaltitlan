const { MongoClient, GridFSBucket, ObjectId } = require('mongodb');

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
  const { fileId } = req.query; // Vercel pasa params dinámicos en req.query

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    await connectToMongo();

    const id = new ObjectId(fileId);
    const downloadStream = gfs.openDownloadStream(id);

    downloadStream.on('data', (chunk) => res.write(chunk));
    downloadStream.on('end', () => res.end());
    downloadStream.on('error', (error) => {
      console.error('Error en downloadStream:', error);
      res.status(404).json({ error: 'Imagen no encontrada' });
    });
  } catch (error) {
    console.error('Error en image:', error);
    res.status(500).json({ error: 'Error del servidor' });
  }
};