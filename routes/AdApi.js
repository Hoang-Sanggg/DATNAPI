const express = require('express')
const router = express.Router();
const adController = require('../controllers/Adcontroller');


// lấy danh sách 
router.get('/', async (req, res) => {
    await adController.getAd(res);
});

// add Ads
router.post('/add', adController.addAds);

// delete
router.delete('/delete/:id', adController.deleteAds);

//edit
router.post('/edit/:id', adController.updateAds);

module.exports = router