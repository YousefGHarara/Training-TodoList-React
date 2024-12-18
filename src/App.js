import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import AddTodo from "./pages/addTodo";
import DisplayList from "./pages/displayList";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new-todo" element={<AddTodo />} />
      <Route path="/display" element={<DisplayList />} />
      <Route path="/*" element={<h1>Oopse !! 🥹🥹</h1>} />
    </Routes>
  );
};

export default App;
