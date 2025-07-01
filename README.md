# 🏠 Real Trust – Real Estate Business Website

A modern **Real Estate Business Website** with an **Admin Dashboard** to manage projects, clients, contact leads, and newsletter subscribers. Built with the **MERN stack**, this fullstack solution includes both a **landing page** for users and a **secure admin panel**.

---

## 🧰 Tech Stack

### 🌐 Frontend
- React.js (Functional Components + Hooks)
- CSS3 (Fully responsive, modern UI)
- Axios (HTTP requests)
- React Router DOM

### 🖥 Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Multer (File upload handling)
- CORS & Dotenv

---

## 🔐 Admin Login Credentials

> For demo purposes:
- **Email**: `admin@flipr.com`
- **Password**: `flipr#123`

Authentication is handled locally using `localStorage`.

---

## ✨ Features

### 🔖 Landing Page
- Hero Section with Consultation Form (stored in DB)
- Services (Meet Your Broker)
- Why Choose Us section
- About Us + Team Members
- Dynamic Projects (fetched from backend)
- Happy Clients (testimonials)
- Contact Form (stored in DB)
- Newsletter Subscription
- Responsive Design

### 🔧 Admin Dashboard
- Accessible via `/login` (requires credentials)
- **Project Management**: Add new projects (image + description)
- **Client Management**: Add client testimonials with image
- **Contact Leads**: View contact form submissions
- **Newsletter Emails**: View all subscribed email addresses
- Logout Functionality

---

## 📁 Folder Structure

flipr-fullstack-task/
│
├── backend/
│ ├── models/
│ ├── routes/
│ ├── controllers/
│ ├── uploads/
│ ├── server.js
│ └── .env
│
├── frontend/
│ ├── public/
│ └── src/
│ ├── components/
│ │ ├── admin/
│ │ └── landing/
│ └── pages/
│
└── .gitignore
└── README.md
## ⚙️ Setup Instructions

### 🛠 Clone the Repo

```bash
git clone https://github.com/Jeevika-Patanker/flipr-fullstack-task.git
cd flipr-fullstack-task

```
##🚀 Backend Setup

cd backend
npm install

Create a .env file in /backend:

PORT=5000
MONGO_URI=your-mongodb-connection-url

Start the server:

node server.js

##💻 Frontend Setup

cd ../frontend
npm install
npm start

###🌍 Live Demo
##📸 Screen Recorded video





###📧 Contact
GitHub: @Jeevika-Patanker
Email: jeevika.patanker@example.com
