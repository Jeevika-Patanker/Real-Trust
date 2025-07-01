import React, { useState } from 'react';
import axios from 'axios';
import './style.css';

function ProjectForm({ onUploadSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    description: ''
  });
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.description || !image) {
      return alert('All fields are required!');
    }

    const payload = new FormData();
    payload.append('name', formData.name);
    payload.append('description', formData.description);
    payload.append('image', image);

    try {
      await axios.post('/api/projects', payload);
      alert('✅ Project added!');
      setFormData({ name: '', description: '' });
      setImage(null);
      if (onUploadSuccess) onUploadSuccess(); // notify parent to refresh
    } catch (err) {
      console.error("🚨 Upload failed:", err.response?.data || err.message);
      alert('❌ Error submitting project');
    }
  };

  return (
    <section className="admin-section">
      <h2>Project Management</h2>
      <form onSubmit={handleSubmit} className="project-form">
        <input
          type="text"
          name="name"
          placeholder="Project Name"
          value={formData.name}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Project Description"
          value={formData.description}
          onChange={handleChange}
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        <button type="submit">Upload Project</button>
      </form>
    </section>
  );
}

export default ProjectForm;
