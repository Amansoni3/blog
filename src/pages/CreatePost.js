import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams, useNavigate } from "react-router-dom";
import { addBlogs, updateBlog } from "../store/slice/blogSlice";

const CreatePost = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isEditing = !!searchParams.get("id");
  const [formData, setFormData] = useState({
    title: "",
    postText: "",
    image: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      dispatch(updateBlog({ id: Number(searchParams.get("id")), updatedData: formData }));
    } else {
      dispatch(addBlogs(formData));
    }
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 p-6">
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          {isEditing ? "Edit Blog" : "Create Blog"}
        </h1>
        <input
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        />
        <textarea
          placeholder="Content"
          value={formData.postText}
          onChange={(e) =>
            setFormData({ ...formData, postText: e.target.value })
          }
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={formData.image}
          onChange={(e) =>
            setFormData({ ...formData, image: e.target.value })
          }
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          {isEditing ? "Update Blog" : "Create Blog"}
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
