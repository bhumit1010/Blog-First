import React, { useEffect, useState,useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MdOutlinePostAdd, MdArrowUpward } from "react-icons/md";
import Service from "../../appwrite/config";
import getUserById from "../../appwrite/node";
import { logout } from "../../fetures/authslice";
import { useDispatch } from "react-redux";
import ScrollToTop from "../../fetures/scrollup";


const Home = () => {
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);
  const [previewImg, setPreviewImg] = useState(null);
  const [search, setSearch] = useState("");
  const [userMap, setUserMap] = useState({});
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await Service.listPosts();
        if (!res || !res.documents) throw new Error("Post fetch failed");
        setPosts(res.documents);

        const usersObj = {};
        for (const post of res.documents) {
          if (post.user_id && !usersObj[post.user_id]) {
            try {
              const user = await getUserById(post.user_id);
              usersObj[post.user_id] = user.name || user.email || "Unknown";
            } catch {
              usersObj[post.user_id] = "Unknown";
              dispatch(logout());
            }
          }
        }
        setUserMap(usersObj);
      } catch (error) {
        dispatch(logout());
      }
    };
    fetchData();
  }, [dispatch]);

 const filteredPosts = useMemo(() => {
  return posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );
}, [posts, search]);

  const visiblePosts = filteredPosts.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen mt-20 px-4 py-10 text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">Latest Posts</h1>

      {/* Search Bar */}
      <div className="w-full flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-6 py-3 w-[90%] max-w-lg rounded-full bg-white/10 text-white placeholder-white/60 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg"
          />
      </div>

        <ScrollToTop/>
      {/* Posts Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {visiblePosts.map((post) => (
          <div
            key={post.$id}
            className="bg-white/5 backdrop-blur-lg border-gray-400/50 border-1 rounded-xl overflow-hidden shadow-md hover:scale-[1.02] transition-transform duration-300"
          >
            <img
              src={Service.getPreview(post.featured_image)}
              alt={post.title}
              onClick={() => setPreviewImg(Service.getPreview(post.featured_image))}
              className="w-full h-48 object-cover cursor-pointer"
            />
            <div className="p-5 flex flex-col justify-between h-[calc(100%-192px)]">
              <div className="overflow-y-auto max-h-40">
                <h2 className="text-xl font-semibold mb-1">{post.title}</h2>
                <p className="text-sm text-white/60 mb-2">
                  {new Date(post.$createdAt).toLocaleDateString()} •{" "}
                  {userMap[post.user_id] || "Loading..."}
                </p>
                <p className="text-white/80 text-sm whitespace-pre-wrap break-words">
                  {post.content}
                </p>
              </div>
              <div className="mt-4">
                <Link to={`/post/${post.$id}`}>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full mt-2 transition">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More + Go to Top Buttons */}
      <div className="flex justify-center items-center gap-4 mt-10">
        {visibleCount < filteredPosts.length && (
          <button
            onClick={handleLoadMore}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-md transition"
          >
            Load More
          </button>
        )}
        {visiblePosts.length > 6 && (
          <button
            onClick={scrollToTop}
            className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full shadow-md transition flex items-center gap-2"
          >
            <MdArrowUpward />
            Top
          </button>
        )}
      </div>

      {/* Image Preview Modal */}
      <AnimatePresence>
        {previewImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center"
          >
            <div className="relative max-w-4xl w-[90%] p-2 bg-white rounded-xl shadow-xl">
              <button
                onClick={() => setPreviewImg(null)}
                className="absolute top-3 right-3 text-gray-300 font-light w-8 h-8 rounded-full bg-black/60 hover:bg-gray-600/60 transition flex items-center justify-center text-2xl  shadow-lg"
              >
                X
              </button>
              <img
                src={previewImg}
                alt="preview"
                className="rounded-md max-h-[80vh] mx-auto object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Create Post Button */}
      <Link
        to="/create-post"
        className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white text-3xl w-14 h-14 flex items-center justify-center rounded-full shadow-lg transition-all"
        title="Create Post"
      >
        <MdOutlinePostAdd />
      </Link>
    </div>
  );
};

export default Home;
