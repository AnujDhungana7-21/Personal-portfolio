import React from "react";

export const HeroSection = () => {
  return (
    <div className="bg-primary-purple">
      <div className="container w-full grid grid-cols-2 mx-auto">
        <div className="w-[50%] 2xl:py-[210px] xl:py-[175px]">
          <p>
            {" "}
            <span className="text-primary-orange">Hi, It's me</span> Anuj
            Dhungana And I'm a MERN STACK Developer
          </p>
          <p>
            A passionate MERN stack developer with a keen interest in crafting
            robust and scalable web applications. With a solid foundation in
            JavaScript and extensive experience with the MERN (MongoDB,
            Express.js, React.js, Node.js) stack.
          </p>
          <div></div>
          <p></p>
        </div>
        <div className="w-[50%] ">
          <img src="/HeroBanner.png" alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
};
