import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { RiMailLine } from "react-icons/ri";
export const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center  bg-primary-purple text-white p-4">
      <h1 className="text-3xl mb-8">Contact</h1>
      <div className="flex flex-col-reverse md:flex-row w-full max-w-4xl container">
        <div className="flex flex-col space-y-4 md:w-1/2 md:pr-8 pt-8 ">
          <div className="flex items-center gap-2">
            <FiPhoneCall />
            <p>+977-9844128810</p>
          </div>
          <div className="flex items-center gap-2">
            <RiMailLine />
            <p>anuj.dhungana143@gmail.com</p>
          </div>
          <div className="flex items-center gap-2">
            <CiLocationOn />
            <p>Kathmandu, Nepal</p>
          </div>
        </div>
        <form className="flex flex-col space-y-4 md:w-1/2 md:pl-8 mt-8 md:mt-0">
          <input
            className="p-3 rounded bg-indigo-700 placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            type="text"
            placeholder="Full Name"
          />
          <input
            className="p-3 rounded bg-indigo-700 placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            type="email"
            placeholder="Email Address"
          />
          <input
            className="p-3 rounded bg-indigo-700 placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            type="tel"
            placeholder="Phone Number"
          />
          <input
            className="p-3 rounded bg-indigo-700 placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            type="text"
            placeholder="Subject"
          />
          <textarea
            className="p-3 rounded bg-indigo-700 placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 h-32"
            placeholder="Your Message"
          ></textarea>
          <button className="p-3 rounded bg-indigo-500 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-300">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
