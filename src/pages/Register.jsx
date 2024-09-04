import React, { useState } from "react";
import BackgroundImage from "../assets/6764486_3433814.jpg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../schemas/validationSchema";
import { BsEye } from "react-icons/bs";
import { BsEyeSlash } from "react-icons/bs";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmitHandler = (data) => {
    console.log({ data });
    reset();
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      className="h-screen w-screen bg-cover flex flex-col justify-center items-center text-center"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <h1 className="font-bold text-[40px] text-[#495057] mb-3 leading-[1.2]">
        Sign up
      </h1>
      <p className="text-[#343a40] mb-6 text-[14px]">
        We are Different, We Make You Different.
      </p>

      {/* Biểu mẫu */}
      <form
        className="mb-6 min-w-[360px] text-[14px] text-[#495057]"
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        {/* username field */}
        <input
          className="w-full h-[42px] py-[6px] px-[12px] mb-4 leading-[1.5] border border-[#ced4da] rounded bg-[#fff] outline-none"
          type="text"
          placeholder="Enter your name"
        />

        {/* email field */}
        <input
          className="w-full h-[42px] py-[6px] px-[12px] mb-4 leading-[1.5] border border-[#ced4da] rounded bg-[#fff] outline-none"
          type="text"
          placeholder="Enter your email"
        />

        {/* password field */}
        <div className="relative mb-4">
          <input
            className="w-full h-[42px] py-[6px] px-[12px] leading-[1.5] border border-[#ced4da] rounded bg-[#fff] outline-none"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 flex items-center px-3"
          >
            {showPassword ? <BsEyeSlash /> : <BsEye />}
          </button>
        </div>

        <button className="w-full text-[14px] text-[#fff] bg-[#665dfe] hover:bg-[#4237fe] leading-[1.5] font-semibold py-[14px] px-9 mb-6 outline-none rounded">
          SIGN UP
        </button>

        <p className="text-[14px]">
          Already have an account?{" "}
          <a
            className="text-[14px] text-[#665def] hover:text-[#4237fe] no-underline font-medium"
            href=""
          >
            Sign in.
          </a>
        </p>
      </form>
    </div>
  );
};

export default Register;
