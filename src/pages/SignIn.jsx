import bg from "/SignUp.svg";
import { auth, provider } from "./config";
import { signInWithPopup } from "firebase/auth"
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppleIcon, BaseSignLogo, DiscordIcon, DiscordMobile, GitMobile, GithubIcon, GoogleIcon, LinkedInIcon, LinkedinMobile, TweetMobile, TwitterIcon } from "../assets/icons"

const socials = [
  {
    id: 1,
    icon: <GithubIcon className="text-black-10 w-10 h-10" />,
    title: "Gihtub",
  },
  {
    id: 2,
    icon: <TwitterIcon className="text-white w-10 h-10" />,
    title: "Twitter",
  },
  {
    id: 3,
    icon: <LinkedInIcon className="text-white w-10 h-10" />,
    title: "LinkedIn",
  },
  {
    id: 4,
    icon: <DiscordIcon className="text-white w-10 h-10" />,
    title: "Discord",
  },

];

const socialsMobile = [
  {
    id: 1,
    icon: <GitMobile className="text-black-10 w-10 h-10" />,
    title: "Gihtub",
  },
  {
    id: 2,
    icon: <TweetMobile className="text-white w-10 h-10" />,
    title: "Twitter",
  },
  {
    id: 3,
    icon: <LinkedinMobile className="text-white w-10 h-10" />,
    title: "LinkedIn",
  },
  {
    id: 4,
    icon: <DiscordMobile className="text-white w-10 h-10" />,
    title: "Discord",
  },

];


function Singin() {
  const navigate = useNavigate();
  const socialArray = socials.map((items) => {
    return (
      <div key={items.id} className="px-5 cursor-pointer">
        {items.icon}
      </div>
    );
  });

  const socialMobile = socialsMobile.map((items) => {
    return (
      <div key={items.id} className="px-2 cursor-pointer">
        {items.icon}
      </div>
    );
  });
  const [value, setValue] = useState('')

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email)
      localStorage.setItem("email", data.user.email)
      navigate("/uploadcsv");
    })
  }

  useEffect(() => {
    setValue(localStorage.getItem('email'))
  })

  return (
    <div className="flex h-[100vh] bg-gray-signin ">
      <div className="flex flex-col  md:min-w-[50%] m-auto items-start justify-center px-16">
        <div className="p-4">
          <img src="/dunlinailogo.png" alt="logo"/>
          <h1 className="text-4xl font-bold my-2 font-montserrat  ">Create Account</h1>
            <p className="my-2 font-lato text-[#637D92] font-semibold">Sign up today nad unloack more power of QuickBooks with dunlin.ai</p>
        </div>

        {/* Quick Sign In */}
        <div className="flex w-full gap-2 md:gap-4 md:ml-0">
          <div className="w-full">
            <button
              type="button"
              className="flex m-4 items-center font-montserrat w-full bg-black-10 justify-center px-4 md:px-8 py-4 text-xs rounded-lg gap-2"
              onClick={handleClick}
            >
              <GoogleIcon className="mr-2 text-center w-5 h-5" />
              <h1 className="text-white-20 font-semibold text-md whitespace-nowrap ">Continue with Google</h1>
            </button>
          </div>
        </div>

        {/* Login Form */}
        <div className="min-w-full my-5">
          <form className="px-5 py-7 ">
                      <label>
                          <span className="font-lato">Username</span>
                          <br />
                          <input
                              className="py-2 font-lato rounded-lg px-5 w-full mb-4 mt-2"
                              placeholder="Your username"
                          />
                      </label>
            <label>
              <span className="font-lato">Email ID</span>
              <br />
              <input
                className="py-2 font-lato rounded-lg px-5 w-full mb-4 mt-2"
                placeholder="Enter Email"
              />
            </label>
            <br />
            <label>
              <span className="font-lato">Password</span>
              <br />
              <input
                placeholder="password"
                className="py-2 font-lato rounded-lg px-5 w-full mb-4 mt-2"
              />
            </label>
            <button
              type="button"
              onClick={() => {
                alert("Sign in with Google button");
              }}
              className="w-full py-2 bg-blue-10 rounded-lg text-white-10 font-semibold font-montserrat"
            >
              Create Account
            </button>
          </form>
        </div>

              <p className="text-[#637D92] font-semibold text-center text-md font-lato flex-wrap ml-20 md:ml-24">
          Already have an account?{" "}
          <span className="text-[#346BD4] cursor-pointer">
            Log in
          </span>
        </p>

        <div className="flex visible md:invisible ml-24">
          <div className="flex ">{socialMobile}</div>
        </div>
      </div>
          <div className="hidden md:flex md:flex-col md:min-w-[50%]  md:justify-between relative">
              <img src={bg} className="fixed" />
              <div className="flex flex-col h-full justify-between z-10 px-20 py-10 absolute bottom-0 left-0 right-0">
                  <div className="flex text-white-10 font-normal">
                      Beyond UI: It's the design equivalent of <br />
                      discovering the theory of relativity for your creativity! <br />
                      - Tim Cook
                  </div>
              </div>
          </div>

    </div>

  );
};

export default Singin;