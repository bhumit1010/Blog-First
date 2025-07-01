# 📝 Blog-First

A modern blogging platform built with **React + Vite**, styled using **Tailwind CSS**, and powered by **Appwrite** as the backend. Deploys instantly with **Vercel**.

---

## 🚀 Features

- 🧾 Create, Read, Update, Delete (CRUD) blog posts
- 🖼 Image upload via Appwrite bucket
- 🔐 User authentication with email/password
- 🔍 Search functionality
- 🎯 Filtered and ordered blog feed
- 📱 Responsive and mobile-friendly design
- ✨ Smooth animations with Framer Motion
- ☁️ Hosted on Vercel

---

## 🔧 Tech Stack

- **Frontend:** React + Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **Backend (BaaS):** Appwrite
- **Deployment:** Vercel
- **Animation:** Framer Motion
- **State Management:** useState, useEffect, useMemo

---

## 🛠️ Installation

```bash
git clone https://github.com/bhumit1010/Blog-First.git
cd Blog-First
npm install
npm run dev

🌐 Live Demo
👉 https://blog-first-rpf9.vercel.app/


🏗 Project Structure

src/
├── appwrite/         # Appwrite config and API
├── components/       # Reusable UI components
├── fetures/          # Features like auth slice, scroll to top
├── pages/            # Page components (Home, Login, CreatePost, etc.)
├── App.jsx
├── main.jsx

⚙️ Environment Variables
Create a .env file with your Appwrite configuration:

VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
VITE_APPWRITE_BUCKET_ID=your_bucket_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id

🧠 Author
Bhumit Sachaniya
📫 bhumitsachaniya1010@gmail.com


