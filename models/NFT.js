const mongoose = require('mongoose');
const nftSchema = new mongoose.Schema({
    name: String,
    description: String,
    image: String,
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    tokenId: Number,
    isForSale: { type: Boolean, default: false },
    price: { type: Number, default: 0 },
});
module.exports = mongoose.model('NFT', nftSchema);
