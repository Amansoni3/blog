import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBlog, updateBlog } from '../store/slice/blogSlice';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const ViewPost = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs.blogs);

  const [editMode, setEditMode] = useState(false);
  const [currentBlog, setCurrentBlog] = useState(null);

  const [title, setTitle] = useState('');
  const [postText, setPostText] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  // Handle delete action
  const handleDelete = (id) => {
    dispatch(deleteBlog(id));
  };

  // Open the edit dialog
  const openEditDialog = (blog) => {
    setCurrentBlog(blog);
    setTitle(blog.title);
    setPostText(blog.postText);
    setImageUrl(blog.imageUrl);
    setEditMode(true);
  };

  // Handle edit submission
  const handleEdit = () => {
    dispatch(
      updateBlog({
        id: currentBlog.id,
        updatedData: { title, postText, imageUrl },
      })
    );
    setEditMode(false);
    setCurrentBlog(null);
  };

  // ReactQuill toolbar configuration
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['blockquote', 'code-block'],
      ['link', 'image'],
      [{ color: [] }, { background: [] }],
      [{ align: [] }],
      ['clean'],
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
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 p-6">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
        View and Manage Blogs
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow"
            >
              <h2 className="text-xl font-bold text-gray-800">{blog.title}</h2>
              <img
                src={blog.imageUrl}
                alt={blog.title}
                className="w-full h-40 object-cover rounded-md mt-2"
              />
              <p className="text-gray-600 mt-2" dangerouslySetInnerHTML={{ __html: blog.postText.slice(0,40) }} />
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => openEditDialog(blog)}
                  className="text-blue-500 font-semibold hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(blog.id)}
                  className="text-red-500 font-semibold hover:underline"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center">No blogs available!</p>
        )}
      </div>

      {/* Edit Modal */}
      {editMode && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Edit Blog</h2>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
            <ReactQuill
              value={postText}
              onChange={setPostText}
              placeholder="Edit your blog content"
              modules={modules}
              formats={formats}
              className="mb-4"
            />
            <input
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="Image URL"
              className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setEditMode(false)}
                className="text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={handleEdit}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewPost;
