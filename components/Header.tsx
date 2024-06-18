"use client";

import { FiSearch } from "react-icons/fi";

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import UserAvatar from "./UserAvatar";
import PagePadding from "./PagePadding";
import Logo from "./Logo";
import Navigator from "./Navigator";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./ThemeButton";

const HeaderDrawer = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Drawer direction="left" open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger>{children}</DrawerTrigger>
      <DrawerContent className="w-[240px] h-full">
        <div className="py-3">
          <div className="px-3">
            <Logo isInDrawer onClickClose={() => setIsOpen(false)} />
          </div>
          <Navigator />
        </div>
      </DrawerContent>
    </Drawer>
  );
};

const Header = ({ children }: { children: React.ReactNode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const headRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.scrollY;
      setIsScrolled(scrollValue > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header ref={headRef} className="relative w-full h-full">
      {/*  searchSection */}
      <section
        className={cn(
          "sticky top-0 left-0 z-10",
          isScrolled && "bg-neutral-900"
        )}
      >
        <PagePadding>
          <div className="h-[64px] flex items-center justify-between">
            <article className="h-[42px] min-w-[480px] hidden lg:flex  bg-neutral-700 opacity-75 rounded-2xl px-[16px] gap-[16px]  items-center">
              <div>
                <FiSearch size={24} />
              </div>
              <input
                className="h-full w-full bg-transparent"
                type="text"
                placeholder="검색"
              />
            </article>
            <HeaderDrawer>
              <article className="lg:hidden">
                <Logo />
              </article>
            </HeaderDrawer>
            <article className="flex gap-6 items-center">
              <UserAvatar />
              <ModeToggle />
            </article>
          </div>
        </PagePadding>
      </section>
      <section>{children}</section>
    </header>
  );
};

export default Header;
