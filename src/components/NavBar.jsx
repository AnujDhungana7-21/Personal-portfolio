import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
const NavBar = () => {
  const [isMenu, setIsMenu] = useState(false);
  const isShowMenu = () => {
    setIsMenu((prevState) => !prevState);
  };
  return (
    <>
      <div className="bg-primary-blue text-white">
        <div className="flex justify-between items-center container relative">
          <Link to="/">
            <img src="/logoRemovebg.png" alt="" className="w-[100px]" />
          </Link>
          <CiMenuBurger
            className="w-[80px] h-[40px] lg:hidden cursor-pointer"
            onClick={isShowMenu}
          />
          <ul
            className={`fixed z-20 bg-primary-orange top-0 right-0 left-0 bottom-0 text-center w-[50%] text-[30px] lg:text-[20px] ${
              isMenu ? "block" : "hidden"
            } lg:flex lg:gap-5 lg:static lg:bg-transparent `}
          >
            <IoIosClose
              onClick={isShowMenu}
              className="cursor-pointer text-[50px] lg:hidden"
            />
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About Me</Link>
            </li>
            <li>
              <Link to="/Skills">Skills</Link>
            </li>
            <li>
              <Link to="/Portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
          <div className="hidden lg:block">
            <button className=" main-btn">Any Project ?</button>
          </div>
        </div>
      </div>
      {isMenu && (
        <div
          className="fixed bottom-0 top-0 right-o left-0 bg-[rgba(0,0,0,0.7)] z-10 w-[100%]"
          onClick={isShowMenu}
        ></div>
      )}
    </>
  );
};

export default NavBar;
