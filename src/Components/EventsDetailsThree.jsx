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

const EventsDetailsThree = () => {
  useEffect(() => {
    if (document.getElementById("timer")) {
      var countDownDate = new Date("Oct 25, 2023 15:45:25").getTime(); // Update the count down every 1 second

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
            <h3>Fireside Chat With Developers Of CRED</h3>
            <div className="lg:my-6 my-4">
            Join us for an exclusive Fireside Chat with the Developers of CRED, a renowned and innovative fintech platform. In this insightful webinar, we will have the opportunity to engage in a candid conversation with the developers behind CRED, delving into their journey, challenges, and the technology that powers their groundbreaking platform.
            <br/><br/>During the Fireside Chat, you will hear firsthand from the developers about the process of building and scaling CRED, a platform that has revolutionized credit card bill payments and rewards. They will share their experiences, lessons learned, and the development strategies they employed to create a seamless user experience and achieve tremendous success in the fintech industry.
            <br/><br/>Discover the technological aspects that have contributed to CRED's remarkable growth and widespread adoption. The developers will discuss the software architecture, frameworks, and tools they utilized to create a secure, scalable, and high-performing platform that has garnered millions of users worldwide. Gain insights into their approach to data analytics, machine learning, and customer-centric design principles that have propelled CRED to the forefront of the fintech landscape.
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
            The Fireside Chat will also provide an opportunity for participants to ask questions directly to the developers of CRED, allowing for an interactive and engaging session. Whether you are a developer, entrepreneur, or fintech enthusiast, this webinar offers a unique chance to learn from the best in the industry and gain valuable insights into the world of fintech development.
            <br/><br/>Don't miss this exciting opportunity to gain a behind-the-scenes look at the development of CRED and discover the technological innovations that have made it one of the most successful fintech platforms today. Register now for the Fireside Chat with the Developers of CRED and expand your knowledge in the ever-evolving world of fintech.
            
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
                      <div>Thu, Oct 25, 2023 03:45 PM</div>
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

export default EventsDetailsThree;
