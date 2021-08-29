import React from "react";
import "./styles/main.css";
import Navbar from "./components/Nav";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App bg-gray-50">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
