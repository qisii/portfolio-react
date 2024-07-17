import React from "react";
import "./App.css";
import Header from "./componets/header/Header";
import Home from "./componets/home/Home";
import About from "./componets/about/About";
import Skills from "./componets/skills/Skills";
import Footer from "./componets/footer/Footer";
import Work from "./componets/work/Work";

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Work />
        <Footer />
      </main>
    </>
  );
}

export default App;
