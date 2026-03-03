import React from "react";

export default function SignUP() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-base-100">
      
      <div className="flex bg-base-200 rounded-xl shadow-lg overflow-hidden max-w-4xl">

        <div className="w-1/2 bg-white flex items-center justify-center p-8">
          <img
            src="src\assets\signInIllutration.png"
            alt="shopping illustration"
            className="max-h-72"
          />
        </div>

        <div className="w-1/2 p-10 flex flex-col justify-center">

          <h2 className="text-xl font-semibold mb-6">
            Please Enter Your Details
          </h2>

          <input
            type="text"
            placeholder="Full Name"
            className="input input-bordered w-full mb-4"
          />

          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full mb-4"
          />

          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full mb-4"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="input input-bordered w-full mb-4"
          />

          <div className="flex gap-4">
            <button className="btn flex-1">Sign Up</button>
          </div>

          <a className="text-sm text-gray-500 block w-full text-center pt-4">Already have an account? Log In</a>


        </div>

      </div>

    </div>
  );
}