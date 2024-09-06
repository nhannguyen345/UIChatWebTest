import React, { useState } from "react";
import HeaderOfProfileSetting from "./HeaderOfProfileSetting";
const InputField = ({ label, value, onChange, type = "text" }) => (
  <div className="mb-2">
    <label className="block text-[15px] leading-[1.5] text-[#495057] mb-[6px]">
      {label}
    </label>
    <input
      type={type}
      className="w-full h-11 px-3 py-[6px] text-[14px] leading-[1.5] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);
const ProfileSettingContent = () => {
  const [formData, setFormData] = useState({
    firstName: "Catherine",
    lastName: "Richardson",
    mobileNumber: "+01-222-364522",
    birthDate: "20/11/1992",
    emailAddress: "catherine.richardson@gmail.com",
    website: "www.cathericharson.com",
    address: "1134 Ridder Park Road, San Fransisco, CA 94851",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleReset = () => {
    // Reset form to initial values
    setFormData({
      firstName: "Catherine",
      lastName: "Richardson",
      mobileNumber: "+01-222-364522",
      birthDate: "20/11/1992",
      emailAddress: "catherine.richardson@gmail.com",
      website: "www.cathericharson.com",
      address: "1134 Ridder Park Road, San Fransisco, CA 94851",
    });
  };
  return (
    <div className="flex flex-col w-full h-screen">
      <HeaderOfProfileSetting />
      <div className="px-4 overflow-y-scroll no-scrollbar">
        <div className="border border-gray-200 rounded-[4px] mt-5">
          <div className="px-5 py-3 border-b bg-[#f8f9fa]">
            <h3 className="text-[14px] leading-[1.2] font-medium text-[#495057] mb-[6px]">
              Account
            </h3>
            <p className="text-[12px] leading-[1.2] text-[#adb5bd]">
              Update personal & contact information
            </p>
          </div>
          <form onSubmit={handleSubmit} className="p-5">
            <div className="grid grid-cols-1 gap-y-3 gap-x-6 sm:grid-cols-2 mb-3">
              <InputField
                label="First Name"
                value={formData.firstName}
                onChange={(value) => handleChange("firstName", value)}
              />
              <InputField
                label="Last Name"
                value={formData.lastName}
                onChange={(value) => handleChange("lastName", value)}
              />
              <InputField
                label="Mobile number"
                value={formData.mobileNumber}
                onChange={(value) => handleChange("mobileNumber", value)}
              />
              <InputField
                label="Birth date"
                value={formData.birthDate}
                onChange={(value) => handleChange("birthDate", value)}
              />
              <InputField
                label="Email address"
                value={formData.emailAddress}
                onChange={(value) => handleChange("emailAddress", value)}
                type="email"
              />
              <InputField
                label="Website"
                value={formData.website}
                onChange={(value) => handleChange("website", value)}
              />
            </div>
            <InputField
              label="Address"
              value={formData.address}
              onChange={(value) => handleChange("address", value)}
            />
            <div className="px-5 mt-6 flex items-center justify-end gap-2 space-x-3">
              <button
                type="button"
                onClick={handleReset}
                className="text-sm font-medium text-[#adb5bd] hover:text-gray-700 hover:underline"
              >
                Reset
              </button>
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#665dfe] hover:bg-[#4237fe] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>

        <div className="border border-gray-200 rounded-[4px] mt-5">
          <div className="px-5 py-3 border-b bg-[#f8f9fa]">
            <h3 className="text-[14px] leading-[1.2] font-medium text-[#495057] mb-[6px]">
              Social network profiles
            </h3>
            <p className="text-[12px] leading-[1.2] text-[#adb5bd]">
              Update personal & contact information
            </p>
          </div>
          <form onSubmit={handleSubmit} className="p-5">
            <div className="grid grid-cols-1 gap-y-3 gap-x-6 sm:grid-cols-2 mb-3">
              <InputField
                label="First Name"
                value={formData.firstName}
                onChange={(value) => handleChange("firstName", value)}
              />
              <InputField
                label="Last Name"
                value={formData.lastName}
                onChange={(value) => handleChange("lastName", value)}
              />
              <InputField
                label="Mobile number"
                value={formData.mobileNumber}
                onChange={(value) => handleChange("mobileNumber", value)}
              />
              <InputField
                label="Birth date"
                value={formData.birthDate}
                onChange={(value) => handleChange("birthDate", value)}
              />
              <InputField
                label="Email address"
                value={formData.emailAddress}
                onChange={(value) => handleChange("emailAddress", value)}
                type="email"
              />
              <InputField
                label="Website"
                value={formData.website}
                onChange={(value) => handleChange("website", value)}
              />
            </div>
            <InputField
              label="Address"
              value={formData.address}
              onChange={(value) => handleChange("address", value)}
            />
            <div className="px-5 mt-6 flex items-center justify-end gap-2 space-x-3">
              <button
                type="button"
                onClick={handleReset}
                className="text-sm font-medium text-[#adb5bd] hover:text-gray-700 hover:underline"
              >
                Reset
              </button>
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#665dfe] hover:bg-[#4237fe] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettingContent;
