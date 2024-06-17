import React from "react";
import Navigator from "./Navigator";
import Logo from "./Logo";

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-full">
      <nav className="w-[240px] border-r-[1px] border-neutral-600 ">
        <div className="p-[24px]">
          <Logo />
        </div>
        <div>
          <Navigator />
        </div>
      </nav>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default Sidebar;
