import { PricingTable } from "@clerk/clerk-react";
import React from "react";

const Plan = () => {
  return (
    <div className="max-w-2xl mx-auto z-20 my-30">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
          Our Plans
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Choose the plan that fits your needs and unlock the full potential of
          AI-powered content creation.
        </p>
      </div>

      <div className="mt-14 max-sm:mx-8">
        <PricingTable /> 
      </div>
    </div>
  );
};

export default Plan;
