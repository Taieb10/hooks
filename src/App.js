import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Movie from "./components/Movie";
import Nav from "./components/Nav";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div class="body">
      <Router>
        <Nav />
        <div className="container">
          <Movie />
        </div>
      </Router>
    </div>
  );
}

export default App;
