// src/components/Navbar.js
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";

function Navbar({ isAuth, setIsAuth }) {
  const [nav, setNav] = useState(false);

  const toggleNav = () => setNav(!nav);

  // Logout function
  const signUserOut = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem('isAuth'); // Remove only auth status
        setIsAuth(false); // Update auth state
        window.location.pathname = "/login"; // Redirect to login
      })
      .catch((error) => console.error("Error signing out:", error));
  };

  return (
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
              <Link
                to="/viewpost"
                className="hover:text-yellow-300 transition duration-300"
              >
                View Post
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
          <>
            <Link
              to="/createpost"
              className="block text-lg hover:text-yellow-300"
              onClick={toggleNav}
            >
              Create Post
            </Link>
            <Link
              to="/viewpost"
              className="block text-lg hover:text-yellow-300"
              onClick={toggleNav}
            >
              View Post
            </Link>
          </>


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
  );
}

export default Navbar;
