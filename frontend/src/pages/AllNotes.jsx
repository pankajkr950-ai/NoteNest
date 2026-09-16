import React, { useEffect, useState } from "react";
import {
  getAllNotes,
  deleteNote,
} from "../services/noteService";
import NoteCard from "../components/NoteCard/NoteCard";
import "../styles/AllNotes.css";

function AllNotes() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get all notes
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const data = await getAllNotes();

        setNotes(data.notes);
      } catch (error) {
        console.error("Error fetching notes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  // Delete note
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this note?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      await deleteNote(id);

      // Remove deleted note from screen
      setNotes((prevNotes) =>
        prevNotes.filter((note) => note._id !== id)
      );

      alert("Note deleted successfully!");
    } catch (error) {
      console.error("Error deleting note:", error);

      alert("Failed to delete note");
    }
  };

  if (loading) {
    return (
      <h2 className="notes-loading">
        Loading notes...
      </h2>
    );
  }

  return (
    <div className="all-notes-page">
      <div className="notes-container">

        <div className="notes-header">
          <h1>All Notes</h1>

          <p>
            Find and explore notes shared by students.
          </p>
        </div>

        {notes.length === 0 ? (
          <p className="no-notes">
            No notes found.
          </p>
        ) : (
          <div className="notes-grid">

            {notes.map((note) => (
              <NoteCard
                key={note._id}
                note={note}
                onDelete={handleDelete}
              />
            ))}

          </div>
        )}

      </div>
    </div>
  );
}

export default AllNotes;