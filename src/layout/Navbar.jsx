import React from "react";
import CustomNavLink from "../components/ui/Navlink";
import { FaHome } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { ImStatsDots } from "react-icons/im";

const Navbar = () => {
  return (
    <>
      <div className="shadow-sm">
        <div className="container mx-auto max-w-[90%] flex items-center justify-between py-4">
          <div>
            <h1 className="text-3xl mr-4 md:text-4xl font-bold">Friend<span className="text-[#244D3F]">Hub</span></h1>
          </div>
          <div className="flex gap-1">
            <CustomNavLink to="/" icon={<FaHome  size={18} />}>
              Home
            </CustomNavLink>
            <CustomNavLink to="/timeline" icon={<IoTimeOutline   size={18} />}>
              Timeline
            </CustomNavLink>
            <CustomNavLink to="/stats" icon={<ImStatsDots   size={18} />}>
              Stats
            </CustomNavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
