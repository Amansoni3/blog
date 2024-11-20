import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../src/pages/Home";
import CreatePost from "../src/pages/CreatePost";
import Login from "../src/pages/Login";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";

function App() {
  const [nav, setNav] = useState(false);
  const toggleNav = () => setNav(!nav);

  // Initialize `isAuth` with localStorage
  const [isAuth, setIsAuth] = useState(() => {
    return localStorage.getItem("isAuth") === "true";
  });

  // Logout function
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear(); // Clear local storage
      setIsAuth(false); // Update state
      window.location.pathname = "/login"; // Navigate to login page
    });
  };

  return (
    <Router>
      <header className="bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg text-white">
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <Link to="/">MyBlog</Link>
          </div>

          {/* Links for larger screens */}
          <nav className="hidden md:flex space-x-8 font-medium">
            <Link to="/" className="hover:text-yellow-300 transition duration-300">
              Home
            </Link>

            {isAuth ? (
              <>
                <Link
                  to="/createpost"
                  className="hover:text-yellow-300 transition duration-300"
                >
                  Create Post
                </Link>
                <button
                  onClick={signUserOut}
                  className="hover:text-yellow-300 transition duration-300"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="hover:text-yellow-300 transition duration-300"
              >
                Login
              </Link>
            )}
          </nav>

          {/* Hamburger Menu Icon */}
          <div
            className="md:hidden text-2xl cursor-pointer"
            onClick={toggleNav}
          >
            {nav ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${nav ? "block" : "hidden"
            } bg-purple-600 md:hidden text-center space-y-4 py-4`}
        >
          <Link
            to="/"
            className="block text-lg hover:text-yellow-300"
            onClick={toggleNav}
          >
            Home
          </Link>
          {isAuth && (
            <Link
              to="/createpost"
              className="block text-lg hover:text-yellow-300"
              onClick={toggleNav}
            >
              Create Post
            </Link>
          )}
          {isAuth ? (
            <button onClick={signUserOut}>Logout</button>
          ) : (
            <Link
              to="/login"
              className="block text-lg hover:text-yellow-300"
              onClick={toggleNav}
            >
              Login
            </Link>
          )}
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;
