const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const {
  getProjects,
  createProject
} = require('../controllers/projectController');

// Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});
const upload = multer({ storage });

// Routes
router.get('/', getProjects);
router.post('/', upload.single('image'), createProject);

module.exports = router;
