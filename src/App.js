import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Login from './pages/Login';
import SingleBlog from './pages/SingleBlog';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ViewPost from './pages/ViewPost';

function App() {
  const [isAuth, setIsAuth] = useState(() => {
    return localStorage.getItem("isAuth") === "true";
  });

  return (
    <Router>
      <Navbar isAuth={isAuth} setIsAuth={setIsAuth} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/viewpost" element={<ViewPost />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
