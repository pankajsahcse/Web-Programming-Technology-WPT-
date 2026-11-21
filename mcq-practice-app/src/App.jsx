
import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import "./style.css";

function App() {

  const [selectedSubject, setSelectedSubject] = useState(null);

  function handleSubjectSelect(subject) {
    setSelectedSubject(subject);
    console.log("Selected Subject:", subject.name);
  }

  return (
    <>
      <Navbar />

      <Home onSelectSubject={handleSubjectSelect} />
    </>
  );
}

export default App;
