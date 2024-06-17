import React from "react";
import Navigator from "./Navigator";
import Logo from "./Logo";

const Sidebar = () => {
  return (
    <div className="hidden lg:flex lg:flex-col lg:fixed lg:top-0 lg:left-0 lg:w-[240px] lg:h-full lg:border-r-[1px] lg:border-neutral-600">
      <div className="p-[24px]">
        <Logo />
      </div>
      <div>
        <Navigator />
      </div>
    </div>
  );
};

export default Sidebar;
