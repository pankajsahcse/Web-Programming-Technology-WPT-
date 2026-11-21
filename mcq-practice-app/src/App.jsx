
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";

import { Routes, Route } from "react-router-dom";

import "./style.css";

function App() {

  return (
    <>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/test/:subject" element={<Quiz />} />

      </Routes>
    </>
  );
}

export default App;
