import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBlog, updateBlog } from '../store/slice/blogSlice';
import EditBlog from '../components/EditBlog';


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
              <p className="text-gray-600 mt-2" dangerouslySetInnerHTML={{ __html: blog.postText.slice(0, 40) }} />
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

      {editMode && (
        <EditBlog
          currentBlog={currentBlog}
          setEditMode={setEditMode}
          handleEdit={handleEdit}
          setTitle={setTitle}
          setPostText={setPostText}
          setImageUrl={setImageUrl}
          title={title}
          postText={postText}
          imageUrl={imageUrl}
        />
      )}
    </div>
  );
};

export default ViewPost;
