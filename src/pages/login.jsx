import React, { useState, useContext} from "react";
import { motion } from "framer-motion";
import { Sparkles, Lock, Mail } from "lucide-react";
import { AuthContext } from "../context/authContext.jsx";
import { Link, useNavigate} from "react-router-dom";
import axios from "axios";

export default function Login() {
  const baseURL = import.meta.env.VITE_API_URL;
  const [loading, setLoading] = useState(false);
  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");
  const { login, role } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(`https://ecomercebackend-five.vercel.app/login`, { email, password });

      // ✅ Check HTTP response status
      if (response.status === 200 || response.status === 201) {
        const { token, expires_in } = response.data;
        login(token, expires_in, response.data.user.role)
        
        navigate("/app");
      } else {
        alert("error");
      }
    } catch (error) {
      console.error(error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    handleLogin();
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-950 overflow-hidden">

      {/* --- Galaxy Background --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2070')] bg-cover bg-center"
      />

      {/* --- Floating Light Particles --- */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <div className="absolute w-72 h-72 bg-purple-600 blur-3xl opacity-40 top-10 left-10 rounded-full"></div>
        <div className="absolute w-72 h-72 bg-blue-600 blur-3xl opacity-40 bottom-10 right-10 rounded-full"></div>
      </motion.div>

      {/* --- Card Container --- */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative bg-black/40 border border-white/10 backdrop-blur-xl shadow-2xl rounded-3xl p-10 w-[90%] max-w-md text-white"
      >
        
        {/* Header Animation */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="flex justify-center mb-3">
            <Sparkles size={38} className="text-purple-400" />
          </div>
          <h1 className="text-3xl font-bold">Welcome Back</h1>
          <p className="text-gray-300 text-sm mt-1">
            Login to continue your journey 🚀
          </p>
        </motion.div>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>

          {/* Email */}
          <div>
            <label className="text-sm text-gray-300">Email</label>
            <div className="relative mt-1">
              <Mail className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                 value={email}
                 onChange={(e)=>setMail(e.target.value)}
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
                onChange={(e)=>{setPassword(e.target.value)}}
                value={password}
                type="password"
                placeholder="Enter your password"
                className="w-full pl-10 py-3 bg-black/30 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-purple-500 transition"
              />
            </div>
          </div>

          {/* Login Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}
            className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition text-white font-semibold shadow-lg"
          >
            Sign In
          </motion.button>
        </form>

        {/* Footer */}
        <div className="text-center mt-6 text-sm text-gray-400">
          Don’t have an account?{" "}
          <Link to="/create" className="text-purple-400 hover:underline">
            Create one
          </Link>
        </div>
      </motion.div>
    </div>
  );
}