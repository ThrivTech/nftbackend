const NFT = require('../models/NFT');
exports.mintNFT = async (req, res) => {
    const { name, description, tokenId } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : null;
    if (!image) return res.status(400).json({ error: 'Image is required' });

    const nft = await NFT.create({ name, description, image, tokenId, owner: req.user._id });
    res.status(201).json(nft);
};

exports.sellNFT = async (req, res) => {
    const { price } = req.body;
    const nft = await NFT.findByIdAndUpdate(req.params.id, { isForSale: true, price }, { new: true });
    res.json(nft);
};

exports.buyNFT = async (req, res) => {
    const nft = await NFT.findById(req.params.id);
    nft.owner = req.user._id;
    nft.isForSale = false;
    nft.price = 0;
    await nft.save();
    res.json(nft);
};

exports.getForSale = async (req, res) => {
    const nfts = await NFT.find({ isForSale: true }).populate('owner', 'name email profilePic');
    res.json(nfts);
};

exports.getMyNFTs = async (req, res) => {
    const nfts = await NFT.find({ owner: req.user._id });
    res.json(nfts);
};