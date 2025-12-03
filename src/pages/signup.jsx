import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, User, Mail, Lock } from "lucide-react";
import { Link, useNavigate} from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const baseURL = import.meta.env.VITE_API_URL;
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");

  const formSubmition = async () => {
    try {
      const response = await axios.post(`${baseURL}/create`, {
        fullname,
        email,
        password,
        confirm_password
      });
      if (response.status === 200 || response.status === 201) {
        alert("Signup successful");
        navigate("/login");
      }
    } catch (error) {
      alert(error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    formSubmition();
  };
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-950 overflow-hidden">

      {/* Galaxy Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2070')] bg-cover bg-center"
      />

      {/* Floating Lights */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <div className="absolute w-72 h-72 bg-purple-600 blur-3xl opacity-40 top-10 left-10 rounded-full"></div>
        <div className="absolute w-72 h-72 bg-blue-600 blur-3xl opacity-40 bottom-10 right-10 rounded-full"></div>
      </motion.div>

      {/* Signup Card */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative bg-black/40 border border-white/10 backdrop-blur-xl shadow-2xl rounded-3xl p-10 w-[90%] max-w-md text-white"
      >
        
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="flex justify-center mb-3">
            <Sparkles size={38} className="text-purple-400" />
          </div>
          <h1 className="text-3xl font-bold">Create Your Account</h1>
          <p className="text-gray-300 text-sm mt-1">
            Join the galaxy of premium shopping ⭐
          </p>
        </motion.div>

        {/* Signup Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>

          {/* Full Name */}
          <div>
            <label className="text-sm text-gray-300">Full Name</label>
            <div className="relative mt-1">
              <User className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                value={fullname}
                onChange={(e) => setFullName(e.target.value)}
                type="text"
                placeholder="Enter your full name"
                className="w-full pl-10 py-3 bg-black/30 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-purple-500 transition"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-gray-300">Email</label>
            <div className="relative mt-1">
              <Mail className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter your email"
                className="w-full pl-10 py-3 bg-black/30 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-purple-500 transition"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-300">Password</label>
            <div className="relative mt-1">
              <Lock className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Create a password"
                className="w-full pl-10 py-3 bg-black/30 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-purple-500 transition"
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-sm text-gray-300">Confirm Password</label>
            <div className="relative mt-1">
              <Lock className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                value={confirm_password}
                onChange={(e) => setConfirmPassword(e.target.value)}
                type="password"
                placeholder="Confirm your password"
                className="w-full pl-10 py-3 bg-black/30 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-purple-500 transition"
              />
            </div>
          </div>

          {/* Signup Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}
            className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition text-white font-semibold shadow-lg"
          >
            Create Account
          </motion.button>
        </form>

        {/* Footer */}
        <div className="text-center mt-6 text-sm text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-400 hover:underline">
            Sign in
          </Link>
        </div>
      </motion.div>
    </div>
  );
}