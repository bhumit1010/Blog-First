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

## 📦 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/bhumit1010/Blog-First.git
cd Blog-First
2. Install dependencies
bash
Copy
Edit
npm install
3. Appwrite Configuration
Create a project in Appwrite, then:

Set up:

A database

A collection (e.g., articals) with attributes: title, content, description, status, featured_image, user_id

A bucket for image uploads (e.g., IMAGES)

Enable Email + Password Auth

Get your API credentials

Create a .env file:

VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id
VITE_APPWRITE_BUCKET_ID=your_bucket_id

4. Run in development
npm run dev

5. Build for production
npm run build
🖼️ Screenshots
(Add screenshots here, e.g. screenshots/home.png, screenshots/create-post.png)
![Home](./screenshots/home.png)
![Create Post](./screenshots/create-post.png)

🔗 Live Project
🔗 https://blog-first.vercel.app

🧑 Author
Bhumit Sachaniya

GitHub: @bhumit1010

Email: bhumitsachaniya1010@gmail.com

🪪 License
This project is licensed under the MIT License.

If you want, I can also:
- Generate this file and download it for you.
- Push it to your GitHub repo.


