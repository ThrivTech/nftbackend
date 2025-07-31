const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const upload = require('../middleware/upload');
const { getMe, getUserById, updateProfile } = require('../controllers/userController');

router.get('/me', auth, getMe);
router.get('/:id', getUserById);
router.post('/updateprofile', auth, upload.single('profilePic'), updateProfile);

module.exports = router;
