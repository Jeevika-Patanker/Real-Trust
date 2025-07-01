const Client = require('../models/Client');

// Get all clients
exports.getClients = async (req, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a client
exports.createClient = async (req, res) => {
  const { name, designation, description } = req.body;
  const image = req.file?.filename;

  if (!name || !designation || !description || !image) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newClient = new Client({ name, designation, description, image });
    await newClient.save();
    res.status(201).json(newClient);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
