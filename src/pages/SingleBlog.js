import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const SingleBlog = () => {
  
    const { id } = useParams(); // Get the blog ID from the URL

  const blogs = useSelector((state) => state.blogs.blogs); // Get the blogs from Redux state
  
  // Find the blog based on the ID
  
  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <div>Blog not found!</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800">{blog.title}</h1>
        <img
          src={blog.imageUrl || 'https://via.placeholder.com/150'}
          alt={blog.title}
          className="w-full h-80 object-cover rounded-md mt-4"
        />
        <div className="mt-4 text-gray-600" dangerouslySetInnerHTML={{ __html: blog.postText }} />
      </div>
    </div>
  );
};

export default SingleBlog;
