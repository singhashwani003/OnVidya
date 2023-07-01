/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);


  return (
    <>
      <header
        className="site-header  home-one-header top-0 w-full z-[999] rt-sticky ">
        <div className="main-header py-6">
          <div className="container">
            <div className=" flex items-center justify-between">
              <Link
                to={"/"}
                className="brand-logo flex-none lg:mr-10 md:w-auto max-w-[120px] "
              >
              <h3 className="font-bold text-dark">OnVidya </h3>
              </Link>
              <div className="flex items-center flex-1">
                <div className="flex-1 main-menu relative mr-[74px]">
                  <ul className="menu-active-classNamees">
                    <li className={`menu-item-has-children `}>
                      <Link to={"/"}>Home</Link>
                    </li>
                    <li className="menu-item-has-children">
                      <a class="menu-child" href="#">About</a>
                      <ul className="sub-menu">
                        <li>
                          <Link to={"/react-templates/edumim/about"}>
                            About Us
                          </Link>
                        </li>
                        <li>
                          <Link to={"/react-templates/edumim/instructor-two"}>
                            Instructor
                          </Link>
                        </li>
                        <li>
                          <Link to={"/react-templates/edumim/event"}>
                            Event
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                    <Link to={"/react-templates/edumim/courses"}>
                    Courses
                  </Link>
                    </li>
                    <li className="menu-item-has-children">
                    <Link to={"/react-templates/edumim/single-blog"}>
                    Blog
                  </Link>
                    </li>
                    <li>
                      <Link to={"/react-templates/edumim/contacts"}>
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="flex-none flex space-x-[18px]">
                  <div className=" hidden lg:block">
                    <Link to={"/react-templates/edumim/contacts"} className="btn btn-primary py-[15px] px-8">
                      Start Free Trial
                    </Link>
                  </div>
                  <div className=" block   lg:hidden">
                    <button
                      type="button"
                      className=" text-3xl md:w-[56px] h-10 w-10 md:h-[56px] rounded bg-[#F8F8F8] flex flex-col items-center justify-center
                                        menu-click"
                      onClick={() => setActiveMobileMenu(!activeMobileMenu)}
                    >
                      <iconify-icon
                        icon="cil:hamburger-menu"
                        rotate="180deg"
                      ></iconify-icon>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {activeMobileMenu && (
        <MobileMenu
          activeMenu={activeMobileMenu}
          setActiveMenu={setActiveMobileMenu}
        />
      )}
    </>
  );
};

export default Header;
