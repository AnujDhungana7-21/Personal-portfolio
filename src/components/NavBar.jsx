import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";

const NavBar = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [active, setActive] = useState("/");
  const location = useLocation();

  const isShowMenu = () => {
    setIsMenu((prevState) => !prevState);
  };

  const handleClick = (path) => {
    setActive(path);
    setIsMenu(false); // Close menu after selecting an item
  };

  return (
    <>
      <div className="bg-primary-blue text-white">
        <div className="flex justify-between items-center container relative">
          <Link to="/" onClick={() => handleClick("/")}>
            <img src="/logoRemovebg.png" alt="Logo" className="w-[100px]" />
          </Link>
          <CiMenuBurger
            className="w-[80px] h-[40px] lg:hidden cursor-pointer"
            onClick={isShowMenu}
          />
          <ul
            className={`fixed z-20 bg-primary-orange top-0 right-0 left-0 bottom-0 text-center w-[50%] text-[30px] lg:text-[20px] ${
              isMenu ? "block" : "hidden"
            } lg:flex lg:gap-5 lg:static lg:bg-transparent`}
          >
            <IoIosClose
              onClick={isShowMenu}
              className="cursor-pointer text-[50px] lg:hidden"
            />
            <li>
              <Link
                to="/"
                onClick={() => handleClick("/")}
                style={{ color: active === "/" ? "orange" : "white" }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/About"
                onClick={() => handleClick("/About")}
                style={{ color: active === "/About" ? "orange" : "white" }}
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                to="/Skills"
                onClick={() => handleClick("/Skills")}
                style={{ color: active === "/Skills" ? "orange" : "white" }}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="/Portfolio"
                onClick={() => handleClick("/Portfolio")}
                style={{ color: active === "/Portfolio" ? "orange" : "white" }}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/Contact"
                onClick={() => handleClick("/Contact")}
                style={{ color: active === "/Contact" ? "orange" : "white" }}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="hidden lg:block">
            <button className="main-btn">Any Project?</button>
          </div>
        </div>
      </div>
      {isMenu && (
        <div
          className="fixed bottom-0 top-0 right-0 left-0 bg-[rgba(0,0,0,0.7)] z-10 w-[100%]"
          onClick={isShowMenu}
        ></div>
      )}
    </>
  );
};

export default NavBar;
