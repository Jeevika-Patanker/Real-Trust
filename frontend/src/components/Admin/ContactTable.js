import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';


function ContactTable() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios.get('/api/contacts')
      .then(res => setContacts(res.data))
      .catch(err => console.error("Contact fetch error:", err));
  }, []);

  return (
    <section className="admin-section">
      <h2>Contact Form Submissions</h2>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((c) => (
            <tr key={c._id}>
              <td>{c.fullName}</td>
              <td>{c.email}</td>
              <td>{c.mobile}</td>
              <td>{c.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section >
  );
}

export default ContactTable;
