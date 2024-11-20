import { addDoc, collection } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase-config';
import { useNavigate } from 'react-router-dom';

const CreatePost = ({ isAuth }) => {
  const [title, setTitle] = useState('');
  const [postText, setPostText] = useState('');
  const postCollectionRef = collection(db, 'posts');
  let navigate = useNavigate();

  const createPost = async (event) => {
    event.preventDefault();
    console.log(auth.currentUser, 'aaa')
    // Save post data in Firestore
    await addDoc(postCollectionRef, {
      title,
      postText,
      author: {
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      },
    });

    // Reset form fields
    // setTitle('');
    // setPostText('');

    // Navigate to home or another page after posting
    navigate('/');
  };

  useEffect(() => {
    if (!isAuth) {
      navigate('/login');
    }
  }, [isAuth, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Create a New Blog Post
        </h1>
        <form className="space-y-6" onSubmit={createPost}>
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Blog Title
            </label>
            <input
              type="text"
              id="title"
              placeholder="Enter blog title"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
              onChange={(event) => setTitle(event.target.value)}
              value={title}
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              placeholder="Write your blog content here"
              rows="6"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
              onChange={(event) => setPostText(event.target.value)}
              value={postText}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md text-lg font-semibold hover:bg-blue-600 transition duration-300"
          >
            Submit Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
