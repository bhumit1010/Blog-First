import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ScrollToTop from "../../fetures/scrollup";
import Service from "../../appwrite/config";
import getUserById from "../../appwrite/node";
import { useDispatch } from "react-redux";
import { logout } from "../../fetures/authslice";
import Authservice from "../../appwrite/auth";

const PostDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [post, setPost] = useState(null);
  const [authorName, setAuthorName] = useState("Loading...");
  const [showPreview, setShowPreview] = useState(false);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const user = await Authservice.getAccount();
        setUserId(user.$id);

        const fetchedPost = await Service.getPost(id);
        if (fetchedPost) {
          setPost(fetchedPost);

          if (fetchedPost.user_id) {
            try {
              const userInfo = await getUserById(fetchedPost.user_id);
              setAuthorName(userInfo.name || userInfo.email || "Unknown");
            } catch {
              setAuthorName("Unknown");
              dispatch(logout());
            }
          }
        }
      } catch (err) {
        console.error("Failed to load post", err);
      }
    };

    fetchPost();
  }, [id, dispatch]);

  const handleDelete = async () => {
    const confirm = window.confirm("Are you sure you want to delete this post?");
    if (!confirm) return;

    try {
      await Service.deletePost(post.$id);
      alert("Post deleted successfully.");
      navigate("/");
    } catch (err) {
      console.error("Delete error:", err);
      alert("Failed to delete the post.");
    }
  };

  const handleUpdate = () => {
    navigate(`/update-post/${post.$id}`);
  };

  if (!post) {
    return <div className="text-white p-6 text-center">Post not found.</div>;
  }

  return (
    <div className="min-h-[80vh] mt-24 px-4 py-10 text-white">
      <ScrollToTop />
      <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
        <div className="flex flex-col relative md:flex-row">
          {/* Image Section */}
          <div className="md:w-1/2 w-full p-6 flex items-center justify-center bg-white/5">
            <img
              src={Service.getPreview(post.featured_image)}
              alt={post.title}
              className="w-full  object-contain rounded-2xl cursor-pointer max-h-[70vh] transition duration-300 hover:scale-105"
              onClick={() => setShowPreview(true)}
            />
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 w-full p-8 flex flex-col justify-center">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <p className="text-sm text-white/50 mb-4">
              {new Date(post.$createdAt).toLocaleDateString()} • {authorName}
            </p>
            <div className="text-white/90 text-lg leading-relaxed space-y-4 overflow-y-auto max-h-[70vh] pr-1 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
              <p>{post.content}</p>
              {post.description && (
                <p className="text-white/70 italic">{post.description}</p>
              )}
            </div>

            {userId === post.user_id && (
              <div className="flex absolute bottom-2.5 right-2.5 justify-end gap-4 mt-6">
                <button
                  onClick={handleDelete}
                  className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow-lg transition"
                >
                  Delete
                </button>
                <button
                  onClick={handleUpdate}
                  className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transition"
                >
                  Update
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      <AnimatePresence>
        {showPreview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center"
          >
            <div className="relative w-[90%] max-w-5xl p-4 bg-white rounded-xl shadow-xl">
              <button
                onClick={() => setShowPreview(false)}
                className="absolute top-4 right-4 w-10 h-10 text-2xl bg-black/40 text-white rounded-full hover:bg-gray-700 transition flex items-center justify-center"
              >
                &times;
              </button>
              <img
                src={Service.getPreview(post.featured_image)}
                alt="Preview"
                className="rounded-lg max-h-[80vh] mx-auto object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PostDetail;
