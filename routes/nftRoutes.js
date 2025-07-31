const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const upload = require('../middleware/upload');
const {
    mintNFT,
    sellNFT,
    buyNFT,
    getForSale,
    getMyNFTs,
} = require('../controllers/nftController');

router.post('/mint', auth, upload.single('image'), mintNFT);
router.post('/:id/sell', auth, sellNFT);
router.post('/:id/buy', auth, buyNFT);
router.get('/for-sale', getForSale);
router.get('/my-nfts', auth, getMyNFTs);

module.exports = router;
