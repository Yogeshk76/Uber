import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const CaptainSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    setUserData({
      fullName: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
    });


    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
  };

  return (
    <div className="p-7 h-screen flex justify-between flex-col">
      <div>
        <img
          className="w-16 mb-10"
          src="https://logospng.org/download/uber/logo-uber-4096.png"
          alt=""
        />

        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-lg mb-2 font-medium">What's your name</h3>
          <div className="flex gap-3 mb-6">
            <input
              className="bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-lg placeholder:text-base"
              required
              type="text"
              placeholder="Firstname"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />

            <input
              className="bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-lg placeholder:text-base"
              required
              type="text"
              placeholder="Lastname"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>

          <h3 className="text-lg mb-2 font-medium">What's your email</h3>

          <input
            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            required
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <h3 className="text-lg mb-2 font-medium">Enter Password</h3>

          <input
            className="bg-[#eeeeee]  mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <button className="bg-[#111] text-white font-semibold mb-3 rouned px-4 py-2  w-full text-lg placeholder:text-base">
            Login
          </button>

          <p className="text-center">
            Already have an account ?{" "}
            <Link to="/captain-login" className="text-blue-600">
              Login here
            </Link>{" "}
          </p>
        </form>
      </div>

      <p className="text-[10px] leading-tight">
        This site is protected by reCAPTCHA and the{" "}
        <span className="underline">Google Privacy Policy</span> and
        {" "}
        <span className="underline">Terms of Service apply</span>.
      </p>
    </div>
  );
};

export default CaptainSignup;
