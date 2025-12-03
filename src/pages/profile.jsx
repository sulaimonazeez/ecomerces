import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Camera, Mail, Phone, MapPin, ShoppingBag, Heart } from "lucide-react";
import axiosInstance from "../api/utilities.jsx";

export default function Profile() {
  const [avatar, setAvatar] = useState(null);
  const [saving, setSaving] = useState(false);

  const fileRef = useRef(null);

  const [form, setForm] = useState({
    fullname: "John Doe",
    email: "johndoe@gmail.com",
    phone: "08000000000",
    address: "No address found...",
    orders: 0,
    wishlist: 0,
  });

  // Pick image -> show preview
  const handleAvatar = (file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setAvatar(reader.result);
    reader.readAsDataURL(file);
  };

  const saveProfile = async () => {
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      alert("Profile saved successfully!");
    }, 1200);
  };
  
  const fetchProfile = async () => {
  try {
    const response = await axiosInstance.get("http://localhost:3000/api/profile");
    if (response.status === 200) {
      setForm(prev => ({
        ...prev,
        fullname: response.data.fullname || prev.fullname,
        email: response.data.email || prev.email,
        phone: response.data.phone || prev.phone,
        address: response.data.address || prev.address
      }));
      console.log(response.data); // instead of alert
    }
  } catch (err) {
    console.error(err.message);
  }
};
  
  useEffect(() =>{
    fetchProfile()
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-6"
      >
        {/* Avatar */}
        <div className="flex items-center gap-4">
          <div className="relative w-24 h-24 rounded-full overflow-hidden bg-gray-200">
            {avatar ? (
              <img src={avatar} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-500 font-bold text-xl">
                {form.fullname[0]}
              </div>
            )}
            <button
              onClick={() => fileRef.current.click()}
              className="absolute bottom-1 right-1 bg-black/50 p-1 rounded-full"
            >
              <Camera className="w-4 h-4 text-white" />
            </button>
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleAvatar(e.target.files?.[0])}
            />
          </div>

          {/* Basic details */}
          <div>
            <h2 className="text-xl font-semibold">{form.fullname}</h2>
            <p className="text-sm text-gray-600">Customer Profile</p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-2 gap-4">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-blue-50 border border-blue-200 p-4 rounded-xl flex items-center gap-3"
          >
            <ShoppingBag className="text-blue-600" />
            <div>
              <p className="font-bold text-lg">{form.orders}</p>
              <p className="text-sm text-gray-600">Orders</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-pink-50 border border-pink-200 p-4 rounded-xl flex items-center gap-3"
          >
            <Heart className="text-pink-600" />
            <div>
              <p className="font-bold text-lg">{form.wishlist}</p>
              <p className="text-sm text-gray-600">Wishlist</p>
            </div>
          </motion.div>
        </div>

        {/* Form */}
        <div className="mt-8 space-y-4">
          {[
            { label: "Full Name", key: "fullname", icon: <UserIcon /> },
            { label: "Email", key: "email", icon: <Mail /> },
            { label: "Phone Number", key: "phone", icon: <Phone /> },
            { label: "Delivery Address", key: "address", icon: <MapPin /> },
          ].map((f) => (
            <div key={f.key}>
              <label className="block text-sm text-gray-600 mb-1">
                {f.label}
              </label>
              <div className="flex items-center gap-3 bg-gray-100 p-3 rounded-xl border border-gray-200">
                <div className="text-gray-500">{f.icon}</div>
                <input
                  value={form[f.key]}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, [f.key]: e.target.value }))
                  }
                  className="flex-1 bg-transparent outline-none text-gray-800"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Save button */}
        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={saveProfile}
          disabled={saving}
          className="mt-6 w-full bg-black text-white py-3 rounded-xl font-semibold"
        >
          {saving ? "Saving..." : "Save Changes"}
        </motion.button>
      </motion.div>
    </div>
  );
}

function UserIcon() {
  return <svg className="w-5 h-5 text-gray-500"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 4-6 8-6s8 2 8 6" /></svg>;
}