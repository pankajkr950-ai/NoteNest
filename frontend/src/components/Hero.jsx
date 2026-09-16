import React from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <h1>Share Knowledge. Learn Together.</h1>

      <p>
        Find useful notes from fellow students
      </p>

      <button onClick={() => navigate("/notes")}>
        Explore Notes
      </button>
    </section>
  );
}

export default Hero;