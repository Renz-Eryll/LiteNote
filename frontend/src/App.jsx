import React from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Create from "./pages/Create";
import NoteDetails from "./pages/NoteDetails";

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/note/:id" element={<NoteDetails />} />
      </Routes>
    </main>
  );
};

export default App;
