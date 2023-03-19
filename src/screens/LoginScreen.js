import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function LoginScreen() {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value } = event.target;
    setUserInfo((prevUserInfo) => {
      return {
        ...prevUserInfo,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("https://shopping-app-backend-umber.vercel.app/api/users/login", userInfo)
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.response));
        localStorage.setItem("loggedIn", true);
        navigate(-1);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }

  return (
    <div className="mx-auto w-[25rem] min-h-fit mt-20 bg-neutral-100 p-10 rounded-lg">
      <h1 className="flex justify-center text-2xl mb-5 font-medium">Login</h1>
      <input
        type={"email"}
        className="rounded-md py-2 px-3 bg-transparent border placeholder:italic border-black border-opacity-40 focus:border-sky-500 focus:ring-sky-500 focus:ring-1 focus:outline-none invalid:border-red-500 invalid:ring-red-500 invalid:ring-1 w-full mb-5"
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />
      <input
        type={"password"}
        className="rounded-md py-2 px-3 bg-transparent border placeholder:italic border-black border-opacity-40 focus:border-sky-500 focus:ring-sky-500 focus:ring-1 focus:outline-none invalid:border-red-500 invalid:ring-red-500 invalid:ring-1 w-full mb-10"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />
      <button
        onClick={handleSubmit}
        className="h-12 w-full rounded-md transition-colors cursor-pointer font-extralight hover:bg-black hover:text-white border border-black"
      >
        Login
      </button>
      <p className="mt-4">
        New?{" "}
        <Link className="hover:text-blue-500" to={"/register"}>
          Regsiter Now
        </Link>
      </p>
    </div>
  );
}

export default LoginScreen;
