import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { Menu, X } from "lucide-react";

const Layout = () => {
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="flex flex-col items-start justify-start h-screen">
      <nav className="fixed z-50 w-full backdrop-blur-2xl flex justify-between items-center py-5 px-4 sm:px-20 xl:px-32">
        <span className="flex gap-2 items font-bold text-gray-700 items-center">
          <img
            src={assets.logo}
            alt="logo"
            onClick={() => navigate("/")}
            className="h-8 w-auto"
          />{" "}
          Zebra AI
        </span>
        {sidebar ? (
          <X
            onClick={() => setSidebar(false)}
            className="w-6 h-6 text-gray-600 sm:hidden"
          />
        ) : (
          <Menu
            onClick={() => setSidebar(true)}
            className="w-6 h-6 text-gray-600 sm:hidden"
          />
        )}
      </nav>

      <Outlet />
    </div>
  );
};

export default Layout;
