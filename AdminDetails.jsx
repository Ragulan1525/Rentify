import { useState } from "react";
import VerificationHub from "./VerificationHub.jsx";
import UserDirectory from "./UserDirectory.jsx";
import PropertyDatabase from "./PropertyDatabase.jsx";

function AdminDetails() {
  const [activeTab, setActiveTab] = useState("UserDirectory"); // Default active tab state

  // Dummy counts for buttons (can be replaced with dynamic data fetching)
  const totalOwners = 120;
  const totalProperties = 340;
  const totalUsers = 450;

  return (
    <>
      {/* Gradient Card */}
      <div className="rounded-3xl shadow-md mx-3.5 md:mx-5 lg:mx-32 xl:mx-40 px-4 sm:px-6 lg:px-8 pt-10 mt-16 pb-10 mb-12 flex flex-col gap-6 bg-gradient-to-tl from-blue-600 to-violet-600 text-center">
        <h1 className="text-3xl font-medium text-gray-100">Admin Panel</h1>
        {/* <p className="text-lg text-gray-300">Manage your data seamlessly</p> */}

        {/* Statistics Buttons */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <button
            type="button"
            className="inline-flex justify-center items-center px-6 py-3 gap-x-2 text-lg font-medium rounded-lg bg-gray-100 text-gray-900 shadow-md hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-blue-500"
          >
            Total Owners: <span className="font-bold">{totalOwners}</span>
          </button>
          <button
            type="button"
            className="inline-flex justify-center items-center px-6 py-3 gap-x-2 text-lg font-medium rounded-lg bg-gray-100 text-gray-900 shadow-md hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-blue-500"
          >
            Total Properties: <span className="font-bold">{totalProperties}</span>
          </button>
          <button
            type="button"
            className="inline-flex justify-center items-center px-6 py-3 gap-x-2 text-lg font-medium rounded-lg bg-gray-100 text-gray-900 shadow-md hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-blue-500"
          >
            Total Users: <span className="font-bold">{totalUsers}</span>
          </button>
        </div>
      </div>

      {/* Tabs Section */}
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
            activeTab === "PropertyDatabase"
              ? "border-b-blue-600 text-gray-900"
              : "text-gray-500"
          } relative min-w-0 flex-1 bg-white border-s border-b-2 py-4 px-4 text-sm font-medium text-center overflow-hidden hover:text-gray-700 hover:bg-gray-50 focus:outline-none focus:text-blue-600`}
          id="bar-with-underline-item-3"
          aria-selected={activeTab === "PropertyDatabase"}
          role="tab"
        >
          Property Database
        </button>
      </nav>

      {/* Tab Content Section */}
      <div className="mt-3 mx-2 md:mx-8 lg:mx-12">
        {activeTab === "UserDirectory" && <UserDirectory />}
        {activeTab === "VerificationHub" && <VerificationHub />}
        {activeTab === "PropertyDatabase" && <PropertyDatabase />}
      </div>
    </>
  );
}

export default AdminDetails;
