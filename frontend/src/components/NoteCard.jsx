import React from "react";
import { Link } from "react-router-dom";
import "../styles/NoteCard.css";

function NoteCard({ note, onDelete }) {
  if (!note) {
    return null;
  }

  return (
    <div className="note-card">

      {/* Note Image */}
      <div className="note-card-image">
        {note.image ? (
          <img
            src={note.image}
            alt={note.title}
          />
        ) : (
          <div className="default-note-image">
            📚
          </div>
        )}
      </div>

      {/* Note Content */}
      <div className="note-card-content">

        {/* Note Title */}
        <h2 className="note-title">
          {note.title}
        </h2>

        {/* Branch & Semester */}
        <p className="note-branch">
          🎓 {note.branch} • {note.semester}
        </p>

        {/* Subject */}
        <p className="note-subject">
          📖 {note.subject}
        </p>

        {/* Rating & View Button */}
        <div className="note-bottom">

          <span className="note-rating">
            ⭐ {note.rating || 0}
          </span>

          {note._id && (
            <Link
              to={`/notes/${note._id}`}
              className="view-note-btn"
            >
              View Note →
            </Link>
          )}

        </div>

        {/* Edit & Delete */}
        {onDelete && note._id && (
          <div className="note-actions">

            <Link
              to={`/notes/${note._id}/edit`}
              className="edit-note-btn"
            >
              ✏️ Edit
            </Link>

            <button
              className="delete-note-btn"
              onClick={() => onDelete(note._id)}
            >
              🗑️ Delete
            </button>

          </div>
        )}

      </div>
    </div>
  );
}

export default NoteCard;