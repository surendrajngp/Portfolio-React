import React, { useState } from "react";
import HeroSection from "../components/Hero/HeroSection";
import MobileMenu from "../components/MobileMenu/MobileMenu";
import Navbar from "../components/Navbar/Navbar";
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
    </div>
  );
};

export default Home;
