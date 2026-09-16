import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getNoteById } from "../services/noteService";
import "../styles/NoteDetails.css";

function NoteDetails() {
  const { id } = useParams();

  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const data = await getNoteById(id);
        setNote(data.note);
      } catch (error) {
        console.error("Error fetching note:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNote();
  }, [id]);

  if (loading) {
    return <h2 className="note-details-loading">Loading note...</h2>;
  }

  if (!note) {
    return (
      <div className="note-not-found">
        <h2>Note not found</h2>

        <Link to="/notes">
          ← Back to All Notes
        </Link>
      </div>
    );
  }

  return (
    <div className="note-details-page">
      <div className="note-details-container">

        <div className="note-details-image">
          {note.image ? (
            <img src={note.image} alt={note.title} />
          ) : (
            <div className="default-details-image">
              📚
            </div>
          )}
        </div>

        <div className="note-details-content">

          <h1>{note.title}</h1>

          <p className="note-details-description">
            {note.description}
          </p>

          <div className="note-details-info">
            <p>
              <strong>Branch:</strong> {note.branch}
            </p>

            <p>
              <strong>Semester:</strong> {note.semester}
            </p>

            <p>
              <strong>Subject:</strong> {note.subject}
            </p>

            <p>
              <strong>Rating:</strong> ⭐ {note.rating}
            </p>
          </div>

          <Link
            to="/notes"
            className="back-notes-btn"
          >
            ← Back to All Notes
          </Link>

        </div>

      </div>
    </div>
  );
}

export default NoteDetails;