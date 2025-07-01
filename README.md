 <!-- **Real Trust – Flipr Fullstack Project Documentation**
 **1. Project Overview**

**Project Name**: Real Trust – Real Estate Fullstack Application
**Type**: Fullstack (MERN)
**Purpose**: Build a dynamic landing page with an admin dashboard to manage projects, clients, contact forms, and newsletters.

 **2. Tech Stack**

| Layer      | Technology                          |
| ---------- | ----------------------------------- |
| Frontend   | React.js, CSS                       |
| Backend    | Node.js, Express.js                 |
| Database   | MongoDB (Mongoose)                  |
| Tools      | Axios, Multer                       |
| Deployment | Vercel (frontend), Render (backend) |

---

🌐 **3. Live Links**

* **Frontend**: [https://your-frontend.vercel.app](https://your-frontend.vercel.app)
* **Backend**: [https://your-backend.onrender.com](https://your-backend.onrender.com)
* **GitHub Repo**: [https://github.com/your-username/flipr-fullstack-task](https://github.com/your-username/flipr-fullstack-task)



 **4. Admin Credentials**


 Email : admin@flipr.com(mailto:admin@flipr.com) 
 Password : flipr#123                                



 🧱 **5. Folder Structure**


flipr-fullstack-task/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.js
│   └── public/
├── .env
├── README.md



 💻 **6. Features**

 🔹 Landing Page (`/`)

* Hero with consultation form
* Meet Your Broker
* Why Choose Us
* About Us
* Projects (fetched dynamically)
* Client Testimonials (fetched dynamically)
* Contact Form (submits to backend)
* Newsletter Subscription

 🔸 Admin Panel (`/admin`)

* Secure login
* Project management: add, view projects
* Client management: add, view clients
* View contact form submissions
* View subscribed emails


 🏗️ **7. API Endpoints**

 📁 Projects

* `GET /api/projects` → Get all projects
* `POST /api/projects` → Create new project (with image)

 👥 Clients

* `GET /api/clients` → Get all clients
* `POST /api/clients` → Add a client (with image)

 📬 Contacts

* `GET /api/contacts` → View contact form submissions
* `POST /api/contacts` → Submit contact form

 📩 Newsletter

* `GET /api/newsletter` → View all subscribed emails
* `POST /api/newsletter` → Add new email



 ⚙️ **8. Environment Variables (.env)**

```env
MONGO_URI=mongodb+srv://your-user:your-password@cluster.mongodb.net/flipr
PORT=5000
```


🧪 **9. Testing**

* Backend APIs tested using **Thunder Client**.
* All frontend forms tested with live backend endpoints.
* Admin login validation is done using localStorage.



 📦 **10. Setup Instructions**

 📍 Clone the Repository


git clone https://github.com/your-username/flipr-fullstack-task
cd flipr-fullstack-task



📌 Backend


cd backend
npm install
touch .env     # and add your MongoDB URI
npm start



 📌 Frontend

cd frontend
npm install
npm start


Runs on: `http://localhost:3000`



🌍 **11. Deployment Instructions**
 🔹 Frontend: Deploy to Vercel

* Push frontend to GitHub
* Import repo in [https://vercel.com](https://vercel.com)
* Set `build` as `npm run build`
* Output directory: `build`

🔸 Backend: Deploy to Render

* Push backend to GitHub
* Import in [https://render.com](https://render.com)
* Set Environment Variables: `MONGO_URI`, `PORT`
* Start command: `node server.js`



 📎 **12. Notes**

* Images are uploaded locally under `backend/uploads`. If deployed, consider using Cloudinary or S3.
* Admin panel is protected via a simple email/password check and `localStorage`. For production, replace with JWT auth.
* Fully responsive landing page with animation and hover effects.
 -->
