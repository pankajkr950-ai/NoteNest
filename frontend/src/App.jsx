import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AllNotes from "./pages/AllNotes";
import CreateNote from "./pages/CreateNote";
import NoteDetails from "./pages/NoteDetails";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import EditNote from "./pages/EditNote";

function App() {
  return (
    <BrowserRouter>
      <Routes>

  <Route path="/" element={<Home />} />

  <Route path="/notes" element={<AllNotes />} />

  <Route path="/notes/create" element={<CreateNote />} />

  <Route path="/notes/:id" element={<NoteDetails />} />

  <Route path="/signup" element={<Signup />} />

  <Route path="/login" element={<Login />} />

  <Route path="/notes/:id/edit" element={<EditNote />} />

</Routes>
    </BrowserRouter>
  );
}

export default App;