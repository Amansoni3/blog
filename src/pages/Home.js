import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const blogs = useSelector((state) => state.blogs.blogs);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 p-6">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
        Blogs
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow"
              onClick={() => navigate(`/blog/${blog.id}`)}
            >
              <img
                src={blog.image || "https://via.placeholder.com/150"}
                alt={blog.title}
                className="w-full h-40 object-cover rounded-md"
              />
              <h2 className="text-xl font-bold text-gray-800 mt-4">
                {blog.title}
              </h2>
              <p className="text-gray-600 mt-2">
                {blog.postText.slice(0, 100)}...
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center">No blogs available yet!</p>
        )}
      </div>
    </div>
  );
};

export default Home;
