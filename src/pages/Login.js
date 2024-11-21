import React from 'react';
import { auth, provider } from '../firebase-config';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsAuth }) => {
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-sm w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome to Blog App
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Sign in with Google to continue
        </p>
        <button
          onClick={signInWithGoogle}
          className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300"
        >
          Sign in with Google
        </button>
        <div className="mt-6 text-sm text-gray-500">
          <p>By signing in, you agree to our Terms and Conditions</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
