import React from "react";
import { Link } from "react-router-dom";
export const HeroSection = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Anuj_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="bg-primary-purple text-white flex justify-center items-center  py-12 px-8">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center container">
        <div className="text-center md:text-left md:mr-8 mb-8 md:mb-0">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">Hi, It's me</h1>
          <h2 className="text-3xl md:text-5xl font-bold text-blue-400 mb-4">
            Anuj Dhungana
          </h2>
          <h3 className="text-xl md:text-3xl text-orange-500 mb-4">
            And I'm a <span className="font-bold">MERN Stack Developer </span>
          </h3>
          <p className="text-sm md:text-base text-gray-400 mb-6 text-justify">
            MERN Stack Developer specializing in MongoDB, Express.js, React, and
            Node.js.
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mb-6">
            <Link
              to="https://www.facebook.com/anuj.dhungana.4?mibextid=ZbWKwL"
              className="text-blue-500"
              target="_blank"
            >
              <i className="fab fa-facebook fa-lg"></i>
            </Link>
            <Link
              to="https://www.linkedin.com/in/anuj-dhungana1/"
              className="text-blue-400"
              target="_blank"
            >
              <i className="fab fa-linkedin fa-lg"></i>
            </Link>
            <Link
              to="mailto: anuj.dhungana143@gmail.com"
              className="text-red-500"
              target="_blank  "
            >
              <i className="fab fa-google fa-lg"></i>
            </Link>
            <Link
              to="https://github.com/hoomandaws"
              target="_blank"
              className="text-gray-400"
            >
              <i className="fab fa-github fa-lg"></i>
            </Link>
          </div>
          <button className="main-btn " onClick={handleDownloadCV}>
            Download CV
          </button>
        </div>
        <div className="hidden md:flex justify-center items-center w-full md:w-1/2">
          <img
            src="/HeroBanner.png"
            alt="Developer Illustration"
            className="w-full max-w-xs md:max-w-none "
          />
        </div>
      </div>
    </div>
  );
};
