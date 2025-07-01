import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';


function NewsletterTable() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    axios.get('/api/newsletter')
      .then(res => setEmails(res.data))
      .catch(err => console.error("Newsletter fetch error:", err));
  }, []);

  return (
    <section className="admin-section">
      <h2>Newsletter Subscribers</h2>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Email Address</th>
          </tr>
        </thead>
        <tbody>
          {emails.map((e) => (
            <tr key={e._id}>
              <td>{e.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default NewsletterTable;
