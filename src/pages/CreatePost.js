import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBlogs } from '../store/slice/blogSlice';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CreatePost = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [postText, setPostText] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const blogsData = useSelector((state) => state);

  console.log(blogsData, 'sssss');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addBlogs({
        title,
        postText,
        imageUrl,
      })
    );
    toast.success('Blog post added successfully!')
    setImageUrl("")
    setTitle("")
    setPostText("")

  };

  // Toolbar options
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }], // Headers
      ['bold', 'italic', 'underline', 'strike'], // Formatting
      [{ list: 'ordered' }, { list: 'bullet' }], // Lists
      ['blockquote', 'code-block'], // Block formatting
      ['link', 'image'], // Links and images
      [{ color: [] }, { background: [] }], // Text and background colors
      [{ align: [] }], // Alignment
      ['clean'], // Remove formatting
    ],
  };

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'list',
    'bullet',
    'blockquote',
    'code-block',
    'link',
    'image',
    'color',
    'background',
    'align',
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Create a New Blog Post
        </h1>
        <div className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
              Blog Title
            </label>
            <input
              type="text"
              id="title"
              placeholder="Enter blog title"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <ReactQuill
              id="description"
              theme="snow"
              value={postText}
              onChange={setPostText}
              placeholder="Write your blog content here"
              modules={modules}
              formats={formats}
              className="mb-4"
            />
          </div>
          <div>
            <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-2">
              Image URL
            </label>
            <input
              type="text"
              id="imageUrl"
              placeholder="Enter image URL"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              onChange={(e) => setImageUrl(e.target.value)}
              value={imageUrl}
            />
          </div>
          <button
            className="w-full bg-blue-500 text-white py-2 rounded-md text-lg font-semibold hover:bg-blue-600 transition duration-300"
            onClick={handleSubmit}
          >
            Submit Blog
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CreatePost;
