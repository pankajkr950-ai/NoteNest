import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CategoryBar from "../components/CategoryBar";
import NoteCard from "../components/NoteCard";
import Footer from "../components/Footer";
import "../styles/Home.css";

function Home() {
  const navigate = useNavigate();

  // =========================
  // HOME CAROUSEL STATE
  // =========================

  const [currentPage, setCurrentPage] = useState(1);

  // =========================
  // ALL NOTES DATA
  // =========================

  const notes = [
    // CSE - 15
    {
      title: "DBMS Complete Notes",
      branch: "CSE",
      semester: "3rd Semester",
      subject: "Database Management System",
      rating: "4.8",
    },
    {
      title: "Operating System Notes",
      branch: "CSE",
      semester: "3rd Semester",
      subject: "Operating System",
      rating: "4.6",
    },
    {
      title: "Computer Networks Notes",
      branch: "CSE",
      semester: "4th Semester",
      subject: "Computer Networks",
      rating: "4.9",
    },
    {
      title: "Data Structures Notes",
      branch: "CSE",
      semester: "2nd Semester",
      subject: "Data Structures",
      rating: "4.7",
    },
    {
      title: "Java Programming Notes",
      branch: "CSE",
      semester: "4th Semester",
      subject: "Java Programming",
      rating: "4.8",
    },
    {
      title: "Python Programming Notes",
      branch: "CSE",
      semester: "3rd Semester",
      subject: "Python Programming",
      rating: "4.7",
    },
    {
      title: "Software Engineering Notes",
      branch: "CSE",
      semester: "5th Semester",
      subject: "Software Engineering",
      rating: "4.6",
    },
    {
      title: "Computer Organization Notes",
      branch: "CSE",
      semester: "3rd Semester",
      subject: "Computer Organization",
      rating: "4.5",
    },
    {
      title: "Theory of Computation Notes",
      branch: "CSE",
      semester: "5th Semester",
      subject: "Theory of Computation",
      rating: "4.8",
    },
    {
      title: "Compiler Design Notes",
      branch: "CSE",
      semester: "6th Semester",
      subject: "Compiler Design",
      rating: "4.7",
    },
    {
      title: "Artificial Intelligence Notes",
      branch: "CSE",
      semester: "6th Semester",
      subject: "Artificial Intelligence",
      rating: "4.9",
    },
    {
      title: "Machine Learning Notes",
      branch: "CSE",
      semester: "7th Semester",
      subject: "Machine Learning",
      rating: "4.8",
    },
    {
      title: "Web Development Notes",
      branch: "CSE",
      semester: "5th Semester",
      subject: "Web Development",
      rating: "4.9",
    },
    {
      title: "Cloud Computing Notes",
      branch: "CSE",
      semester: "7th Semester",
      subject: "Cloud Computing",
      rating: "4.6",
    },
    {
      title: "Cyber Security Notes",
      branch: "CSE",
      semester: "7th Semester",
      subject: "Cyber Security",
      rating: "4.7",
    },

    // ECE - 10
    {
      title: "Digital Electronics Notes",
      branch: "ECE",
      semester: "3rd Semester",
      subject: "Digital Electronics",
      rating: "4.7",
    },
    {
      title: "Signals and Systems Notes",
      branch: "ECE",
      semester: "4th Semester",
      subject: "Signals and Systems",
      rating: "4.5",
    },
    {
      title: "Analog Electronics Notes",
      branch: "ECE",
      semester: "3rd Semester",
      subject: "Analog Electronics",
      rating: "4.6",
    },
    {
      title: "Microprocessors Notes",
      branch: "ECE",
      semester: "5th Semester",
      subject: "Microprocessors",
      rating: "4.8",
    },
    {
      title: "Communication Systems Notes",
      branch: "ECE",
      semester: "5th Semester",
      subject: "Communication Systems",
      rating: "4.7",
    },
    {
      title: "Control Systems Notes",
      branch: "ECE",
      semester: "5th Semester",
      subject: "Control Systems",
      rating: "4.6",
    },
    {
      title: "Electromagnetic Theory Notes",
      branch: "ECE",
      semester: "4th Semester",
      subject: "Electromagnetic Theory",
      rating: "4.5",
    },
    {
      title: "VLSI Design Notes",
      branch: "ECE",
      semester: "7th Semester",
      subject: "VLSI Design",
      rating: "4.8",
    },
    {
      title: "Digital Signal Processing Notes",
      branch: "ECE",
      semester: "6th Semester",
      subject: "Digital Signal Processing",
      rating: "4.7",
    },
    {
      title: "Embedded Systems Notes",
      branch: "ECE",
      semester: "6th Semester",
      subject: "Embedded Systems",
      rating: "4.9",
    },

    // ME - 10
    {
      title: "Engineering Mechanics Notes",
      branch: "ME",
      semester: "2nd Semester",
      subject: "Engineering Mechanics",
      rating: "4.5",
    },
    {
      title: "Thermodynamics Notes",
      branch: "ME",
      semester: "3rd Semester",
      subject: "Thermodynamics",
      rating: "4.7",
    },
    {
      title: "Fluid Mechanics Notes",
      branch: "ME",
      semester: "4th Semester",
      subject: "Fluid Mechanics",
      rating: "4.6",
    },
    {
      title: "Machine Design Notes",
      branch: "ME",
      semester: "5th Semester",
      subject: "Machine Design",
      rating: "4.8",
    },
    {
      title: "Heat Transfer Notes",
      branch: "ME",
      semester: "5th Semester",
      subject: "Heat Transfer",
      rating: "4.7",
    },
    {
      title: "Manufacturing Process Notes",
      branch: "ME",
      semester: "3rd Semester",
      subject: "Manufacturing Process",
      rating: "4.6",
    },
    {
      title: "Theory of Machines Notes",
      branch: "ME",
      semester: "4th Semester",
      subject: "Theory of Machines",
      rating: "4.5",
    },
    {
      title: "Industrial Engineering Notes",
      branch: "ME",
      semester: "6th Semester",
      subject: "Industrial Engineering",
      rating: "4.7",
    },
    {
      title: "Automobile Engineering Notes",
      branch: "ME",
      semester: "7th Semester",
      subject: "Automobile Engineering",
      rating: "4.8",
    },
    {
      title: "Production Engineering Notes",
      branch: "ME",
      semester: "7th Semester",
      subject: "Production Engineering",
      rating: "4.6",
    },

    // Civil - 10
    {
      title: "Structural Analysis Notes",
      branch: "Civil",
      semester: "4th Semester",
      subject: "Structural Analysis",
      rating: "4.6",
    },
    {
      title: "Surveying Notes",
      branch: "Civil",
      semester: "3rd Semester",
      subject: "Surveying",
      rating: "4.8",
    },
    {
      title: "Building Materials Notes",
      branch: "Civil",
      semester: "2nd Semester",
      subject: "Building Materials",
      rating: "4.5",
    },
    {
      title: "Concrete Technology Notes",
      branch: "Civil",
      semester: "5th Semester",
      subject: "Concrete Technology",
      rating: "4.7",
    },
    {
      title: "Soil Mechanics Notes",
      branch: "Civil",
      semester: "4th Semester",
      subject: "Soil Mechanics",
      rating: "4.6",
    },
    {
      title: "Transportation Engineering Notes",
      branch: "Civil",
      semester: "6th Semester",
      subject: "Transportation Engineering",
      rating: "4.8",
    },
    {
      title: "Environmental Engineering Notes",
      branch: "Civil",
      semester: "6th Semester",
      subject: "Environmental Engineering",
      rating: "4.7",
    },
    {
      title: "Fluid Mechanics Notes",
      branch: "Civil",
      semester: "3rd Semester",
      subject: "Fluid Mechanics",
      rating: "4.5",
    },
    {
      title: "Geotechnical Engineering Notes",
      branch: "Civil",
      semester: "5th Semester",
      subject: "Geotechnical Engineering",
      rating: "4.8",
    },
    {
      title: "Construction Management Notes",
      branch: "Civil",
      semester: "7th Semester",
      subject: "Construction Management",
      rating: "4.6",
    },

    // BCA - 10
    {
      title: "Web Development Notes",
      branch: "BCA",
      semester: "4th Semester",
      subject: "Web Development",
      rating: "4.9",
    },
    {
      title: "Data Structures Notes",
      branch: "BCA",
      semester: "3rd Semester",
      subject: "Data Structures",
      rating: "4.7",
    },
    {
      title: "C Programming Notes",
      branch: "BCA",
      semester: "1st Semester",
      subject: "C Programming",
      rating: "4.8",
    },
    {
      title: "Java Programming Notes",
      branch: "BCA",
      semester: "4th Semester",
      subject: "Java Programming",
      rating: "4.6",
    },
    {
      title: "Database Management Notes",
      branch: "BCA",
      semester: "3rd Semester",
      subject: "Database Management System",
      rating: "4.7",
    },
    {
      title: "Computer Networks Notes",
      branch: "BCA",
      semester: "5th Semester",
      subject: "Computer Networks",
      rating: "4.5",
    },
    {
      title: "Operating System Notes",
      branch: "BCA",
      semester: "4th Semester",
      subject: "Operating System",
      rating: "4.8",
    },
    {
      title: "Software Engineering Notes",
      branch: "BCA",
      semester: "5th Semester",
      subject: "Software Engineering",
      rating: "4.6",
    },
    {
      title: "Python Programming Notes",
      branch: "BCA",
      semester: "2nd Semester",
      subject: "Python Programming",
      rating: "4.9",
    },
    {
      title: "Computer Fundamentals Notes",
      branch: "BCA",
      semester: "1st Semester",
      subject: "Computer Fundamentals",
      rating: "4.7",
    },

    // MCA - 10
    {
      title: "Advanced Java Notes",
      branch: "MCA",
      semester: "2nd Semester",
      subject: "Advanced Java Programming",
      rating: "4.8",
    },
    {
      title: "Software Engineering Notes",
      branch: "MCA",
      semester: "3rd Semester",
      subject: "Software Engineering",
      rating: "4.6",
    },
    {
      title: "Advanced Database Notes",
      branch: "MCA",
      semester: "2nd Semester",
      subject: "Advanced Database Management",
      rating: "4.7",
    },
    {
      title: "Data Structures Notes",
      branch: "MCA",
      semester: "1st Semester",
      subject: "Data Structures",
      rating: "4.8",
    },
    {
      title: "Computer Networks Notes",
      branch: "MCA",
      semester: "2nd Semester",
      subject: "Computer Networks",
      rating: "4.5",
    },
    {
      title: "Cloud Computing Notes",
      branch: "MCA",
      semester: "4th Semester",
      subject: "Cloud Computing",
      rating: "4.9",
    },
    {
      title: "Artificial Intelligence Notes",
      branch: "MCA",
      semester: "3rd Semester",
      subject: "Artificial Intelligence",
      rating: "4.8",
    },
    {
      title: "Machine Learning Notes",
      branch: "MCA",
      semester: "4th Semester",
      subject: "Machine Learning",
      rating: "4.9",
    },
    {
      title: "Web Technologies Notes",
      branch: "MCA",
      semester: "1st Semester",
      subject: "Web Technologies",
      rating: "4.7",
    },
    {
      title: "Cyber Security Notes",
      branch: "MCA",
      semester: "4th Semester",
      subject: "Cyber Security",
      rating: "4.6",
    },

    // MBA - 10
    {
      title: "Marketing Management Notes",
      branch: "MBA",
      semester: "1st Semester",
      subject: "Marketing Management",
      rating: "4.7",
    },
    {
      title: "Financial Management Notes",
      branch: "MBA",
      semester: "2nd Semester",
      subject: "Financial Management",
      rating: "4.8",
    },
    {
      title: "Human Resource Management Notes",
      branch: "MBA",
      semester: "2nd Semester",
      subject: "Human Resource Management",
      rating: "4.6",
    },
    {
      title: "Business Economics Notes",
      branch: "MBA",
      semester: "1st Semester",
      subject: "Business Economics",
      rating: "4.5",
    },
    {
      title: "Operations Management Notes",
      branch: "MBA",
      semester: "3rd Semester",
      subject: "Operations Management",
      rating: "4.7",
    },
    {
      title: "Strategic Management Notes",
      branch: "MBA",
      semester: "3rd Semester",
      subject: "Strategic Management",
      rating: "4.8",
    },
    {
      title: "Business Communication Notes",
      branch: "MBA",
      semester: "1st Semester",
      subject: "Business Communication",
      rating: "4.6",
    },
    {
      title: "Organizational Behavior Notes",
      branch: "MBA",
      semester: "2nd Semester",
      subject: "Organizational Behavior",
      rating: "4.9",
    },
    {
      title: "Entrepreneurship Notes",
      branch: "MBA",
      semester: "4th Semester",
      subject: "Entrepreneurship",
      rating: "4.8",
    },
    {
      title: "Accounting Management Notes",
      branch: "MBA",
      semester: "1st Semester",
      subject: "Accounting Management",
      rating: "4.7",
    },

    // B.Tech - 10
    {
      title: "Engineering Mathematics Notes",
      branch: "B.Tech",
      semester: "1st Semester",
      subject: "Engineering Mathematics",
      rating: "4.6",
    },
    {
      title: "Engineering Physics Notes",
      branch: "B.Tech",
      semester: "1st Semester",
      subject: "Engineering Physics",
      rating: "4.5",
    },
    {
      title: "Engineering Chemistry Notes",
      branch: "B.Tech",
      semester: "1st Semester",
      subject: "Engineering Chemistry",
      rating: "4.7",
    },
    {
      title: "Object Oriented Programming Notes",
      branch: "B.Tech",
      semester: "3rd Semester",
      subject: "Object Oriented Programming",
      rating: "4.8",
    },
    {
      title: "Data Structures Notes",
      branch: "B.Tech",
      semester: "3rd Semester",
      subject: "Data Structures",
      rating: "4.9",
    },
    {
      title: "Database Management Notes",
      branch: "B.Tech",
      semester: "4th Semester",
      subject: "Database Management System",
      rating: "4.7",
    },
    {
      title: "Computer Networks Notes",
      branch: "B.Tech",
      semester: "5th Semester",
      subject: "Computer Networks",
      rating: "4.6",
    },
    {
      title: "Operating System Notes",
      branch: "B.Tech",
      semester: "4th Semester",
      subject: "Operating System",
      rating: "4.8",
    },
    {
      title: "Software Engineering Notes",
      branch: "B.Tech",
      semester: "5th Semester",
      subject: "Software Engineering",
      rating: "4.7",
    },
    {
      title: "Artificial Intelligence Notes",
      branch: "B.Tech",
      semester: "6th Semester",
      subject: "Artificial Intelligence",
      rating: "4.9",
    },
  ];

  // =========================
  // HOME NOTES
  // =========================

  // Home par ek time me sirf 6 notes
  const notesPerPage = 6;

  const totalPages = Math.ceil(
    notes.length / notesPerPage
  );

  const startIndex =
    (currentPage - 1) * notesPerPage;

  const currentNotes = notes.slice(
    startIndex,
    startIndex + notesPerPage
  );

  // =========================
  // CATEGORY CLICK
  // =========================

  const handleCategoryChange = (category) => {
    if (category === "All") {
      navigate("/notes");
      return;
    }

    navigate(
      `/notes?branch=${encodeURIComponent(category)}`
    );
  };

  // =========================
  // NEXT
  // =========================

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((page) => page + 1);
    }
  };

  // =========================
  // PREVIOUS
  // =========================

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((page) => page - 1);
    }
  };

  return (
    <>
      <Navbar />

      <Hero />

      <CategoryBar
        selectedCategory="All"
        setSelectedCategory={handleCategoryChange}
      />

      <main className="home-notes-section">

        <div className="home-notes-header">
          <div>
            <h2>Latest Notes</h2>

            <p>
              Explore useful study notes shared by students.
            </p>
          </div>

          <button
            className="view-all-notes-btn"
            onClick={() => navigate("/notes")}
          >
            View All Notes →
          </button>
        </div>

        {/* NOTES GRID */}

        <div className="notes-grid">
          {currentNotes.map((note, index) => (
            <NoteCard
              key={`${note.title}-${note.branch}-${index}`}
              note={{
                ...note,
                _id: `${note.branch}-${index}`,
              }}
            />
          ))}
        </div>

        {/* NEXT / PREVIOUS */}

        {totalPages > 1 && (
          <div className="home-notes-navigation">

            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className="home-nav-btn"
            >
              ← Previous
            </button>

            <span className="home-page-info">
              {currentPage} / {totalPages}
            </span>

            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="home-nav-btn"
            >
              Next →
            </button>

          </div>
        )}

      </main>

      <Footer />
    </>
  );
}

export default Home;