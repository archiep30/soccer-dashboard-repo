import { useState } from "react";
import FixturesData from "./fixtures";
import ResultsData from "./results";

function FixturesResultsToggle() {
  const [activeTab, setActiveTab] = useState("fixtures");

  return (
    <div className="w-full h-full p-4 flex flex-col flex-grow">
      {/* Buttons */}
      <div className="flex mb-4">
        <button
          onClick={() => setActiveTab("fixtures")}
          className={`flex-1 py-2 rounded-l-lg ${
            activeTab === "fixtures"
              ? "bg-slate-950 text-white border"
              : "bg-gray-800 text-gray-400"
          }`}
        >
          Fixtures
        </button>
        <button
          onClick={() => setActiveTab("results")}
          className={`flex-1 py-2 rounded-r-lg ${
            activeTab === "results"
              ? "bg-slate-950 text-white border"
              : "bg-gray-800 text-gray-400"
          }`}
        >
          Results
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-scroll scroll-smooth [&::-webkit-scrollbar]:w-2
        dark:[&::-webkit-scrollbar-track]:bg-slate-700
        dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 ">
        {activeTab === "fixtures" ? <FixturesData /> : <ResultsData />}
        </div>
    </div>
  );
}

export default FixturesResultsToggle;