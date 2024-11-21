Overview

- Welcome to the Blog Application built with React.js, Redux Toolkit, and Firebase! This  project is a blog platform where users can add, edit, delete, and view blog posts. The core functionalities, including authentication via Firebase, and managing blog data with Redux Toolkit, have been implemented, making this a full-featured blog application.

- The project leverages React for the frontend, Firebase for user authentication, and Redux Toolkit for state management. It provides users the ability to manage their own blog posts with features such as a text editor, cover image upload, and more. Pagination has been omitted as per the task requirements.

- Features

- Firebase Authentication: Secure user login/signup.
- CRUD Operations: Create, read, update, and delete blog posts.
- Redux Toolkit: Centralized state management for blog data.
- Responsive Design: Works seamlessly across different devices.
- ReactQuill Editor: Rich text editor for creating blog content.
- Single Blog Page: Users can click to view a full post.
- Admin Control: Users can edit and delete their own posts.

Getting Started
- Prerequisites
-  running this project, ensure you have Node.js installed on your system. You can download it from the official Node.js website.

Installation
- Clone the repository or download the project folder.
- Navigate to the project directory in your terminal and install the required dependencies:
bash
- Copy code
- npm install
- npm start
- npm run build

/src
  /components         // Reusable components like Navbar, Blog Cards, etc.
  /pages              // Pages like Home, Blog Details, etc.
  /store              // Redux slice and store for state management

Task Breakdown
 1. React Application Setup
 The application was built using Create React App (CRA), and all core functionalities have been implemented as per the requirements. Firebase is used for authentication, allowing users to sign up, log in, and manage their blog posts securely.

2. Homepage and Blog List
The homepage displays a list of blog posts. Each blog card shows the blog title, description (previewed), and cover image. Users can edit or delete their blog posts from this list.

3. Single Blog Page
A separate page is created to view the full blog post. The user can click on any blog card to view the complete post, which includes the full description created via the ReactQuill text editor.

4. User Authentication with Firebase
Firebase Authentication is used for secure login and signup. Once logged in, users can view their blog posts, edit them, or delete them as necessary.

5. Add/Edit/Delete Blog Post
Users can create new blog posts by entering a title, description (using ReactQuill), and an image URL. The blog data is stored in Redux Toolkit, making it easy to update the application’s state across all components.

6. Redux Toolkit for State Management
Redux Toolkit is used to manage the state of the blog posts. It helps in keeping track of the blog data, and ensures the application is scalable and maintainable.

- Features Not Implemented

- Pagination: While the task required the creation of a blog list, pagination was not implemented.
- Project Workflow
User Authentication: Users can log in or sign up using Firebase Authentication.
- Blog Creation: Logged-in users can create new blog posts with the necessary details (title, description, cover image).
- Viewing and Editing Blogs: Users can click on a blog post to view its full content. - They can also edit or delete their posts.
- State Management: Redux Toolkit is used for managing the list of blog posts and user sessions.

- ReactQuill Editor for Blog Content
- For creating rich text content, the ReactQuill editor is used. It allows users to format their blog descriptions with various styling options such as bold, italic, lists, and more.

- Technologies Used
- React.js: For building the frontend of the application.
- Redux Toolkit: For state management.
- Firebase: For user authentication.
- ReactQuill: A powerful WYSIWYG editor for text content.
- Tailwind CSS: For rapid UI development and styling.
