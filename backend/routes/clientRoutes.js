const express = require('express');
const router = express.Router();
const multer = require('multer');
const {
  getClients,
  createClient
} = require('../controllers/clientController');

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});
const upload = multer({ storage });

// Routes
router.get('/', getClients);
router.post('/', upload.single('image'), createClient);

module.exports = router;
