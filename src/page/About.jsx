import React, { useState } from "react";

export const About = () => {
  const [showMore, setShowMore] = useState(false);
  const handelShowMore = () => {
    setShowMore((el) => !el);
  };
  return (
    <>
      <p className="bg-primary-blue text-center  text-white font-bold text-[30px] py-4 uppercase">
        About <span className="text-primary-orange">Me</span>{" "}
      </p>
      <div className="bg-primary-blue lg:h-[500px] flex flex-col items-center justify-center">
        <div className="container lg:flex lg:items-center w-full">
          <div className="lg:w-[400px] md:w-[300px] w-[225px] mx-auto">
            {/* font-size: x-large;
  color: orange;
  text-transform: uppercase;
  padding: 20px; */}
            <img
              src="/profile.jpg"
              alt=""
              className=" rounded-3xl max-w-full"
            />
          </div>
          <div className="text-white flex flex-col items-center lg:w-[50%] lg:text-[20px]">
            <p className="p-[20px] font-bold text-primary-orange uppercase">
              MERN Stack Developer
            </p>
            <p className="text-justify">
              Hi ! I'm Anuj Dhungana , a passionate MERN stack developer with a
              keen interest in crafting robust and scalable web applications.
              With a solid foundation in JavaScript and extensive experience
              with the MERN (MongoDB, Express.js, React.js, Node.js) stack, I
              thrive on bringing innovative ideas to life through clean and
              efficient code.
            </p>
            {showMore && (
              <p className="text-justify">
                My journey into the world of software development began with a
                fascination for creating interactive and dynamic web
                experiences. Over the years, I've honed my skills in front-end
                development with React.js, ensuring seamless user interfaces
                that not only look great but also offer exceptional performance
                and usability
              </p>
            )}

            <button onClick={handelShowMore} className="main-btn my-4">
              {showMore ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
