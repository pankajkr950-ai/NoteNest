import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getNoteById,
  updateNote,
} from "../services/noteService";
import "../styles/EditNote.css";

function EditNote() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    branch: "",
    semester: "",
    subject: "",
    rating: 0,
  });

  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  // Get existing note
  useEffect(() => {
    const fetchNote = async () => {
      try {
        const data = await getNoteById(id);

        setFormData({
          title: data.note.title,
          description: data.note.description,
          branch: data.note.branch,
          semester: data.note.semester,
          subject: data.note.subject,
          rating: data.note.rating,
        });
      } catch (error) {
        console.error("Error fetching note:", error);
        alert("Failed to load note");
      } finally {
        setLoading(false);
      }
    };

    fetchNote();
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Update note
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setUpdating(true);

      await updateNote(id, formData);

      alert("Note updated successfully!");

      navigate(`/notes/${id}`);
    } catch (error) {
      console.error("Error updating note:", error);
      alert("Failed to update note");
    } finally {
      setUpdating(false);
    }
  };

  if (loading) {
    return <h2 className="edit-note-loading">Loading note...</h2>;
  }

  return (
    <div className="edit-note-page">
      <div className="edit-note-container">

        <h1>Edit Note</h1>

        <p className="edit-note-subtitle">
          Update your note details.
        </p>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Note Title</label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Description</label>

            <textarea
              name="description"
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
              value={formData.rating}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="update-note-btn"
            disabled={updating}
          >
            {updating ? "Updating..." : "Update Note"}
          </button>

        </form>

      </div>
    </div>
  );
}

export default EditNote;