import React from "react";

export default function SignIn() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-base-100">
      
      <div className="flex bg-base-200 rounded-xl shadow-lg overflow-hidden max-w-4xl">

        <div className="w-1/2 bg-white flex items-center justify-center p-8">
          <img
            src="src\assets\signInIllustration.png"
            alt="shopping illustration"
            className="max-h-72"
          />
        </div>

        <div className="w-1/2 p-10 flex flex-col justify-center">

          <h2 className="text-xl font-semibold mb-6">
            Please Log In To Your Account
          </h2>

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

          <div className="text-sm mb-6">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="toggle toggle-sm" />
              Remember Me
            </label>

            <a className="text-red-500 block w-full text-left pt-4">Forgot Password?</a>
          </div>

          <div className="flex gap-4">
            <button className="btn flex-1">Login</button>
          </div>

          <div className="flex gap-4 mt-2">
            <button className="btn flex-1 bg-gray-500!">Sign Up</button>
          </div>

        </div>

      </div>

    </div>
  );
}