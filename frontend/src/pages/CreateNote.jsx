import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createNote } from "../services/noteService";
import "../styles/CreateNote.css";

function CreateNote() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    branch: "",
    semester: "",
    subject: "",
    rating: 0,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await createNote(formData);

      alert("Note created successfully!");

      navigate("/notes");
    } catch (error) {
      console.error("Error creating note:", error);
      alert("Failed to create note");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="create-note-page">
      <div className="create-note-container">

        <h1>Create New Note</h1>
        <p className="create-note-subtitle">
          Share your study notes with other students.
        </p>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Note Title</label>
            <input
              type="text"
              name="title"
              placeholder="Enter note title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              placeholder="Enter note description"
              value={formData.description}
              onChange={handleChange}
              rows="5"
              required
            />
          </div>

          <div className="form-row">

            <div className="form-group">
              <label>Branch</label>
              <input
                type="text"
                name="branch"
                placeholder="e.g. CSE"
                value={formData.branch}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Semester</label>
              <input
                type="text"
                name="semester"
                placeholder="e.g. 5th"
                value={formData.semester}
                onChange={handleChange}
                required
              />
            </div>

          </div>

          <div className="form-group">
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="e.g. Operating System"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Rating</label>
            <input
              type="number"
              name="rating"
              min="0"
              max="5"
              step="0.5"
              placeholder="0 - 5"
              value={formData.rating}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="create-note-btn"
            disabled={loading}
          >
            {loading ? "Creating..." : "Create Note"}
          </button>

        </form>

      </div>
    </div>
  );
}

export default CreateNote;