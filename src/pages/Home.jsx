import React, { useState } from "react";
import AboutSection from "../components/About/AboutSection";
import FooterSection from "../components/Footer/FooterSection";
import HeroSection from "../components/Hero/HeroSection";
import MobileMenu from "../components/MobileMenu/MobileMenu";
import Navbar from "../components/Navbar/Navbar";
import Projects from "../components/Projects/Projects";
import ResumeSection from "../components/Resume/ResumeSection";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <MobileMenu isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <AboutSection />
      <ResumeSection />
      <Projects />
      <FooterSection />
    </div>
  );
};

export default Home;
