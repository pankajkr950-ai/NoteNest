import React from "react";
import { Link } from "react-router-dom";
import "../styles/NoteCard.css";

function NoteCard({ note, onDelete }) {
  if (!note) {
    return null;
  }

  return (
    <div className="note-card">

      {/* IMAGE */}
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

      {/* CONTENT */}
      <div className="note-card-content">

        {/* TITLE */}
        <h2 className="note-title">
          {note.title}
        </h2>

        {/* BRANCH + SEMESTER */}
        <p className="note-branch">
          🎓 {note.branch} • {note.semester}
        </p>

        {/* SUBJECT */}
        <p className="note-subject">
          📖 {note.subject}
        </p>

        {/* BOTTOM */}
        <div className="note-bottom">

          {/* RATING */}
          <span className="note-rating">
            ⭐ {note.rating}
          </span>

          {/* VIEW */}
          {note._id && (
            <Link
              to={`/notes/${note._id}`}
              className="view-note-btn"
            >
              View Note →
            </Link>
          )}

        </div>

        {/* EDIT + DELETE */}
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