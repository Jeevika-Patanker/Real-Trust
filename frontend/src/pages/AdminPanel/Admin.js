import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectForm from '../../components/Admin/ProjectForm';
import ClientForm from '../../components/Admin/ClientForm';
import ContactTable from '../../components/Admin/ContactTable';
import NewsletterTable from '../../components/Admin/NewsletterTable';
import './style.css';

function AdminPanel() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    alert("You’ve been logged out.");
    navigate("/");
  };

  return (
    <div className="admin-dashboard">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>👨‍💼 Admin Dashboard</h1>
        <button className="logout-btn" onClick={handleLogout}>🚪 Logout</button>
      </div>

      {/* Row 1 */}
      <div className="admin-row">
        <section className="admin-card">
          <h2>🗂 Project Management</h2>
          <ProjectForm />
        </section>

        <section className="admin-card">
          <h2>👥 Client Management</h2>
          <ClientForm />
        </section>
      </div>

      {/* Row 2 */}
      <div className="admin-row">
        <section className="admin-card">
          <h2>📬 Contact Form Submissions</h2>
          <ContactTable />
        </section>

        <section className="admin-card">
          <h2>📩 Subscribed Email Addresses</h2>
          <NewsletterTable />
        </section>
      </div>
    </div>

  );
}

export default AdminPanel;
