import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const PageBanner = ({ pageName, pageTitle, num, title }) => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);
  return (
    <div className="breadcrumbs section-padding bg-[url('../images/all-img/bred.png')] bg-cover bg-center bg-no-repeat toppers">
      <div className="container text-center">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default PageBanner;
