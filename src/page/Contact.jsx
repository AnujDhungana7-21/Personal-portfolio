import React, { useRef } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { RiMailLine } from "react-icons/ri";
import Swal from "sweetalert2";

export const Contact = () => {
  const formRef = useRef(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "24bdfbfb-4a29-4a5c-8548-fa6326c5b7a4");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Form Successfully Submitted!",
        icon: "success",
      });
      // Clear the form inputs
      formRef.current.reset();
    } else {
      Swal.fire({
        title: "Error!",
        text: "There was an error submitting the form.",
        icon: "error",
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-primary-purple text-white p-4">
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
        <form
          ref={formRef}
          className="flex flex-col space-y-4 md:w-1/2 md:pl-8 mt-8 md:mt-0"
          onSubmit={onSubmit}
        >
          <input
            className="p-3 rounded bg-indigo-700 placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            type="text"
            placeholder="Full Name"
            name="fullname"
          />
          <input
            className="p-3 rounded bg-indigo-700 placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            type="email"
            placeholder="Email Address"
            name="email"
          />
          <input
            className="p-3 rounded bg-indigo-700 placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            type="tel"
            placeholder="Phone Number"
            name="phone"
          />
          <input
            className="p-3 rounded bg-indigo-700 placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            type="text"
            placeholder="Subject"
            name="subject"
          />
          <textarea
            className="p-3 rounded bg-indigo-700 placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 h-32"
            placeholder="Your Message"
            name="message"
          ></textarea>
          <button className="p-3 rounded bg-indigo-500 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-300">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
