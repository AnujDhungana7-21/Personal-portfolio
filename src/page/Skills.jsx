import React from "react";
import { FiArrowRightCircle } from "react-icons/fi";
export const Skills = () => {
  const data = [
    {
      Title: "Frontend Tools and Technologies",
      subTitle: {
        name: ["Html", "Css", "JavaScript", "React", "Redux", "Tailwind"],
      },
    },
    {
      Title: "Backend Tools and Technologies",
      subTitle: {
        name: ["Node", "MongoDb", "Express", "PostMan", "RestApi", "Joi,Jwt"],
      },
    },
    {
      Title: "Other Tools and Technologies",
      subTitle: {
        name: ["Git", "GitHub", "Problem-solving, Teamwork"],
      },
    },
  ];
  console.log();
  return (
    <div className="bg-primary-purple">
      <p className=" text-center  text-white font-bold text-[30px] py-4 uppercase">
        My <span className="text-primary-orange">Skills</span>{" "}
      </p>
      <div className="  container ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-4  ">
          {data.map((el) => {
            return (
              <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight  dark:text-white text-center text-primary-orange ">
                      {el.Title}
                    </h5>
                  </a>
                  <div>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {el.subTitle.name.map((el) => {
                        return (
                          <>
                            {" "}
                            <p className="font-bold flex gap-4 items-center">
                              <FiArrowRightCircle />
                              {el}
                            </p>
                          </>
                        );
                      })}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
