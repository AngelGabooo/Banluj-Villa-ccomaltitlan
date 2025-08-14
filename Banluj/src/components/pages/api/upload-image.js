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
  console.log('Request received:', req.method, req.url);
  if (req.method === 'POST') {
    console.log('Processing POST request');
    const form = new formidable.IncomingForm();
    form.uploadDir = './';
    form.keepExtensions = true;

    try {
      const { files } = await new Promise((resolve, reject) => {
        form.parse(req, (err, fields, files) => {
          if (err) {
            console.error('Form parse error:', err);
            return reject(err);
          }
          console.log('Files received:', files);
          resolve({ fields, files });
        });
      });

      const file = files.image;
      if (!file) {
        console.log('No image provided');
        return res.status(400).json({ error: 'No se proporcionó ninguna imagen' });
      }

      console.log('Uploading to Cloudinary:', file.path);
      const result = await cloudinary.uploader.upload(file.path, {
        folder: 'banluj-products',
      });

      console.log('Upload successful:', result.secure_url);
      res.status(200).json({ url: result.secure_url });
    } catch (error) {
      console.error('Error al subir la imagen:', error);
      res.status(500).json({ error: 'Error al subir la imagen a Cloudinary' });
    }
  } else {
    console.log('Method not allowed:', req.method);
    res.setHeader('Allow', 'POST');
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}