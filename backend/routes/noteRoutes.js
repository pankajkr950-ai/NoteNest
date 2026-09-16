const express = require("express");

const {
  createNote,
  getAllNotes,
  getNoteById,
  updateNote,
  deleteNote,
} = require("../controllers/noteController");

const router = express.Router();

// CREATE NOTE
router.post("/", createNote);

// GET ALL NOTES
router.get("/", getAllNotes);

// GET SINGLE NOTE
router.get("/:id", getNoteById);

// UPDATE NOTE
router.put("/:id", updateNote);

// DELETE NOTE
router.delete("/:id", deleteNote);

module.exports = router;