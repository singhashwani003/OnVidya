/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  fbIcon,
  pnIcon,
  twIcon,
  insIcon,
  mainEvent,
  circleClock,
  rc1,
  rc2,
} from "../constant/images";

const EventDetails = () => {
  useEffect(() => {
    if (document.getElementById("timer")) {
      var countDownDate = new Date("Oct 5, 2023 15:45:25").getTime(); // Update the count down every 1 second

      var x = setInterval(function () {
        // Get today's date and time
        var now = new Date().getTime(); // Find the distance between now and the count down date

        var distance = countDownDate - now; // Time calculations for days, hours, minutes and seconds

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000); // Display the result in the element with id="demo"

        document.getElementById("timer").innerHTML =
          "<div class='text-[44px] font-bold'>" +
          days +
          "<div class=' text-lg font-medium mt-2 capitalize'>days</div></div>" +
          "<div class='text-[44px] font-bold'>" +
          hours +
          "<div class='text-lg font-medium mt-2 capitalize'>hours</div></div>" +
          "<div class='text-[44px] font-bold'>" +
          minutes +
          "<div class='text-lg font-medium mt-2 capitalize'>minutes</div></div>" +
          "<div class='text-[44px] font-bold'>" +
          seconds +
          "<div class='text-lg font-medium mt-2 capitalize'>seconds</div></div>"; // If the count down is finished, write some text

        if (distance < 0) {
          clearInterval(x);
          document.getElementById("timer").innerHTML = "EXPIRED";
        }
      }, 1000);
    }
  }, []);

  return (
    <div className="nav-tab-wrapper tabs  section-padding">
      <div className="container">
        <img src={mainEvent} alt="" className=" lg:mb-10 mb-6 block w-full" />
        <div className="grid grid-cols-12 gap-[30px]">
          <div className="lg:col-span-8 col-span-12">
            <h3>International Tech - Stack Review</h3>
            <div className="lg:my-6 my-4">
            Join us for the International Tech Stack Review Conference, a premier gathering of tech enthusiasts, industry experts, and innovators from around the globe. This exciting conference aims to delve into the latest advancements, trends, and challenges in the world of technology stacks.
            <br/><br/>The International Tech Stack Review Conference provides a unique platform for attendees to explore the diverse array of technology stacks employed by organizations across various sectors. From web development frameworks and programming languages to cloud platforms and databases, this conference offers in-depth discussions, case studies, and interactive sessions to uncover the strengths and weaknesses of different tech stacks.
            <br/><br/>Attendees will have the opportunity to learn from renowned speakers who are at the forefront of the tech industry. These experts will share their insights, experiences, and best practices for selecting, implementing, and optimizing tech stacks to drive innovation and achieve business goals. The conference will also feature panel discussions, workshops, and hands-on demonstrations to provide practical knowledge and actionable strategies for attendees.
            </div>
            <div className="bg-secondary text-white p-10 rounded-md">
              <div
                id="timer"
                className="md:flex space-y-4 md:space-y-0 justify-between text-center "
              >
                {/* <div className="text-[44px] font-bold">
                  {days}
                  <div className="text-lg font-medium mt-2 capitalize">
                    days
                  </div>
                </div>

                <div className="text-[44px] font-bold">
                  {hours}
                  <div className="text-lg font-medium mt-2 capitalize">
                    hours
                  </div>
                </div>

                <div className="text-[44px] font-bold">
                  {minutes}
                  <div className="text-lg font-medium mt-2 capitalize">
                    minutes
                  </div>
                </div>

                <div className="text-[44px] font-bold">
                  {seconds}
                  <div className="text-lg font-medium mt-2 capitalize">
                    seconds
                  </div>
                </div> */}
              </div>
            </div>
            <div className=" py-6">
            Whether you're a software developer, IT professional, tech entrepreneur, or technology enthusiast, the International Tech Stack Review Conference is a must-attend event to stay ahead in the ever-evolving tech landscape. Engage in stimulating conversations, network with like-minded individuals, and gain valuable insights into the future of technology stacks.<br/><br/>

            Mark your calendars and join us at the International Tech Stack Review Conference to deepen your understanding of tech stacks, explore emerging technologies, and discover the optimal approaches for building robust, scalable, and efficient software solutions.
            
            </div>
            <div className="flex justify-between border-y border-[#ECECEC] py-4 md:mt-12 mt-10">
              <div className=" text-black font-semibold">Previous</div>
              <ul className="flex space-x-3 lg:justify-end items-center  ">
                {[fbIcon, pnIcon, twIcon, insIcon].map((item, indx) => (
                  <li key={indx}>
                    <a href="#" className="flex h-8 w-8">
                      <img src={item} alt="" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:col-span-4 col-span-12 relative lg:-mt-20">
            <div className="sidebarWrapper max-w-[90%] mx-auto space-y-[30px]">
              <div className="wdiget custom-text space-y-5 ">
                <h4 className=" widget-title">Event Details</h4>
                <ul className="list space-y-6  ">
                  <li className=" flex space-x-3 ">
                    <div className="flex-1 space-x-3 flex">
                      <img src={circleClock} alt="" />
                      <div>Thu, Oct 5, 2023 03:45 PM</div>
                    </div>
                  </li>
                  <li className=" flex space-x-3 ">
                    <div className="flex-1 space-x-3 flex">
                      <img src={circleClock} alt="" />
                      <div className="sales-trans">events@onvidya.com</div>
                    </div>
                  </li>
                </ul>
                <Link to={"/react-templates/edumim/contacts"} className=" btn btn-primary btn-md text-lg">
                  Book A Seat
                </Link>
              </div>

              <div className="wdiget">
                <h4 className=" widget-title">Special Guests</h4>
                <ul className="list space-y-6">
                  <li className=" flex space-x-4 border-[#ECECEC] ">
                    <div className="flex-none ">
                      <div className="h-20 w-20   rounded-full">
                        <img
                          src={rc1}
                          alt=""
                          className=" w-full h-full object-cover rounded-full"
                        />
                      </div>
                    </div>
                    <div className="flex-1 ">
                      <div className="mb-1 font-bold text-black capitalize">
                      Meghana Shah
                      </div>
                      <span className=" text-primary font-semibold">
                        UI/UX Designer
                      </span>
                    </div>
                  </li>
                  <li className=" flex space-x-4 border-[#ECECEC] ">
                    <div className="flex-none ">
                      <div className="h-20 w-20   rounded-full">
                        <img
                          src={rc2}
                          alt=""
                          className=" w-full h-full object-cover rounded-full"
                        />
                      </div>
                    </div>
                    <div className="flex-1 ">
                      <div className="mb-1 font-bold text-black capitalize">
                      Rohit Pawar
                      </div>
                      <span className=" text-primary font-semibold">
                      Lead Swift and iOS Developer
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
