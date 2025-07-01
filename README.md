# 📝 Blog-First

A modern blog platform built with **React**, **Redux**, **Vite**, and **Appwrite**.

## 🔥 Features

- ✍️ Create, Read, Update, and Delete (CRUD) blog posts
- 🖼️ Image upload support (Appwrite Storage)
- 🔒 User authentication (Sign up, Login, Logout)
- 🧑‍💻 Logged-in users can only edit or delete their own posts
- 🔍 Search posts by title
- 🆕 View latest posts first
- 📱 Fully responsive UI
- 🎨 Clean and modern design with Tailwind CSS
- 📤 Hosted on Vercel

## 🚀 Tech Stack

- ⚛️ React
- 🔄 Redux Toolkit
- 💨 Tailwind CSS
- ⚡ Vite
- ☁️ Appwrite (Auth, Database, Storage)
- 🌍 Vercel (Deployment)

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

