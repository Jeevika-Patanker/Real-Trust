const Contact = require('../models/Contact');

// @desc Get all contact form submissions
exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc Create a contact form entry
exports.createContact = async (req, res) => {
  const { fullName, email, mobile, city } = req.body;

  if (!fullName || !email || !mobile || !city) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newContact = new Contact({ fullName, email, mobile, city });
    await newContact.save();
    res.status(201).json(newContact);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
