import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteBlog } from "../store/slice/blogSlice";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const blog = useSelector((state) =>
    state.blogs.blogs.find((blog) => blog.id === Number(id))
  );

  if (!blog) {
    return <p>Blog not found!</p>;
  }

  const handleDelete = () => {
    dispatch(deleteBlog(blog.id));
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <img
          src={blog.image || "https://via.placeholder.com/150"}
          alt={blog.title}
          className="w-full h-60 object-cover rounded-md"
        />
        <h1 className="text-3xl font-bold text-gray-800 mt-4">{blog.title}</h1>
        <p className="text-gray-600 mt-4">{blog.postText}</p>
        <div className="flex justify-between mt-6">
          <button
            onClick={() => navigate(`/createpost?id=${blog.id}`)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
