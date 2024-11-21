// src/components/Footer.js
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Logo and Description */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-3xl font-bold">MyBlog</h2>
          <p className="text-sm mt-2">Your personal space to share and explore blogs.</p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-center md:text-left">
          <Link to="/" className="hover:text-yellow-300">Home</Link>
          <Link to="/createpost" className="hover:text-yellow-300">Create Post</Link>
          <Link to="/viewpost" className="hover:text-yellow-300">View Post</Link>
          <Link to="/about" className="hover:text-yellow-300">About</Link>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6 mt-6 md:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-yellow-300">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-yellow-300">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-yellow-300">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-yellow-300">
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6">
        <p className="text-sm">&copy; 2024 MyBlog. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
