const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

  cloudinary.config({
    cloud_name: 'dvpf7galq',
    api_key: '675784441141495',
    api_secret: 'Av4uHvhI2wCpq5MZuOXsAwReXdo',
    secure: true,
  });

  const storage = new CloudinaryStorage({
    cloudinary,
    allowedFormats: ['jpg', 'png'],
    filename: function (req, file, cb) {
      cb(null, file.originalname); 
    }
  });
  
  const upload = multer({ storage });

module.exports = upload;