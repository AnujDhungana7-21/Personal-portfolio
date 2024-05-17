import React from "react";
import { About } from "./About";
import { Skills } from "./Skills";

export const Home = () => {
  return (
    <>
      <div className="font-bold text-center">Home Section</div>
      <About />
      <Skills />
    </>
  );
};
