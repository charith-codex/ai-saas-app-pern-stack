import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { openSignIn } = useClerk();

  return (
    <nav className="fixed z-5 w-full backdrop-blur-2xl flex justify-between items-center py-5 px-4 sm:px-20 xl:px-32">
      <div
        className="flex gap-2 items-center text-slate-700 font-extrabold cursor-pointer px-10"
        onClick={() => navigate("/")}
      >
        <img
          src={assets.logo}
          className="h-8 w-auto cursor-pointer transition-transform hover:scale-105"
          alt="logo"
        />
        <h1 className="text-xl">Zebra AI</h1>
      </div>

      {user ? (
        <div className="px-10">
          <UserButton />
        </div>
      ) : (
        <button
          onClick={openSignIn}
          className="flex items-center cursor-pointer gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-full font-medium text-sm hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          Get Started
          <ArrowRight className="w-4 h-4" />
        </button>
      )}
    </nav>
  );
};

export default Navbar;
