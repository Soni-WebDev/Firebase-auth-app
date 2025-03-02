import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      console.log(auth, email, password);
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/dashboard"); 
    } catch (error) {
      
      console.error("Error signing up:", error.message);
       let errorMessage = "An error occurred during signup."; // Default error message

      // Map Firebase error codes to custom messages
      switch (error.code) {
        case "auth/email-already-in-use":
          errorMessage = "The email address is already in use.";
          break;
        case "auth/invalid-email":
          errorMessage = "The email address is invalid.";
          break;
        case "auth/weak-password":
          errorMessage = "Password should be at least 6 characters";
          break;
        default:
          errorMessage = error.message; // Fallback to the default error message
      }

      setMessage(errorMessage); // Set the custom error message
      setTimeout(() => {
          setMessage('');
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>
        {message && <p className="text-red-600 mb-4">{message}</p>}
        <p className="mt-4 text-center">
          Already have an account? <Link to='/login' className="text-blue-500">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;