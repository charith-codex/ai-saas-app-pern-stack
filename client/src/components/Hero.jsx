import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="px-4 sm:px-20 xl:px-32 relative flex flex-col items-center justify-center w-full bg-gradient-to-br from-purple-50 via-white to-purple-100 min-h-screen">
      <div className="text-center max-w-4xl mx-auto mb-8">
        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight mb-3">
          Create amazing content with <br/>
          <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
            {" "}
            AI tools
          </span>
        </h1>
        <p className="text-lg lg:text-xl text-gray-600 mb-5 max-w-2xl mx-auto leading-relaxed">
          Leverage the power of AI to generate high-quality content
          effortlessly.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <button
          onClick={() => navigate("/ai")}
          className="cursor-pointer bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-4 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Get Started
        </button>
        <button className="bg-transparent border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-4 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
          Watch Demo
        </button>
      </div>

      <div className="flex items-center gap-3 text-gray-600">
        <img src={assets.user_group} alt="users" className="h-12" />
        <span className="text-md font-medium">Trusted by 7k+ people</span>
      </div>
    </div>
  );
};

export default Hero;
