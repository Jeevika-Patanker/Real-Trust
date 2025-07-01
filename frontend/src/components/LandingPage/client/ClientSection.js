import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';

function ClientSection() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    axios.get('/api/clients')
      .then(res => {
        console.log("✅ Clients fetched:", res.data); // Add this
        setClients(res.data);
      })
      .catch(err => console.error('❌ Error fetching clients:', err));
  }, []);

  return (
    <section className="client-section" id="testimonials">
      <div className="client-container">
        <h2>Happy Clients</h2>
        <div className="client-grid">
          {clients.map(client => (
            <div className="client-card" key={client._id}>
              <img src={`http://localhost:5000/uploads/${client.image}`} alt={client.name} />
              <p>"{client.description}"</p>
              <h4>{client.name}</h4>
              <small>{client.designation}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClientSection;
