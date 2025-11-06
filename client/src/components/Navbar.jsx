import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav className="navbar">
      <h2>Post Hub</h2>
      <div>
        {username ? (
          <>
            <span>Hi, {username}</span>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
