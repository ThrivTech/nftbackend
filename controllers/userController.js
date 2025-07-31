const User = require('../models/User');
exports.getMe = (req, res) => {
    const { name, email, profilePic } = req.user;
    console.log(profilePic)
    res.json({ name, email, profilePic });
};
exports.getUserById = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json({ name: user.name, email: user.email, profilePic: user.profilePic });
};
exports.updateProfile = async (req, res) => {
    const { name } = req.body;
    const profilePic = req.file ? `/uploads/${req.file.filename}` : req.user.profilePic;

    req.user.name = name || req.user.name;
    req.user.profilePic = profilePic;
    await req.user.save();

    res.json({ name: req.user.name, profilePic: req.user.profilePic });
};
