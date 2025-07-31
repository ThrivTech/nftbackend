const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const nftRoutes = require('./routes/nftRoutes');

dotenv.config();
connectDB(); // <--- Make sure your .env has the correct MONGO_URI

const app = express();
app.use(cors());
app.use(express.json());
const path = require('path');

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/nfts', nftRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// --- server.js or app.js ---
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));