import { useState } from "react";
import VerificationHub from "./VerificationHub.jsx";
import UserDirectory from "./UserDirectory.jsx";
import PropertyDatabase from "./PropertyDatabase.jsx";

function AdminDetails() {
  const [activeTab, setActiveTab] = useState("UserDirectory"); // Set default active tab

  return (
    <>
      <nav
        className="relative z-0 flex border rounded-xl overflow-hidden mx-2 md:mx-8 lg:mx-12"
        aria-label="Tabs"
        role="tablist"
        aria-orientation="horizontal"
      >
        <button
          type="button"
          onClick={() => setActiveTab("UserDirectory")}
          className={`${
            activeTab === "UserDirectory"
              ? "border-b-blue-600 text-gray-900"
              : "text-gray-500"
          } relative min-w-0 flex-1 bg-white border-s border-b-2 py-4 px-4 text-sm font-medium text-center overflow-hidden hover:text-gray-700 hover:bg-gray-50 focus:outline-none focus:text-blue-600`}
          id="bar-with-underline-item-1"
          aria-selected={activeTab === "UserDirectory"}
          role="tab"
        >
         User Directory
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("VerificationHub")}
          className={`${
            activeTab === "VerificationHub"
              ? "border-b-blue-600 text-gray-900"
              : "text-gray-500"
          } relative min-w-0 flex-1 bg-white border-s border-b-2 py-4 px-4 text-sm font-medium text-center overflow-hidden hover:text-gray-700 hover:bg-gray-50 focus:outline-none focus:text-blue-600`}
          id="bar-with-underline-item-2"
          aria-selected={activeTab === "VerificationHub"}
          role="tab"
        >
          Verification Hub
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("PropertyDatabase")}
          className={`${
            activeTab === "VerificationHub"
              ? "border-b-blue-600 text-gray-900"
              : "text-gray-500"
          } relative min-w-0 flex-1 bg-white border-s border-b-2 py-4 px-4 text-sm font-medium text-center overflow-hidden hover:text-gray-700 hover:bg-gray-50 focus:outline-none focus:text-blue-600`}
          id="bar-with-underline-item-2"
          aria-selected={activeTab === "PropertyDatabase"}
          role="tab"
        >
          Property Database
        </button>
       
      </nav>

      <div className="mt-3 mx-2 md:mx-8 lg:mx-12">
        {/* Conditionally render each component based on the active tab */}
        {activeTab === "UserDirectory" && (
          <div
            id="bar-with-underline-1"
            role="tabpanel"
            aria-labelledby="bar-with-underline-item-1"
          >
            <UserDirectory/>
          </div>
        )}

{activeTab === "PropertyDatabase" && (
          <div
            id="bar-with-underline-1"
            role="tabpanel"
            aria-labelledby="bar-with-underline-item-1"
          >
            <PropertyDatabase />
          </div>
        )}  

        {activeTab === "VerificationHub" && (
          <div
            id="bar-with-underline-2"
            role="tabpanel"
            aria-labelledby="bar-with-underline-item-2"
          >
            <VerificationHub />
          </div>
        )}
        
      </div>
    </>
  );
}

export default AdminDetails;
