🚀 AppDost LinkedIn Clone – Full Stack Project

A simple LinkedIn-style social media app built as part of the AppDost Full Stack Developer Internship Assignment.
Users can sign up, log in, create posts, and view posts from other users in a shared public feed.

🧠 Project Overview

This project demonstrates complete MERN stack development (MongoDB, Express, React, Node.js) with authentication, CRUD operations, and deployment.

⚙️ Tech Stack

Frontend: React.js (Vite), Axios, React Router DOM
Backend: Node.js, Express.js, JWT Authentication, bcryptjs
Database: MongoDB Atlas
Hosting: Frontend → Netlify, Backend → Render

🧩 Features

-> User Signup & Login (with JWT authentication)
-> Secure password hashing (bcrypt)
-> Create new posts 
-> View all posts (public feed)
-> Logout and token handling


🧰 Environment Variables

  Create a .env file inside the /server folder:
  
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_secret_key
    PORT=5000
⚠️ Never commit .env to GitHub.

🧑‍💻 To Run Locally

1️⃣ Clone the Repository
  git clone https://github.com/mohansurla/posthub.git
  cd posthub

2️⃣ Backend Setup
  cd server
  npm install
  npm start

Server runs on: http://localhost:5000

3️⃣ Frontend Setup
  cd ../client
  npm install
  npm run dev

🌐 Live Demo

Frontend runs on: http://localhost:5173

📦 Deployment Details

  Frontend (React): 🔗 https://posthub-pro.netlify.app
  
  Backend (Express): 🔗 https://posthhub.onrender.com
