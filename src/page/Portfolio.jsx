import React from "react";

export const Portfolio = () => {
  const project = [
    {
      title: "Job-Portel",
      image: "/job-portel.jpeg",
      link: "https://hoomandaws.github.io/VPN-Mobile-approach/",
    },
    {
      title: "E-commerce site",
      image: "/job-portel.jpeg",
      link: "https://hoomandaws.github.io/VPN-Mobile-approach/",
    },
    {
      title: "Chat-App",
      image: "/job-portel.jpeg",
      link: "https://hoomandaws.github.io/VPN-Mobile-approach/",
    },
    {
      title: "Personal-portfolio",
      image: "/job-portel.jpeg",
      link: "https://github.com/hoomandaws/Personal-portfolio",
    },
    {
      title: "Job-Portel",
      image: "/job-portel.jpeg",
      link: "https://hoomandaws.github.io/VPN-Mobile-approach/",
    },
  ];
  return (
    <>
      <div className="bg-primary-blue p-10">
        <p className=" text-center  text-white font-bold text-[30px] py-4 uppercase underline-offset-auto">
          My <span className="text-primary-orange">Portfolio</span>
        </p>
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 cursor-pointer ">
          {project.map((el) => {
            return (
              <div className="bg-white rounded-3xl p-4">
                <img src={el.image} alt="" className="w-full rounded-2xl " />
                <p className="font-bold">{el.title}</p>
                <button className="font-light italic border border-primary-orange rounded-2xl w-[150px] h-[30px] hover:bg-primary-purple hover:text-white hover:border-hidden">
                  <a href={el.link}>Demo/Github</a>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
