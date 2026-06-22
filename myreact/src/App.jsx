import React from "react";
import Header from "./components/Header";
import TeamPage from "./pages/TeamPage";
import Footer from "./components/Footer";
import CounterPage from "./pages/CounterPage";
import InputControl from "./pages/InputControl";
import TodoList from "./pages/TodoList";
import Posts from "./pages/Posts";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<TeamPage />} />
        <Route path="/counter" element={<CounterPage />} />
        <Route path="/todos" element={<TodoList />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
