import React, { useState } from "react";
import Expertise from "./Expertise";
import Comfortable from "./Comfortable";
import Familiar from "./Familier";
import Interest from "./Interest";
import Stack from "./Stack";

function Skills() {
  const [activeComponent, setActiveComponent] = useState("Expertise");

  const renderComponent = () => {
    switch (activeComponent) {
      case "Expertise":
        return <Expertise />;
      case "Comfortable":
        return <Comfortable />;
      case "Familiar":
        return <Familiar />;
      case "Interest":
        return <Interest />;
      case "Stack":
        return <Stack />;
      default:
        return <Expertise />;
    }
  };

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-1 border rounded-lg bg-white">
      {/* Sidebar */}
      <div className="lg:border-r-2 lg:border-b-0 md:border-b-2 sm:border-b-2 p-5">
        <p className="text-xl font-bold mb-3">Skills</p>
        <p
          className={`font-semibold mb-3 cursor-pointer ${activeComponent === "Expertise" ? "text-blue-500 bg-blue-100 p-2 rounded-lg" : "text-gray-500 hover:text-blue-400"
            }`}
          onClick={() => setActiveComponent("Expertise")}
        >
          Expertise
        </p>
        <p
          className={`font-semibold mb-3 cursor-pointer ${activeComponent === "Comfortable" ? "text-blue-500 bg-blue-100 p-2 rounded-lg" : "text-gray-500 hover:text-blue-400"
            }`}
          onClick={() => setActiveComponent("Comfortable")}
        >
          Comfortable
        </p>
        <p
          className={`font-semibold mb-3 cursor-pointer ${activeComponent === "Familiar" ? "text-blue-500 bg-blue-100 p-2 rounded-lg" : "text-gray-500 hover:text-blue-400"
            }`}
          onClick={() => setActiveComponent("Familiar")}
        >
          Familiar
        </p>
        <p
          className={`font-semibold mb-3 cursor-pointer ${activeComponent === "Interest" ? "text-blue-500 bg-blue-100 p-2 rounded-lg" : "text-gray-500 hover:text-blue-400"
            }`}
          onClick={() => setActiveComponent("Interest")}
        >
          Interest
        </p>
        <p
          className={`font-semibold cursor-pointer ${activeComponent === "Stack" ? "text-blue-500 bg-blue-100 p-2 rounded-lg" : "text-gray-500 hover:text-blue-400"
            }`}
          onClick={() => setActiveComponent("Stack")}
        >
          Stack
        </p>
      </div>

      {/* Main Content */}
      <div className="lg:col-span-2 p-5">{renderComponent()}</div>
    </div>
  );
}

export default Skills;
