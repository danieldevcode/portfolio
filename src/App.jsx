import React, { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/app.scss";

function App() {
  const navbar = useRef(null);
  const homeSection = useRef(null);

  useEffect(() => {
    // Navbar scroll padding
    document.documentElement.style.setProperty(
      "--scroll-padding",
      `${navbar.current.clientHeight}px`,
    );

    // Scroll event listener
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    const sectionHeight = homeSection.current.clientHeight;
    const navbarHeight = navbar.current.clientHeight;

    if (window.scrollY >= sectionHeight - navbarHeight)
      navbar.current.classList.add("nav-secondary");
    else navbar.current.classList.remove("nav-secondary");
  }

  return (
    <div className="main-container">
      <Navbar reference={navbar} />
      <Home reference={homeSection} />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
