import React, { useState } from "react";
import Overview from "./Overview";
import WorkAndEducation from "./WorkAndEducation";
import PlacesLived from "./PlacesLived";
import ContactAndBasicInfo from "./ContactAndBasicInfo"

function About(props) {
  const { dark } = props;
  const [activeComponent, setActiveComponent] = useState("Overview");

  const renderComponent = () => {
    switch (activeComponent) {
      case "Overview":
        return <Overview />;
      case "Work and Education":
        return <WorkAndEducation />;
      case "Places Lived":
        return <PlacesLived />;
      case "Contact and Basic Info":
        return <ContactAndBasicInfo />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className={`grid lg:grid-cols-3 md:grid-cols-1 border rounded-lg ${dark ? 'text-white' : 'bg-white'} shadow-md shadow-purple-300`}>
      {/* Sidebar */}
      <div className="lg:border-r-2 lg:border-b-0 md:border-b-2 sm:border-b-2 p-5">
        <p className="text-xl font-bold mb-3">About</p>
        <p
          className={`font-semibold mb-3 cursor-pointer ${activeComponent === "Overview" ? "text-blue-500 bg-blue-100 p-2 rounded-lg" : "text-gray-500 hover:text-blue-400"
            }`}
          onClick={() => setActiveComponent("Overview")}
        >
          Overview
        </p>
        <p
          className={`font-semibold mb-3 cursor-pointer ${activeComponent === "Work and Education" ? "text-blue-500 bg-blue-100 p-2 rounded-lg" : "text-gray-500 hover:text-blue-400"
            }`}
          onClick={() => setActiveComponent("Work and Education")}
        >
          Work and education
        </p>
        <p
          className={`font-semibold mb-3 cursor-pointer ${activeComponent === "Places Lived" ? "text-blue-500 bg-blue-100 p-2 rounded-lg" : "text-gray-500 hover:text-blue-400"
            }`}
          onClick={() => setActiveComponent("Places Lived")}
        >
          Places lived
        </p>
        <p
          className={`font-semibold cursor-pointer ${activeComponent === "Contact and Basic Info" ? "text-blue-500 bg-blue-100 p-2 rounded-lg" : "text-gray-500 hover:text-blue-400"
            }`}
          onClick={() => setActiveComponent("Contact and Basic Info")}
        >
          Contact and basic info
        </p>
      </div>

      {/* Main Content */}
      <div className="lg:col-span-2 p-5">{renderComponent()}</div>
    </div>
  );
}

export default About;
