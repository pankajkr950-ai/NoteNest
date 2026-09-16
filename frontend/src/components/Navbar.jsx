import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">

      <div
        className="logo"
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      >
        📚 NoteNest
      </div>

      <input
        type="text"
        className="nav-search"
        placeholder="Search notes..."
      />

      <div className="nav-buttons">

        <button
          className="login-btn"
          onClick={() => navigate("/login")}
        >
          Login
        </button>

        <button
          className="signup-btn"
          onClick={() => navigate("/signup")}
        >
          Signup
        </button>

      </div>

    </nav>
  );
}

export default Navbar;