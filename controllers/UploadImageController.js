const path = require('path');
const uploadImage = (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No image provided' });
    }
    const imagePath = path.join('public/images', req.file.filename);
    res.json({ imagePath });
};

module.exports = { uploadImage };