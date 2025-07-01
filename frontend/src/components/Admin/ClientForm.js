import React, { useState } from 'react';
import axios from 'axios';
import './style.css';


function ClientForm() {
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    description: ''
  });
  const [image, setImage] = useState(null);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleImageChange = (e) =>
    setImage(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.designation || !formData.description || !image) {
      return alert('All fields are required!');
    }

    const payload = new FormData();
    payload.append('name', formData.name);
    payload.append('designation', formData.designation);
    payload.append('description', formData.description);
    payload.append('image', image);

    try {
      await axios.post('/api/clients', payload);
      alert('✅ Client added!');
      setFormData({ name: '', designation: '', description: '' });
      setImage(null);
    } catch (err) {
      alert('❌ Error adding client');
      console.error(err);
    }
  };

  return (
    <section className="admin-section">
      <h2>Client Management</h2>
      <form onSubmit={handleSubmit} className="admin-form">
        <input type="text" name="name" placeholder="Client Name" value={formData.name} onChange={handleChange} />
        <input type="text" name="designation" placeholder="Client Designation" value={formData.designation} onChange={handleChange} />
        <textarea name="description" placeholder="Client Feedback" value={formData.description} onChange={handleChange} />
        <input type="file" onChange={handleImageChange} />
        <button type="submit">Upload Client</button>
      </form>
    </section>
  );
}

export default ClientForm;
