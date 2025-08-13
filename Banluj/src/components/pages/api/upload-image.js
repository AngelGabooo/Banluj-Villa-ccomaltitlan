// pages/api/upload-image.js
import { v2 as cloudinary } from 'cloudinary';
import formidable from 'formidable-serverless';

export const config = {
  api: {
    bodyParser: false,
  },
};

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const form = new formidable.IncomingForm();
    form.uploadDir = './';
    form.keepExtensions = true;

    try {
      const { files } = await new Promise((resolve, reject) => {
        form.parse(req, (err, fields, files) => {
          if (err) return reject(err);
          resolve({ fields, files });
        });
      });

      const file = files.image;
      if (!file) {
        return res.status(400).json({ error: 'No se proporcionó ninguna imagen' });
      }

      const result = await cloudinary.uploader.upload(file.path, {
        folder: 'banluj-products',
      });

      res.status(200).json({ url: result.secure_url });
    } catch (error) {
      console.error('Error al subir la imagen:', error);
      res.status(500).json({ error: 'Error al subir la imagen a Cloudinary' });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}