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

const EventDetailTwo = () => {
  useEffect(() => {
    if (document.getElementById("timer")) {
      var countDownDate = new Date("Oct 15, 2023 15:45:25").getTime(); // Update the count down every 1 second

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
            <h3>The AI And Its Tools For Developer Efficiency</h3>
            <div className="lg:my-6 my-4">
            Welcome to "AI and Its Tools for Developer Efficiency," a groundbreaking conference dedicated to exploring the transformative potential of artificial intelligence (AI) in enhancing developer productivity and efficiency. This conference is designed for developers, programmers, and technology enthusiasts who are eager to leverage AI-powered tools and techniques to streamline their workflows and optimize their software development processes.
            <br/><br/>The "AI and Its Tools for Developer Efficiency" conference brings together industry-leading experts, researchers, and practitioners who will share their knowledge, experiences, and insights on how AI can revolutionize the way developers work. Attendees will have the opportunity to learn about cutting-edge AI technologies, such as machine learning, natural language processing, and automation, that can empower developers to build smarter, faster, and more efficient applications.
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
            Through engaging keynote presentations, informative panel discussions, and interactive workshops, participants will explore real-world case studies and success stories of AI-driven developer tools. They will gain practical knowledge and hands-on experience with tools like code generation, automated testing, intelligent debugging, and code optimization, which can significantly enhance their productivity and code quality.<br/><br/>
            The conference will also delve into the ethical considerations and challenges associated with AI adoption in software development. Experts will discuss topics such as bias detection and mitigation, transparency, and responsible AI practices to ensure that developers can leverage AI tools while maintaining ethical and inclusive development practices.
<br/><br/>Join us at the "AI and Its Tools for Developer Efficiency" conference to stay ahead of the curve and discover how AI is transforming the way developers work. Network with fellow professionals, engage in thought-provoking discussions, and unlock the potential of AI to streamline your development processes and unlock new opportunities in the digital landscape.
            
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
                      <div> Thu, Oct 15, 2023 03:45 PM
                      </div>
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

export default EventDetailTwo;
