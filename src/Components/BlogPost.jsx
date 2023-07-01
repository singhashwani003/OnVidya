/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  bs1,
  bs2,
  bs3,
  user3,
  comment,
  q,
  calender,
  clockIcon,
  fbIcon,
  pnIcon,
  twIcon,
  insIcon,
  rc3,
  rc1,
  insIcon1,
  insIcon3,
  insIcon2,
  search,
  rc2,
  insIcon4,
  insIcon5,
  insIcon6,
} from "../constant/images";
import ContactForm from "./ContactForm";

const BlogPost = () => {
  return (
    <div className="nav-tab-wrapper tabs  section-padding">
      <div className="container">
        <div className="grid grid-cols-12 gap-[30px]">
          <div className="lg:col-span-8 col-span-12">
            <div className="bg-[#F8F8F8] rounded-md">
              <img src={bs1} alt="" className=" rounded-t-md mb-10" />
              <div className="px-10 pb-10">
                <div className="flex  flex-wrap  xl:space-x-10 space-x-5 mt-6 mb-6">
                  <a className=" flex items-center space-x-2" href="#">
                    <img src={user3} alt="" />
                    <span>OnVidya</span>
                  </a>
                  <a className=" flex items-center space-x-2" href="#">
                    <img src={calender} alt="" />
                    <span>21 Feb, 22</span>
                  </a>
                  <a className=" flex items-center space-x-2" href="#">
                    <img src={clockIcon} alt="" />
                    <span>3 Min Read</span>
                  </a>
                </div>
                <h3>
                Embracing Live Lectures: Unlocking the Benefits for IT Executives and Students in IT Graduation Colleges
                </h3>
                <p className="mt-6">
                In the digital age, where remote learning and virtual collaboration have become the norm, the traditional classroom setting has undergone a significant transformation. Live lectures, conducted through webinars or video conferencing, have emerged as a powerful tool for training IT executives and students in IT graduation colleges. This blog post explores the numerous benefits that live lectures offer in imparting knowledge, fostering engagement, and preparing individuals for success in the dynamic world of information technology.
                </p>
                <blockquote className=" bg-secondary p-8 rounded-md bg-[url('../images/all-img/bb.png')] bg-cover bg-no-repeat bg-center my-8 text-white">
                  <img src={q} alt="" />
                  <div className=" text-xl font-semibold my-6">
                    “ Live lectures provide an opportunity to invite industry experts and guest speakers to address IT executives and students. These experts bring real-world experience, practical insights, and valuable knowledge that enriches the learning experience. Such interactions expose learners to diverse perspectives, industry best practices, and emerging technologies, preparing them to tackle real-world challenges effectively.”
                  </div>
                  <div className=" flex items-center space-x-3">
                    <span className=" inline-flex h-[3px] w-12 bg-white"></span>
                    <span className=" text-xl font-semibold">
                      Rosalina D. Jackson
                    </span>
                  </div>
                </blockquote>
                <p>
                This blog post explores the numerous benefits that live lectures offer in imparting knowledge, fostering engagement, and preparing individuals for success in the dynamic world of information technology.
                </p>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-[30px] my-8">
                  <img src={bs2} alt="" />
                  <img src={bs3} alt="" />
                </div>
                <h4 className="text-2xl mb-4">
                Real-Time Interaction and Engagement
                </h4>
                <p>
                Live lectures enable direct interaction between instructors and learners, creating a dynamic and engaging learning environment. IT executives and students can actively participate, ask questions, seek clarifications, and receive immediate feedback. This real-time engagement enhances comprehension, promotes discussion, and fosters a sense of community among learners.
                </p>
                <ul className="list-disc marker:text-secondary space-y-4 mt-6">
                  <li className="mini-title">
                  Flexibility and Accessibility :
                  </li>
                  <p>
                  With live lectures, geographical barriers no longer hinder access to quality education. IT executives and students can join lectures from anywhere, eliminating the need for travel and reducing time constraints. This flexibility allows learners to balance their professional or academic commitments while gaining valuable insights and staying updated on the latest industry trends.
                </p>
                  <li className="mini-title">
                  Collaborative Learning and Networking :
                  </li>
                  <p>Live lectures encourage collaboration and networking among IT executives and students. Through group discussions, breakout sessions, and team projects, learners can exchange ideas, share experiences, and learn from their peers. These collaborative efforts foster a spirit of innovation, teamwork, and the development of a professional network that can prove invaluable in their careers</p>
                  <li className="mini-title">
                  Stay Updated with Rapidly Changing Technology :
                  </li>
                  <p>Information technology is a rapidly evolving field, and staying abreast of the latest developments is crucial for IT professionals and students. Live lectures provide a platform for instructors to deliver up-to-date content, cutting-edge techniques, and insights into emerging technologies. By accessing real-time information, learners can remain at the forefront of advancements and adapt their skills accordingly.</p>
                  <li className="mini-title">
                  Enhanced Learning Resources :
                  </li>
                  <p>Live lectures often incorporate multimedia resources, interactive presentations, and live demonstrations to facilitate learning. Instructors can share screen recordings, conduct virtual labs, and showcase practical applications, making complex concepts more accessible and engaging. Additionally, these sessions can be recorded and made available for future reference, allowing learners to revisit and reinforce their understanding of the material.</p>
                  <li className="mini-title">
                  Conclusion :
                  </li>
                  <p>Live lectures have transformed the way IT executives and students in IT graduation colleges acquire knowledge and skills. By embracing this dynamic mode of education, individuals can benefit from real-time interaction, flexibility, industry expertise, collaborative learning, and the ability to stay updated in an ever-changing IT landscape. As technology continues to reshape the educational landscape, live lectures empower learners to adapt, innovate, and excel in their IT careers.
                  </p>
                  </ul>
                <div className="grid xl:grid-cols-2 grid-cols-1  gap-5 md:mt-14 mt-8 ">
                  <ul className="flex items-center space-x-3 ">
                    <li className=" text-black font-semibold">Tags:</li>
                    <li>
                      <a
                        href="#"
                        className=" px-3 py-1  bg-white rounded hover:text-primary"
                      >
                        Business
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className=" px-3 py-1  bg-white rounded hover:text-primary"
                      >
                        Education
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className=" px-3 py-1  bg-white rounded hover:text-primary"
                      >
                        Design
                      </a>
                    </li>
                  </ul>
                  <ul className="flex space-x-3 xl:justify-end items-center  ">
                    <li className=" text-black font-semibold">Share On:</li>

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
            </div>

            <div className=" mt-14">
              <h3 className=" mb-4">Leave A Reply</h3>
              <div>
                Your email address will not be published. Requires fields are
                marked*
              </div>
              <ContactForm />
            </div>
          </div>

          <div className="lg:col-span-4 col-span-12">
            <div className="sidebarWrapper space-y-[30px]">
              <div className="wdiget widget_search">
                <div className="bg-[#F8F8F8] flex  rounded-md shadow-e1 items-center  py-[4px] pl-3  relative">
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="Search keyword..."
                      className="border-none focus:ring-0 bg-transparent"
                    />
                  </div>
                  <div className="flex-none">
                    <button className="btn btn-primary">
                      <img src={search} alt="" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="wdiget">
              <h4 className="widget-title">Popular Tags</h4>
              <ul className="flex flex-wrap">
                <li className="mr-2 mb-2">
                  <a
                    href="#"
                    className="bg-[#F8F8F8] px-3 py-1 rounded text-base  transition-all  duration-150 hover:bg-primary hover:text-white"
                  >
                    Business
                  </a>
                </li>

                <li className="mr-2 mb-2">
                  <a
                    href="#"
                    className="bg-[#F8F8F8] px-3 py-1 rounded text-base  transition-all  duration-150 hover:bg-primary hover:text-white"
                  >
                    Education
                  </a>
                </li>

                <li className="mr-2 mb-2">
                  <a
                    href="#"
                    className="bg-[#F8F8F8] px-3 py-1 rounded text-base  transition-all  duration-150 hover:bg-primary hover:text-white"
                  >
                    Design
                  </a>
                </li>

                <li className="mr-2 mb-2">
                  <a
                    href="#"
                    className="bg-[#F8F8F8] px-3 py-1 rounded text-base  transition-all  duration-150 hover:bg-primary hover:text-white"
                  >
                    Students
                  </a>
                </li>

                <li className="mr-2 mb-2">
                  <a
                    href="#"
                    className="bg-[#F8F8F8] px-3 py-1 rounded text-base  transition-all  duration-150 hover:bg-primary hover:text-white"
                  >
                    Teachers
                  </a>
                </li>

                <li className="mr-2 mb-2">
                  <a
                    href="#"
                    className="bg-[#F8F8F8] px-3 py-1 rounded text-base  transition-all  duration-150 hover:bg-primary hover:text-white"
                  >
                    classNameroom
                  </a>
                </li>

                <li className="mr-2 mb-2">
                  <a
                    href="#"
                    className="bg-[#F8F8F8] px-3 py-1 rounded text-base  transition-all  duration-150 hover:bg-primary hover:text-white"
                  >
                    Online
                  </a>
                </li>

                <li className="mr-2 mb-2">
                  <a
                    href="#"
                    className="bg-[#F8F8F8] px-3 py-1 rounded text-base  transition-all  duration-150 hover:bg-primary hover:text-white"
                  >
                    e-Learning
                  </a>
                </li>

                <li className="mr-2 mb-2">
                  <a
                    href="#"
                    className="bg-[#F8F8F8] px-3 py-1 rounded text-base  transition-all  duration-150 hover:bg-primary hover:text- 
                      white"
                  >
                    Book
                  </a>
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

export default BlogPost;


