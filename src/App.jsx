import "./App.css";
import { CartProvider } from "./context/cartContext.jsx";
import PrivateRoute from "./context/privateRoute.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home.jsx";
import ProductDetail from "./pages/preview.jsx";
import Signup from "./pages/signup.jsx";
import Login from "./pages/login.jsx";
import { AuthProvider } from "./context/authContext.jsx";
import AuthUser from "./pages/authUser.jsx";
import Profile from "./pages/profile.jsx";

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Routes>
            {/* Public */}
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/create" element={<Signup />} />

            {/* Private */}
            <Route
              path="/app"
              element={
                <PrivateRoute
                  element={<AuthUser />}
                  allowedRoles={["user", "admin"]}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <PrivateRoute
                  element={<Profile />}
                  allowedRoles={["user", "admin"]}
                />
              }
            />
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}