import React from "react";
import Navigator from "./Navigator";
import Logo from "./Logo";
import Header from "./Header";

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex  h-full">
      <nav className="hidden lg:block w-[240px] border-r-[1px] border-neutral-600">
        <div className="p-[24px]">
          <Logo />
        </div>
        <div>
          <Navigator />
        </div>
      </nav>
      <div className="w-full lg:w-[calc(100%-240px)]">
        <Header>{children}</Header>
      </div>
    </div>
  );
};

export default Sidebar;
