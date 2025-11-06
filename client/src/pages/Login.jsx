import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../api";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", formData);
      console.log(res.data);
      localStorage.setItem("token", res.data.token);
      console.log("Token stored:", res.data.token);
      localStorage.setItem("username", res.data.user.username);
      console.log("Username stored:", res.data.user.username);
      alert("Login Successful!");
      console.log("Navigating to /feed");
      navigate("/feed");
      console.log("Navigation complete");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
