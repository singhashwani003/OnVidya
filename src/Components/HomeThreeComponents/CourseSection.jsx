/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { coursesData } from "../../constant/dummyData";
import CourseFilter from "./CourseFilter";
import SingleCourse from "./SingleCourse";


const CourseSection = () => {
  const [activeData, setActiveData] = useState(0);
  const [filterData, setFilterData] = useState([]);
  return (
  
    <div className=" section-padding bg-[url('../images/all-img/section-bg-11.png')] bg-cover bg-no-repeat">
      <div className="container">
        <div className="flex items-center flex-wrap flex-y-4">
          <div className="flex-1">
            <div className="mini-title">Popular Courses</div>
            <div className="column-title ">
              Choose Our Top <span className="shape-bg">Courses</span>
            </div>
          </div>
          <div className="flex-none">
            <CourseFilter
              mainData={coursesData}
              activeData={activeData}
              setActiveData={setActiveData}
              setFilterData={setFilterData} />
          </div>
        </div>
        <Link to={"/react-templates/edumim/courses"}>
        <div className="flex flex-wrap pt-10 grids">
          {filterData?.length > 0 ? (
            filterData.map((data, index) => (
              <SingleCourse key={index} data={data} />
            ))
          ) : (
            <h1 style={{ textAlign: "center" }}>Not Found Any Data</h1>
          )}

        </div>
        </Link>
        <div className="text-center lg:pt-16 pt-10">
          <Link to={"/react-templates/edumim/courses"} className=" btn btn-primary">
            View All Courses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseSection;
