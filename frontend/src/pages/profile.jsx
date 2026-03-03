import React from "react";

export default function Profile() {
  return (
    <div className="min-h-screen bg-[#F0F0F0] px-8 py-10">

      
      <h1 className="heading">
        My Profile
      </h1>

      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        
        <div className="bg-white text-left rounded-xl shadow-md p-8">

          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Profile Information
          </h2>
          <p className="text-gray-500 mb-6 text-sm">
            Update your personal details shown to other users
          </p>

          <form className="space-y-5">

            
            <div>
              <label className="block text-left text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                value="shubhamneupane36@gmail.com"
                disabled
                className="mt-2 w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-gray-500"
              />
              <p className="text-xs text-gray-400 mt-1">
                Email cannot be changed
              </p>
            </div>

            
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#96A78D]"
              />
            </div>

            
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="98XXXXXXXX"
                className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#96A78D]"
              />
            </div>

            
            <div>
              <label className="block text-sm font-medium text-gray-700">
                City
              </label>
              <input
                type="text"
                placeholder="e.g., Kathmandu"
                className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#96A78D]"
              />
            </div>

            
            <button
              type="submit"
              className="w-full bg-[#96A78D] text-white py-2 rounded-md font-semibold hover:bg-[#7F9278] transition"
            >
              Save Profile
            </button>

          </form>
        </div>


        
        <div className="bg-white text-left rounded-xl shadow-md p-8">

          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Change Password
          </h2>
          <p className="text-gray-500 mb-6 text-sm">
            Update your account password
          </p>

          <form className="space-y-5">

           
            <div>
              <label className="block text-sm font-medium text-gray-700">
                New Password
              </label>
              <input
                type="password"
                placeholder="Enter new password"
                className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#96A78D]"
              />
            </div>

            
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Confirm New Password
              </label>
              <input
                type="password"
                placeholder="Confirm new password"
                className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#96A78D]"
              />
            </div>

            
            <button
              type="submit"
              className="w-full bg-[#B6CEB4] text-gray-300 py-2 rounded-md font-semibold hover:bg-[#96A78D] hover:text-white transition"
            >
              Change Password
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}