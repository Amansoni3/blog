// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import CreatePost from "../src/pages/CreatePost";
import Login from "../src/pages/Login";
import { useState } from "react";
import Navbar from "./components/Navbar"; // Import the Navbar component
import ViewPost from "./pages/ViewPost";

function App() {
  // Initialize `isAuth` with localStorage
  const [isAuth, setIsAuth] = useState(() => {
    return localStorage.getItem("isAuth") === "true";
  });

  return (
    <Router>
      {/* Use the Navbar component */}
      <Navbar isAuth={isAuth} setIsAuth={setIsAuth} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/viewpost" element={<ViewPost />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />

      </Routes>
    </Router>
  );
}

export default App;
