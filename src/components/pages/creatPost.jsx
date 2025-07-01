import React, { useState } from "react";
import service from "../../appwrite/config";
import Authservice from "../../appwrite/auth";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "../../fetures/scrollup";

function CreatePost() {
  const [form, setForm] = useState({
    tital: "",
    content: "",
    discription: "",
    status: "active",
    fetured_image: null,
  });

  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (file) => {
    if (file) {
      setForm((prev) => ({ ...prev, fetured_image: file }));
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files[0];
    handleFileChange(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);

    try {
      const user = await Authservice.getAccount();
      const user_id = user.$id;

      let imageId = "";
      if (form.fetured_image) {
        const uploaded = await service.uploadFile(form.fetured_image);
        if (!uploaded) throw new Error("Image upload failed");
        imageId = uploaded.$id;
      }

      const res = await service.createPost({
        title: form.tital,
        content: form.content,
        description: form.discription,
        featured_image: imageId,
        status: form.status,
        user_id,
      });

      if (res) {
        navigate("/");
      } else {
        alert("Post creation failed.");
      }
    } catch (error) {
      console.error("Post Error:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="max-h-[80vh] mt-20 text-white flex justify-center items-start p-6">
      <ScrollToTop/>
      <form
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl w-full max-w-5xl grid md:grid-cols-2 gap-6 p-6 shadow-lg"
      >
        {/* Left Side - Image Upload */}
        <div
          className="flex flex-col items-center justify-center border-2 border-dashed border-white/20 rounded-lg p-4 h-full min-h-[300px] cursor-pointer hover:border-blue-500 transition"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <label htmlFor="imageUpload" className="text-white/70 text-center">
            Drag & Drop an image here<br />or click to select
          </label>
          <input
            id="imageUpload"
            type="file"
            onChange={(e) => handleFileChange(e.target.files[0])}
            accept="image/*"
            className="hidden"
          />
          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="mt-4 rounded-lg max-h-64 object-cover w-full"
            />
          )}
        </div>

        {/* Right Side - Form Inputs */}
        <div className="space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <input
              type="text"
              name="tital"
              value={form.tital}
              onChange={handleChange}
              placeholder="Title"
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none"
              required
            />
            <textarea
              name="content"
              value={form.content}
              onChange={handleChange}
              placeholder="Content"
              rows="5"
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none"
              required
            />
            <textarea
              name="discription"
              value={form.discription}
              onChange={handleChange}
              placeholder="Short Description"
              rows="2"
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none"
            />
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none"
            >
              <option value="active">Active</option>
              <option value="draft">Draft</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={uploading}
            className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg transition font-semibold mt-4"
          >
            {uploading ? "Creating..." : "Create Post"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreatePost;
