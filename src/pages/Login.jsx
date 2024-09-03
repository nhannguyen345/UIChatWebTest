import React from "react";
import BackgroundImage from "../assets/6764486_3433814.jpg";
const Login = () => {
  return (
    <div
      className="h-screen w-screen bg-cover flex flex-col justify-center items-center text-center"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <h1 className="font-bold text-[40px] text-[#495057] mb-3 leading-[1.2]">
        Sign in
      </h1>
      <p className="text-[#343a40] mb-6 text-[14px]">
        We are Different, We Make You Different.
      </p>
    </div>
  );
};

export default Login;
