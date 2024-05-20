import React from "react";
import { About } from "./About";
import { Skills } from "./Skills";
import { Portfolio } from "./Portfolio";
import { HeroSection } from "./HeroSection";
import { Contact } from "./Contact";

export const Home = () => {
  return (
    <>
      <HeroSection />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </>
  );
};
