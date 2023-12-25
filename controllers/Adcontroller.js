const adService = require('../services/AdService');

const getAd = async (res) => {
    try {
        const ad = await adService.getAd();
        if (ad) {
            return res.status(200).json({ result: true, message: 'getAd Successful', data: ad });
        }
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error getAd' });
    }
};

//add
const addAds = async (req, res) => {
    try {
        const adsData = req.body;
        const saveAds = await adService.addAds(adsData);
        res.status(200).json({ result: true, message: 'Ads added successfully', data: saveAds });
    } catch (error) {
        console.error(error);
        res.status(500).json({ result: false, message: 'Error adding Ads' });
    }
};

//delete
const deleteAds = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleteAds = await adService.deleteAds(id);
        if (deleteAds) {
            return res.status(200).json({ result: true, message: 'Delete Ads Successful' });
        }
    } catch (error) {
        console.error('Error deleting Type:', error.message);
        return res.status(500).json({ result: false, message: 'Error deleting Ads' });
    }
};

//edit
const updateAds = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { typeAd } = req.body;
        const updateAds = await adService.updateAds(id,typeAd);
        if (updateAds) {
            return res.status(200).json({ result: true, message: 'Update Ads Successful', data: updateAds });
        }
    } catch (error) {
        console.error('Error updating Ads:', error.message);
        return res.status(500).json({ result: false, message: 'Error updating Ads' });
    }
};

module.exports = {
    getAd, addAds, deleteAds,updateAds
};