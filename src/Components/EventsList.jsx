/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { eventsData } from "../constant/dummyData";

const EventsList = () => {
  return (
    <div className="nav-tab-wrapper tabs  section-padding">
      <div className="container">
        <div className="grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
          {eventsData.map((item, index) => (
            <div
              className=" bg-white shadow-box5 rounded-[8px] transition duration-100 hover:shadow-box3"
              key={index}
            >
              <div className="course-thumb h-[297px] rounded-t-[8px]  relative">
                <Link to={item.url}><img
                  src={item.img}
                  alt=""
                  className=" w-full h-full object-cover rounded-t-[8px]"
                /></Link>
              </div>
              <div className="course-content p-8">
                <h4 className=" text-xl mb-5 font-bold">
                  <Link
                    to={item.url}
                    className=" hover:text-primary transition duration-150"
                  >{item.content}
                  </Link>
                </h4>
                <ul className=" list space-y-3 mb-6">
                  <li className=" flex space-x-2">
                    <span className="text-lg  text-secondary">
                      <iconify-icon icon="heroicons:calendar-days"></iconify-icon>
                    </span>
                    <span>{item.calendar}</span>
                  </li>
                  
                </ul>
                <Link
                  to={"/react-templates/edumim/contacts"}
                  className="btn px-8 py-[11px] bg-black text-white hover:bg-primary"
                >{item.Button}
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination mt-14">
          <ul className=" flex justify-center space-x-3">
            <li className="inline-flex">
              <a
                href="#"
                className="flex w-12 h-12 flex-col items-center justify-center bg-[#ECECEC] rounded font-semibold"
              >
                <iconify-icon
                  icon="heroicons:chevron-double-left-20-solid"
                  className=" text-2xl"
                ></iconify-icon>
              </a>
            </li>
            <li className="inline-flex">
              <a
                href="#"
                className="flex w-12 h-12 flex-col items-center justify-center bg-primary text-white rounded font-semibold"
              >
                1
              </a>
            </li>
            <li className="inline-flex">
              <a
                href="#"
                className="flex w-12 h-12 flex-col items-center justify-center bg-[#ECECEC] rounded font-semibold"
              >
                <iconify-icon
                  icon="heroicons:chevron-double-right-20-solid"
                  className=" text-2xl"
                ></iconify-icon>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EventsList;
