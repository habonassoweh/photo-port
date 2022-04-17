import React from "react";
import Nav from "./components/Nav/Index";
import About from "./components/About/Index";
import './App.css';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
