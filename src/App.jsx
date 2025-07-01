import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';

import Layout from './layout/Layout';
import Home from './components/pages/home';
import Login from './components/auth/login';
import {
  About,
  Services,
  Contact,
  PostDetail,
  Register,
} from './components';

import { login, logout } from './fetures/authslice';
import Authservice from './appwrite/auth';
import CreatPost from './components/pages/creatPost';
import UpdatePost from './components/pages/updatePost';

function App() {
  const [loading, setLoading] = useState(true);
  const auth = useSelector((state) => state.auth.status);
  const dispatch = useDispatch();

  useEffect(() => {
    Authservice.getAccount()
      .then((user) => {
        dispatch(login(user));
      })
      .catch(() => {
        dispatch(logout());
      })
      .finally(() => setLoading(false)); // Done loading
  }, [dispatch]);

  if (loading) {
    return (
      <div className="min-h-screen bg-aurora flex items-center justify-center text-black">
      <div className="flex flex-row gap-2">
        <div className="w-4 h-4 rounded-full bg-red-500 animate-bounce"></div>
        <div className="w-4 h-4 rounded-full bg-red-500 animate-bounce [animation-delay:-.3s]"></div>
        <div className="w-4 h-4 rounded-full bg-red-500 animate-bounce [animation-delay:-.5s]"> </div>
      </div>
      </div>
    );
  }

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/"
            element={auth ? <Layout /> : <Navigate to="/login" replace />}
          >
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/post/:id" element={<PostDetail />} />
            <Route path="/create-post" element={<CreatPost />} />
            <Route path="/update-post/:id" element={<UpdatePost />} />

          </Route>

          <Route path="*" element={<Navigate to={auth ? '/' : '/login'} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
