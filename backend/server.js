const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use(express.urlencoded({ extended: true }));


// ROUTES
app.use('/api/projects', require('./routes/projectRoutes'));
app.use('/api/clients', require('./routes/clientRoutes'));
app.use('/api/contacts', require('./routes/contactRoutes'));
app.use('/api/newsletter', require('./routes/newsletterRoutes'));

// middleware
app.use((err, req, res, next) => {
    console.error("UNHANDLED ERROR:", err);
    res.status(500).json({ message: "Internal Server Error", error: err.message });
});



// CONNECT TO DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ MongoDB connected!"))
    .catch(err => console.error("❌ MongoDB connection error:", err));

// START SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
