import React, { useState } from "react";
import GlobalStyle from "../components/GlobalStyle";
import Hero from "../components/Hero";
import Sidebar from "../components/Sidebar";
import InfoSection from "../components/InfoSection";
import MyProjects from "../components/MyProjects";
import Navbar from "../components/Navbar";
import Offer from "../components/Offer";
import ScrollToTop from "../components/ScrollToTop";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ScrollToTop />
      <GlobalStyle />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <InfoSection />
      <Offer />
      <MyProjects />
    </>
  );
};

export default Home;
