import React, { useState } from "react";
import AboutSection from "../components/About/AboutSection";
import HeroSection from "../components/Hero/HeroSection";
import MobileMenu from "../components/MobileMenu/MobileMenu";
import Navbar from "../components/Navbar/Navbar";
import ResumeSection from "../components/Resume/ResumeSection";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div id="home">
      <MobileMenu isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <AboutSection />
      <ResumeSection />
    </div>
  );
};

export default Home;
