import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import "./App.css";
import NewGame from "./components/NewGame/NewGame";

function App() {
  return (
    <div className="site">
      <Router>
        <h1>Taboo!</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/NewGame" element={<NewGame />} />
          <Route exact path="/Game/:key" element={<NewGame />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
