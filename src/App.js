import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Movie from "./components/Movie";
import Nav from "./components/Nav";
function App() {
  return (
    <div class="body">
      <Nav />
      <div className="container">
        <Movie />
      </div>
    </div>
  );
}

export default App;
